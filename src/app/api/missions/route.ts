import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the shape of a mission
export interface Mission {
  id: string;
  day: number;
  name: string;
  content: string;
  created_at: string;
}

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'missions.json');

// Helper to read missions
const readMissions = (): Mission[] => {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading missions:', error);
    return [];
  }
};

// Helper to write missions
const writeMissions = (missions: Mission[]) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(missions, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing missions:', error);
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dayParam = searchParams.get('day');
  
  const missions = readMissions();
  
  // Filter by day if provided
  if (dayParam) {
    const day = parseInt(dayParam, 10);
    const filteredMissions = missions.filter(m => m.day === day);
    // Sort by chronological order (newest first)
    return NextResponse.json(filteredMissions.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
  }
  
  return NextResponse.json(missions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { day, name, content } = body;
    
    if (!day || !name || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const newMission: Mission = {
      id: Date.now().toString() + Math.random().toString(36).substring(7),
      day: parseInt(day, 10),
      name,
      content,
      created_at: new Date().toISOString(),
    };
    
    const missions = readMissions();
    missions.push(newMission);
    writeMissions(missions);
    
    return NextResponse.json(newMission, { status: 201 });
  } catch (error) {
    console.error('Failed to post mission:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
