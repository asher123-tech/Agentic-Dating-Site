import { NextRequest, NextResponse } from 'next/server';
import { CandidateInput, AgentProfile } from '@/types/dating';
import { synthesizeAgentProfile } from '@/lib/simulationEngine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const candidates: CandidateInput[] = Array.isArray(body.candidates)
      ? body.candidates
      : (body.candidate ? [body.candidate] : []);

    if (candidates.length === 0) {
      return NextResponse.json({ success: false, error: 'No candidates provided' }, { status: 400 });
    }

    const synthesized: AgentProfile[] = candidates.map(candidate => synthesizeAgentProfile(candidate));

    return NextResponse.json({
      success: true,
      count: synthesized.length,
      agents: synthesized
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
