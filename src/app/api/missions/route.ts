import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';

export const dynamic = 'force-dynamic';

// Vercel officially integrates with Upstash Redis for KV
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = redisUrl && redisToken ? new Redis({
  url: redisUrl,
  token: redisToken,
}) : null;

export interface Mission {
  id: string;
  day: number;
  cohort: number; // Added cohort field
  name: string;
  content: string;
  imageUrl?: string;
  created_at: string;
}

const getFilePath = (cohort: number) => path.join(process.cwd(), 'src', 'data', `missions_${cohort}.json`);
const getRedisKey = (cohort: number) => `astra_missions_cohort_${cohort}`;

// Helper to read missions
const readMissions = async (cohort: number): Promise<Mission[]> => {
  if (redis) {
    try {
      const missions = await redis.get<Mission[]>(getRedisKey(cohort));
      return missions || [];
    } catch (error) {
      console.error('Error reading from Redis:', error);
      return [];
    }
  }

  // Fallback to local file system for development without DB
  try {
    const filePath = getFilePath(cohort);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading local missions:', error);
    return [];
  }
};

// Helper to write missions
const writeMissions = async (cohort: number, missions: Mission[]) => {
  if (redis) {
    try {
      await redis.set(getRedisKey(cohort), missions);
      return;
    } catch (error) {
      console.error('Error writing to Redis:', error);
    }
  }

  // Fallback to local file system
  try {
    const filePath = getFilePath(cohort);
    fs.writeFileSync(filePath, JSON.stringify(missions, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing local missions:', error);
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dayParam = searchParams.get('day');
  const cohortParam = searchParams.get('cohort');
  
  const cohort = cohortParam ? parseInt(cohortParam, 10) : 5; // Default to 5
  const missions = await readMissions(cohort);
  
  if (dayParam) {
    const day = parseInt(dayParam, 10);
    const filteredMissions = missions.filter(m => m.day === day);
    return NextResponse.json(filteredMissions.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
  }
  
  return NextResponse.json(missions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { day, name, content, imageUrl, cohort } = body;
    
    if (!day || !name || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const missionCohort = cohort ? parseInt(cohort, 10) : 5;

    const newMission: Mission = {
      id: Date.now().toString() + Math.random().toString(36).substring(7),
      day: parseInt(day, 10),
      cohort: missionCohort,
      name,
      content,
      imageUrl: imageUrl || undefined,
      created_at: new Date().toISOString(),
    };
    
    const missions = await readMissions(missionCohort);
    missions.push(newMission);
    await writeMissions(missionCohort, missions);
    
    return NextResponse.json(newMission, { status: 201 });
  } catch (error) {
    console.error('Failed to post mission:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
