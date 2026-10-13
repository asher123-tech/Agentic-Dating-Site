import { NextResponse } from 'next/server';
import { SAMPLE_CANDIDATES } from '@/data/sampleProfiles';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: SAMPLE_CANDIDATES.length,
    profiles: SAMPLE_CANDIDATES
  });
}
