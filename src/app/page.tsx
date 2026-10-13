'use client';

import React, { useState, useEffect } from 'react';
import { CandidateInput, AgentProfile, DateSimulationResult, CandidateRankedMatches } from '@/types/dating';
import { SAMPLE_CANDIDATES } from '@/data/sampleProfiles';
import { Header, NavigationTab } from '@/components/Header';
import { InputPoolView } from '@/components/InputPoolView';
import { AgentProfilesView } from '@/components/AgentProfilesView';
import { DatingSimulationView } from '@/components/DatingSimulationView';
import { FinalRankingsView } from '@/components/FinalRankingsView';
import { CandidateDetailModal } from '@/components/CandidateDetailModal';
import { synthesizeAgentProfile, simulateAllMatches } from '@/lib/simulationEngine';
import confetti from 'canvas-confetti';

export default function Home() {
  const [candidates, setCandidates] = useState<CandidateInput[]>(SAMPLE_CANDIDATES);
  const [agents, setAgents] = useState<AgentProfile[]>([]);
  const [simulations, setSimulations] = useState<Record<string, DateSimulationResult>>({});
  const [rankedResults, setRankedResults] = useState<CandidateRankedMatches[]>([]);
  
  const [currentTab, setCurrentTab] = useState<NavigationTab>('pool');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedCandidateForModal, setSelectedCandidateForModal] = useState<CandidateInput | AgentProfile | null>(null);

  // Initialize presets on mount
  useEffect(() => {
    // Pre-synthesize default agents so demo is instantaneous
    const initialAgents = SAMPLE_CANDIDATES.map(c => synthesizeAgentProfile(c));
    setAgents(initialAgents);
    const { simulations: initSims, rankedResults: initRanks } = simulateAllMatches(initialAgents);
    setSimulations(initSims);
    setRankedResults(initRanks);
  }, []);

  // Handlers for candidate management
  const handleLoadPresets = () => {
    setCandidates(SAMPLE_CANDIDATES);
    const synthesized = SAMPLE_CANDIDATES.map(c => synthesizeAgentProfile(c));
    setAgents(synthesized);
    const { simulations: sims, rankedResults: ranks } = simulateAllMatches(synthesized);
    setSimulations(sims);
    setRankedResults(ranks);
    setCurrentTab('pool');
  };

  const handleAddCandidate = (candidate: CandidateInput) => {
    const updated = [candidate, ...candidates];
    setCandidates(updated);
    // Re-synthesize
    const newAgent = synthesizeAgentProfile(candidate);
    const updatedAgents = [newAgent, ...agents];
    setAgents(updatedAgents);
    const { simulations: sims, rankedResults: ranks } = simulateAllMatches(updatedAgents);
    setSimulations(sims);
    setRankedResults(ranks);
  };

  const handleRemoveCandidate = (id: string) => {
    const updated = candidates.filter(c => c.id !== id);
    setCandidates(updated);
    const updatedAgents = agents.filter(a => a.id !== id);
    setAgents(updatedAgents);
    if (updatedAgents.length >= 2) {
      const { simulations: sims, rankedResults: ranks } = simulateAllMatches(updatedAgents);
      setSimulations(sims);
      setRankedResults(ranks);
    } else {
      setSimulations({});
      setRankedResults([]);
    }
  };

  const handleClearAll = () => {
    setCandidates([]);
    setAgents([]);
    setSimulations({});
    setRankedResults([]);
  };

  // Trigger Profile Analysis
  const handleAnalyze = async () => {
    if (candidates.length === 0) return;
    setIsAnalyzing(true);

    try {
      // Call API
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ candidates }),
      });

      if (response.ok) {
        const data = await response.json();
        setAgents(data.agents);
        
        // Also simulate matches
        const { simulations: sims, rankedResults: ranks } = simulateAllMatches(data.agents);
        setSimulations(sims);
        setRankedResults(ranks);
      } else {
        // Fallback to client-side synthesis
        const synthesized = candidates.map(c => synthesizeAgentProfile(c));
        setAgents(synthesized);
        const { simulations: sims, rankedResults: ranks } = simulateAllMatches(synthesized);
        setSimulations(sims);
        setRankedResults(ranks);
      }
    } catch {
      // Offline / fallback
      const synthesized = candidates.map(c => synthesizeAgentProfile(c));
      setAgents(synthesized);
      const { simulations: sims, rankedResults: ranks } = simulateAllMatches(synthesized);
      setSimulations(sims);
      setRankedResults(ranks);
    } finally {
      setIsAnalyzing(false);
      setCurrentTab('profiles');
    }
  };

  // Trigger dating simulation transition
  const handleStartSimulation = () => {
    setCurrentTab('simulation');
  };

  // Finish simulation and jump to rankings with celebration confetti
  const handleGoToRankings = () => {
    setCurrentTab('rankings');
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // confetti fallback
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080915] text-slate-100 selection:bg-rose-500 selection:text-white">
      
      {/* Header Navigation */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        candidateCount={candidates.length}
        isAnalyzed={agents.length > 0}
        isSimulated={Object.keys(simulations).length > 0}
        onResetToDefault={handleLoadPresets}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {currentTab === 'pool' && (
          <InputPoolView
            candidates={candidates}
            onLoadPresets={handleLoadPresets}
            onAddCandidate={handleAddCandidate}
            onRemoveCandidate={handleRemoveCandidate}
            onClearAll={handleClearAll}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
            onSelectCandidate={setSelectedCandidateForModal}
          />
        )}

        {currentTab === 'profiles' && (
          <AgentProfilesView
            agents={agents}
            onStartSimulation={handleStartSimulation}
            onSelectAgent={setSelectedCandidateForModal}
          />
        )}

        {currentTab === 'simulation' && (
          <DatingSimulationView
            agents={agents}
            simulations={simulations}
            onCompleteSimulation={handleGoToRankings}
            onGoToRankings={handleGoToRankings}
          />
        )}

        {currentTab === 'rankings' && (
          <FinalRankingsView
            agents={agents}
            rankedResults={rankedResults}
            onSelectAgentForModal={setSelectedCandidateForModal}
          />
        )}

      </main>

      {/* Candidate Deep Dive Modal */}
      <CandidateDetailModal
        candidate={selectedCandidateForModal}
        onClose={() => setSelectedCandidateForModal(null)}
      />

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-12 bg-black/40 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-300">AmorAI • Agentic Dating Platform</span>
            <span>—</span>
            <span>Autonomous Web Profile Extraction & Matchmaking Engine</span>
          </div>
          <div className="text-slate-400">
            Powered by Next.js 16, TypeScript, Tailwind CSS, & AI Agent Simulations
          </div>
        </div>
      </footer>

    </div>
  );
}
