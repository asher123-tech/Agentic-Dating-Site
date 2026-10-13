import { NextRequest, NextResponse } from 'next/server';
import { AgentProfile } from '@/types/dating';
import { simulateAllMatches } from '@/lib/simulationEngine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const agents: AgentProfile[] = body.agents;

    if (!Array.isArray(agents) || agents.length < 2) {
      return NextResponse.json(
        { success: false, error: 'At least 2 agent profiles are required to simulate dating.' },
        { status: 400 }
      );
    }

    const { simulations, rankedResults } = simulateAllMatches(agents);

    return NextResponse.json({
      success: true,
      simulationCount: Object.keys(simulations).length,
      simulations,
      rankedResults
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
