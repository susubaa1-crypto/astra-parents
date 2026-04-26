import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const dynamic = 'force-dynamic';

const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = redisUrl && redisToken ? new Redis({
  url: redisUrl,
  token: redisToken,
}) : null;

export interface SurveyResponse {
  id: string;
  name: string;
  cohort: number;
  answers: Record<string, string | string[] | number>;
  submitted_at: string;
}

const getRedisKey = (cohort: number) => `astra_survey_cohort_${cohort}`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cohort = parseInt(searchParams.get('cohort') || '5', 10);

  if (!redis) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
  }

  try {
    const responses = await redis.get<SurveyResponse[]>(getRedisKey(cohort));
    return NextResponse.json(responses || []);
  } catch (error) {
    console.error('Error reading survey responses:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, answers, cohort } = body;

    if (!name || !answers) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const surveyResponse: SurveyResponse = {
      id: Date.now().toString() + Math.random().toString(36).substring(7),
      name,
      cohort: cohort || 5,
      answers,
      submitted_at: new Date().toISOString(),
    };

    if (!redis) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const key = getRedisKey(surveyResponse.cohort);
    const existing = await redis.get<SurveyResponse[]>(key) || [];

    // 동일 이름으로 이미 제출한 경우 업데이트 (익명은 중복 허용)
    const filtered = name === '익명' ? existing : existing.filter(r => r.name !== name);
    filtered.push(surveyResponse);

    await redis.set(key, filtered);

    return NextResponse.json(surveyResponse, { status: 201 });
  } catch (error) {
    console.error('Failed to save survey:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
