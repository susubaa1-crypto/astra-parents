import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
  return NextResponse.json({
    kv_url: !!process.env.KV_REST_API_URL,
    upstash_url: !!process.env.UPSTASH_REDIS_REST_URL,
    blob: !!process.env.BLOB_READ_WRITE_TOKEN,
  });
}
