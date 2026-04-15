import { NextResponse } from "next/server";
import { Redis } from '@upstash/redis';

// Vercel KV 혹은 Upstash Redis 환경변수가 존재할 경우 연동
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = redisUrl && redisToken ? new Redis({
  url: redisUrl,
  token: redisToken,
}) : null;

export async function POST(req: Request) {
  try {
    const { situation, ladderName } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const prompt = `
당신은 부모-자녀(또는 부모 자신) 간의 긍정언어를 코칭하는 전문가입니다.
다음 상황과 사용자가 선택한 솔루션 사다리에 맞춰, 
어떤 부정적인 반응이 나올 수 있는지, 그리고 어떻게 긍정적이고 지혜롭게 말해야 하는지 추천해주세요.

상황: "${situation}"
적용할 사다리 타입: "${ladderName}"

반드시 다음 JSON 형식으로만 응답해주세요:
{
  "bad": "무의식적으로 나올 수 있는 부정적인 말 (따옴표 포함)",
  "good": "사다리에 맞춘 긍정적이고 지혜로운 말 (따옴표 포함)",
  "why": "왜 이렇게 말하는 것이 좋은지 그 이유 (1-2문장)"
}
    `;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        response_format: { type: "json_object" }
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error?.message || "OpenAI API Error");
    }

    const data = await res.json();
    const resultContent = data.choices[0].message.content;
    const parsed = JSON.parse(resultContent);

    // Redis 연동이 되어 있다면 사용자의 상황과 생성된 결과를 DB에 기록 (List 구조)
    if (redis) {
      try {
        const logEntry = {
          timestamp: new Date().toISOString(),
          situation,
          ladderName,
          generated: parsed
        };
        await redis.lpush("astra_ladder_logs", logEntry);
      } catch (e) {
        console.error("Failed to save log to Redis:", e);
      }
    }

    return NextResponse.json(parsed);
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
