'use client';

import React, { useState } from 'react';
import { AgentProfile, CandidateRankedMatches } from '@/types/dating';
import { Trophy, Sparkles, Heart, Crown, MessageSquare, Download, CheckCircle, ArrowRight, Share2, Flame, MapPin, Briefcase, ExternalLink, ChevronRight, UserCheck } from 'lucide-react';

interface FinalRankingsViewProps {
  agents: AgentProfile[];
  rankedResults: CandidateRankedMatches[];
  onSelectAgentForModal: (agent: AgentProfile) => void;
}

export const FinalRankingsView: React.FC<FinalRankingsViewProps> = ({
  agents,
  rankedResults,
  onSelectAgentForModal,
}) => {
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>(agents[0]?.id || '');
  const [selectedMatchModal, setSelectedMatchModal] = useState<CandidateRankedMatches['matches'][0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMutualOnly, setFilterMutualOnly] = useState(false);
  const [generatedIcebreaker, setGeneratedIcebreaker] = useState<string | null>(null);

  const selectedAgent = agents.find(a => a.id === selectedCandidateId) || agents[0];
  const candidateRanking = rankedResults.find(r => r.candidateId === selectedCandidateId);
  const topMatches = candidateRanking?.matches || [];

  // Filter candidate selector list
  const filteredCandidates = agents.filter(a => {
    const r = rankedResults.find(res => res.candidateId === a.id);
    const hasMutual = r?.matches.some(m => m.isMutualTop3);
    const matchesQuery = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || a.profession.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterMutualOnly && !hasMutual) return false;
    return matchesQuery;
  });

  // Global Cohort Power Couples (highest mutual scoring pairs)
  const powerCouples = React.useMemo(() => {
    const list: Array<{
      personA: AgentProfile;
      personB: AgentProfile;
      score: number;
      verdict: string;
      reason: string;
    }> = [];

    const seen = new Set<string>();

    rankedResults.forEach(r => {
      const pA = agents.find(a => a.id === r.candidateId);
      if (!pA) return;

      r.matches.slice(0, 3).forEach(m => {
        if (m.isMutualTop3 && m.score >= 82) {
          const key = [pA.id, m.partnerId].sort().join(':');
          if (!seen.has(key)) {
            seen.add(key);
            const pB = agents.find(a => a.id === m.partnerId);
            if (pB) {
              list.push({
                personA: pA,
                personB: pB,
                score: m.score,
                verdict: m.verdict,
                reason: m.aiReasoning
              });
            }
          }
        }
      });
    });

    return list.sort((a, b) => b.score - a.score).slice(0, 5);
  }, [rankedResults, agents]);

  // Handle Export
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(rankedResults, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'agentic_dating_rankings_report.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleGenerateIcebreaker = (match: CandidateRankedMatches['matches'][0]) => {
    const line = `Hey ${match.partnerName.split(' ')[0]}! Our AI agents just completed a 6-round compatibility simulation and gave us a ${match.score}% score ("${match.verdict}"). They discovered our shared passion for ${match.breakdown.valuesAlignment > 80 ? 'meaningful purpose' : 'great coffee'} and proposed we try: "${match.proposedFirstDate}". Would you be open to giving our humans a chance to meet?`;
    setGeneratedIcebreaker(line);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 radial-glow shadow-2xl">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Ranked Compatibility Leaderboards
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Top Candidate Matches & AI Reasoning
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Select any candidate below to see their customized top ranked matches, percentage alignment, multi-dimensional radar breakdown, and algorithmic chemistry rationales.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white font-semibold text-xs border border-white/15 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Report (JSON)</span>
          </button>
        </div>
      </div>

      {/* Cohort Spotlight: Top 5 Mutual Power Couples */}
      {powerCouples.length > 0 && (
        <div className="p-6 rounded-3xl glass-panel border border-amber-500/30 shadow-xl bg-gradient-to-r from-amber-950/20 via-rose-950/20 to-purple-950/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" />
              Cohort Top Power Couples (Mutual Top 3 Sparks)
            </h3>
            <span className="text-xs text-amber-300/80 font-medium hidden sm:inline">
              Both agents ranked each other in their Top 3!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {powerCouples.map((couple, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/20 shadow-lg flex items-center justify-between gap-4"
              >
                <div className="flex items-center -space-x-3">
                  <img
                    src={couple.personA.avatarUrl}
                    alt={couple.personA.name}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-rose-500 shadow-md"
                  />
                  <img
                    src={couple.personB.avatarUrl}
                    alt={couple.personB.name}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-500 shadow-md"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-white truncate">
                    {couple.personA.name.split(' ')[0]} & {couple.personB.name.split(' ')[0]}
                  </div>
                  <div className="text-[10px] text-amber-400 font-semibold truncate">
                    {couple.verdict}
                  </div>
                  <div className="text-[9px] text-slate-400 truncate">
                    {couple.personA.profession.split('&')[0]} • {couple.personB.profession.split('&')[0]}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg font-black text-rose-400">{couple.score}%</span>
                  <span className="block text-[8px] uppercase tracking-wider text-slate-400">Match</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Dual-Pane Leaderboard Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: 25 Candidates Selector List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-2xl glass-panel border border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Select Candidate ({filteredCandidates.length})
            </h3>

            {/* Quick search & filter */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search candidate..."
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 mb-2"
            />

            <label className="flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={filterMutualOnly}
                onChange={(e) => setFilterMutualOnly(e.target.checked)}
                className="rounded border-white/20 text-rose-500 focus:ring-0"
              />
              <span>Show only mutual top matches</span>
            </label>
          </div>

          {/* Candidate list */}
          <div className="space-y-2 max-h-[680px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredCandidates.map((c) => {
              const ranking = rankedResults.find(r => r.candidateId === c.id);
              const top1 = ranking?.matches[0];
              const hasMutual = ranking?.matches.some(m => m.isMutualTop3);
              const isSelected = c.id === selectedCandidateId;

              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCandidateId(c.id)}
                  className={`w-full p-3 rounded-2xl text-left border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-amber-600/20 border-amber-500/50 shadow-lg ring-1 ring-amber-500/40'
                      : 'bg-slate-900/60 border-white/5 hover:border-white/20 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={c.avatarUrl}
                      alt={c.name}
                      className="w-10 h-10 rounded-xl object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-white truncate">{c.name}</span>
                        {hasMutual && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-rose-500/20 text-rose-300 font-bold shrink-0">
                            Mutual
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 truncate">{c.profession}</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    {top1 && (
                      <div>
                        <span className="text-xs font-extrabold text-amber-400">{top1.score}%</span>
                        <span className="block text-[8px] text-slate-500">#1 Match</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Candidate's Ranked Matches & Detailed AI Reasoning */}
        {selectedAgent && (
          <div className="lg:col-span-8 space-y-6">
            
            {/* Candidate Header Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={selectedAgent.avatarUrl}
                alt={selectedAgent.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-500/40 shadow-lg shrink-0 cursor-pointer"
                onClick={() => onSelectAgentForModal(selectedAgent)}
              />

              <div className="flex-1 text-center sm:text-left min-w-0">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">{selectedAgent.name}</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {selectedAgent.personalityTraits.mbti} • {selectedAgent.personalityTraits.enneagram}
                  </span>
                  <span className="text-xs text-slate-400">{selectedAgent.age} yrs</span>
                </div>

                <p className="text-xs font-medium text-rose-300 mt-1">{selectedAgent.profession} • {selectedAgent.location}</p>
                <p className="text-xs text-slate-300 italic mt-2">&ldquo;{selectedAgent.agentQuote}&rdquo;</p>
              </div>

              <button
                onClick={() => onSelectAgentForModal(selectedAgent)}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300"
              >
                Inspect Agent Profile
              </button>
            </div>

            {/* Top Ranked Matches List */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>Top Algorithmically Ranked Matches ({topMatches.length})</span>
                <span className="text-xs text-slate-400 font-normal">Sorted by compatibility score</span>
              </h3>

              {topMatches.slice(0, 8).map((match, rankIndex) => {
                const isRank1 = rankIndex === 0;
                const isRank2 = rankIndex === 1;
                const isRank3 = rankIndex === 2;

                const medalColor = isRank1
                  ? 'from-amber-500 to-yellow-600'
                  : isRank2
                  ? 'from-slate-400 to-slate-500'
                  : isRank3
                  ? 'from-amber-700 to-orange-800'
                  : 'from-slate-700 to-slate-800';

                return (
                  <div
                    key={match.partnerId}
                    className={`rounded-3xl glass-panel p-6 border transition-all duration-200 shadow-xl ${
                      isRank1
                        ? 'border-amber-500/40 bg-slate-900/90 ring-1 ring-amber-500/20'
                        : 'border-white/10 bg-slate-900/60 hover:border-white/20'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                      
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Rank Badge */}
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${medalColor} flex items-center justify-center font-black text-white text-sm shadow-md shrink-0`}>
                          #{match.rank}
                        </div>

                        <img
                          src={match.partnerAvatar}
                          alt={match.partnerName}
                          className="w-14 h-14 rounded-2xl object-cover border border-white/20 shadow-md shrink-0"
                        />

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-base text-white">{match.partnerName}</h4>
                            <span className="text-xs text-slate-400">{match.partnerAge} yrs</span>
                            {match.isMutualTop3 && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5" /> Mutual Top 3
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-rose-300 font-medium truncate mt-0.5">
                            {match.partnerProfession}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {match.partnerLocation}
                          </p>
                        </div>
                      </div>

                      {/* Score & Verdict */}
                      <div className="text-left sm:text-right shrink-0">
                        <div className="text-2xl font-black text-rose-400 leading-none">
                          {match.score}%
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-pink-300">
                          {match.verdict}
                        </span>
                      </div>

                    </div>

                    {/* AI Reasoning Text */}
                    <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                        AI Compatibility Rationale
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {match.aiReasoning}
                      </p>
                    </div>

                    {/* Compatibility Breakdown Bars */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Values Alignment</span>
                        <span className="font-bold text-emerald-400">{match.breakdown.valuesAlignment}%</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Lifestyle Sync</span>
                        <span className="font-bold text-blue-400">{match.breakdown.lifestyleSync}%</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Intellectual</span>
                        <span className="font-bold text-purple-400">{match.breakdown.intellectualChemistry}%</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Humor & Vibe</span>
                        <span className="font-bold text-pink-400">{match.breakdown.humorAndVibe}%</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-white/5 col-span-2 sm:col-span-1">
                        <span className="text-[10px] text-slate-400 block">Life Goals</span>
                        <span className="font-bold text-amber-400">{match.breakdown.longTermGoals}%</span>
                      </div>
                    </div>

                    {/* Proposed Date & Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="text-slate-300 italic">
                        <strong className="text-white not-italic">First Date Proposal:</strong> &ldquo;{match.proposedFirstDate}&rdquo;
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setSelectedMatchModal(match)}
                          className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-1"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>View Dialogue</span>
                        </button>

                        <button
                          onClick={() => handleGenerateIcebreaker(match)}
                          className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Generate Icebreaker</span>
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>

      {/* Date Dialogue Modal */}
      {selectedMatchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel p-6 border border-white/15 shadow-2xl custom-scrollbar">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="font-bold text-base text-white">
                  Agent Date Transcript
                </h3>
                <p className="text-xs text-rose-300">
                  {selectedAgent.name} & {selectedMatchModal.partnerName} ({selectedMatchModal.score}% Match)
                </p>
              </div>
              <button
                onClick={() => setSelectedMatchModal(null)}
                className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300"
              >
                Close
              </button>
            </div>

            <div className="my-4 space-y-3">
              {selectedMatchModal.dialogue.map((msg, idx) => {
                const isPersonA = msg.speakerId === selectedAgent.id;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isPersonA ? 'items-start' : 'items-end'}`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 px-1 text-[10px] text-slate-400">
                      <span className="font-bold text-slate-300">{msg.speakerName}</span>
                      <span>•</span>
                      <span className="uppercase">{msg.topic}</span>
                    </div>
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                        isPersonA
                          ? 'bg-rose-950/40 border border-rose-500/30 text-rose-100 rounded-tl-sm'
                          : 'bg-purple-950/40 border border-purple-500/30 text-purple-100 rounded-tr-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Generated Icebreaker Modal */}
      {generatedIcebreaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel p-6 border border-rose-500/30 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              Real Human Icebreaker Message
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Send this tailored opening line on Instagram or LinkedIn to break the ice using your AI simulation results:
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 text-xs sm:text-sm text-rose-100 leading-relaxed italic mb-4">
              &ldquo;{generatedIcebreaker}&rdquo;
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedIcebreaker);
                  alert('Copied icebreaker message to clipboard!');
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md"
              >
                Copy to Clipboard
              </button>
              <button
                onClick={() => setGeneratedIcebreaker(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
