import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
  const keys = Object.keys(process.env).filter(k => 
    k.toLowerCase().includes('redis') || 
    k.toLowerCase().includes('kv') || 
    k.toLowerCase().includes('upstash')
  );
  return NextResponse.json({ keys });
}
