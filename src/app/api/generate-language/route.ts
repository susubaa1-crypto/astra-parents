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

[사다리별 핵심 원칙]
- "선택과 질문 언어": 아이에게 선택지를 주거나 질문으로 자율성을 존중하는 말
- "공감 수용 언어": 반드시 아이의 감정을 공감하는 문장을 포함해야 합니다. 예) "~해서 속상했구나", "~하고 싶었구나", "그게 슬펐구나" 등. 아이의 마음을 먼저 알아주고 수용하는 말이 핵심입니다.
- "기준이 있는 언어": 감정은 인정하되, 행동의 기준과 대안을 명확히 제시하는 말
- "솔직한 언어": 반드시 엄마 자신의 현재 상태를 솔직하게 고백하는 문장을 포함해야 합니다. 예) "엄마가 지금 너무 지쳐서 예민해졌어", "엄마가 오늘 힘든 일이 있어서 여유가 없어" 등. 핵심은 '나(엄마)의 상태를 있는 그대로 말하는 것'입니다.
- "과정 존중 언어": 비교나 결과 대신, 아이의 성장 과정과 노력 자체를 인정하고 존중하는 말

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
