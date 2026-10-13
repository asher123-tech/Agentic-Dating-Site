'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AgentProfile, DateSimulationResult, DatingDialogueMessage } from '@/types/dating';
import { Play, Pause, FastForward, RotateCcw, Flame, Sparkles, MessageCircle, Heart, Trophy, Activity, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

interface DatingSimulationViewProps {
  agents: AgentProfile[];
  simulations: Record<string, DateSimulationResult>;
  onCompleteSimulation: () => void;
  onGoToRankings: () => void;
}

export const DatingSimulationView: React.FC<DatingSimulationViewProps> = ({
  agents,
  simulations,
  onCompleteSimulation,
  onGoToRankings,
}) => {
  // Pairs array
  const pairsList = React.useMemo(() => {
    const list: Array<{ a: AgentProfile; b: AgentProfile; key: string }> = [];
    for (let i = 0; i < agents.length; i++) {
      for (let j = i + 1; j < agents.length; j++) {
        const a = agents[i];
        const b = agents[j];
        const key = [a.id, b.id].sort().join(':');
        list.push({ a, b, key });
      }
    }
    return list;
  }, [agents]);

  const totalPairs = pairsList.length;

  // Simulation state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<number>(1); // 1x, 2x, 5x
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  // Quick select pair
  const [selectedPairKey, setSelectedPairKey] = useState<string>(pairsList[0]?.key || '');

  // Log of recent dialogue
  const [liveLog, setLiveLog] = useState<Array<{ aName: string; bName: string; text: string; score: number; topic: string }>>([]);

  const currentPair = pairsList.find(p => p.key === selectedPairKey) || pairsList[currentIndex] || pairsList[0];
  const currentSim: DateSimulationResult | undefined = simulations[currentPair?.key];
  const messages: DatingDialogueMessage[] = currentSim?.dialogueTranscript || [];

  // Dialogue animation stepper
  useEffect(() => {
    if (!isPlaying || !messages.length) return;

    const delay = Math.max(400, Math.floor(1800 / speed));
    const interval = setInterval(() => {
      setActiveMessageIndex(prev => {
        if (prev < messages.length - 1) {
          const next = prev + 1;
          // Add to log
          const msg = messages[next];
          if (msg && currentPair) {
            setLiveLog(l => [
              {
                aName: currentPair.a.name,
                bName: currentPair.b.name,
                text: msg.text,
                score: currentSim?.overallScore || 75,
                topic: msg.topic
              },
              ...l.slice(0, 19)
            ]);
          }
          return next;
        } else {
          // Advance pair
          setCurrentIndex(idx => {
            const nextIdx = (idx + 1) % totalPairs;
            setSelectedPairKey(pairsList[nextIdx]?.key || '');
            return nextIdx;
          });
          return 0;
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [isPlaying, speed, messages, currentPair, currentSim, totalPairs, pairsList]);

  // Handle instant finish all
  const handleInstantAll = () => {
    setIsPlaying(false);
    setCurrentIndex(totalPairs - 1);
    setActiveMessageIndex(messages.length - 1);
    onCompleteSimulation();
  };

  const progressPercent = Math.min(100, Math.round(((currentIndex + 1) / totalPairs) * 100));

  // Quick stats
  const averageScore = React.useMemo(() => {
    const scores = Object.values(simulations).map(s => s.overallScore);
    if (!scores.length) return 72;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [simulations]);

  const soulmateCount = React.useMemo(() => {
    return Object.values(simulations).filter(s => s.overallScore >= 88).length;
  }, [simulations]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Simulation Control Deck */}
      <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 radial-glow shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Live Autonomous Dating Simulation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Virtual Speed-Dating Lounge
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Agents are actively holding multi-turn conversations, evaluating relational chemistry, and logging compatibility scores.
            </p>
          </div>

          {/* Action buttons & Speed control */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-600/30 transition-all active:scale-95"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Pause Simulation' : 'Resume Simulation'}</span>
            </button>

            {/* Speed pills */}
            <div className="flex items-center bg-slate-900/90 rounded-xl p-1 border border-white/10 text-xs font-semibold">
              {[1, 2, 5].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    speed === s ? 'bg-pink-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            <button
              onClick={handleInstantAll}
              id="btn-instant-simulate-all"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white font-semibold text-xs border border-white/15 transition-all"
            >
              <FastForward className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant Complete (All 300)</span>
            </button>

            <button
              onClick={onGoToRankings}
              id="btn-goto-rankings"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all ml-auto lg:ml-0"
            >
              <Trophy className="w-4 h-4" />
              <span>View Leaderboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progress Bar & Counters */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-300 flex items-center gap-2">
              <span>Date Progress: Pair #{currentIndex + 1} of {totalPairs}</span>
              <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px]">
                {progressPercent}% Complete
              </span>
            </span>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Avg Compatibility: <strong className="text-white">{averageScore}%</strong></span>
              <span>Soulmate Sparks: <strong className="text-rose-400">{soulmateCount}</strong></span>
            </div>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Featured Spotlight: The Active Date Lounge */}
      {currentPair && currentSim && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main 1-on-1 Date Theater */}
          <div className="lg:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 border border-pink-500/20 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            
            {/* Background ambiance glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Pair Header Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
                
                {/* Agent A */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={currentPair.a.avatarUrl}
                      alt={currentPair.a.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-rose-500 shadow-lg ring-4 ring-rose-500/20 animate-pulse-gentle"
                    />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-md bg-rose-600 text-[10px] font-bold text-white">
                      Agent A
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">{currentPair.a.name}</h3>
                    <p className="text-xs text-rose-300 truncate">{currentPair.a.profession}</p>
                    <span className="text-[10px] text-slate-400">{currentPair.a.location}</span>
                  </div>
                </div>

                {/* Compatibility Heart Badge */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/30 text-white font-black text-lg">
                    {currentSim.overallScore}%
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-300 mt-1">
                    {currentSim.verdict}
                  </span>
                </div>

                {/* Agent B */}
                <div className="flex items-center gap-4 sm:flex-row-reverse sm:text-right">
                  <div className="relative">
                    <img
                      src={currentPair.b.avatarUrl}
                      alt={currentPair.b.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500 shadow-lg ring-4 ring-purple-500/20 animate-pulse-gentle"
                    />
                    <span className="absolute -bottom-1 -left-1 px-1.5 py-0.2 rounded-md bg-purple-600 text-[10px] font-bold text-white">
                      Agent B
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">{currentPair.b.name}</h3>
                    <p className="text-xs text-purple-300 truncate">{currentPair.b.profession}</p>
                    <span className="text-[10px] text-slate-400">{currentPair.b.location}</span>
                  </div>
                </div>

              </div>

              {/* Real-time Dialogue Message Stream */}
              <div className="my-6 space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                {messages.slice(0, activeMessageIndex + 1).map((msg, idx) => {
                  const isAgentA = msg.speakerId === currentPair.a.id;
                  const isCurrent = idx === activeMessageIndex;

                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isAgentA ? 'items-start' : 'items-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                      <div className="flex items-center gap-2 mb-1 px-1">
                        <span className="text-[11px] font-bold text-slate-400">
                          {msg.speakerName}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                          {msg.topic}
                        </span>
                        <span className="text-[9px] text-pink-400 font-semibold italic">
                          [{msg.sentiment}]
                        </span>
                      </div>

                      <div
                        className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg ${
                          isAgentA
                            ? 'bg-rose-950/40 border border-rose-500/30 text-rose-100 rounded-tl-sm'
                            : 'bg-purple-950/40 border border-purple-500/30 text-purple-100 rounded-tr-sm'
                        } ${isCurrent ? 'ring-2 ring-pink-500/40' : ''}`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}

                {activeMessageIndex < messages.length - 1 && isPlaying && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 italic py-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                    <span>Agent is composing response based on profile parameters...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Dimensional Chemistry Breakdown for current date */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Multi-Factor Algorithmic Evaluation
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Values</span>
                  <span className="font-bold text-emerald-400">{currentSim.breakdown.valuesAlignment}%</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Lifestyle</span>
                  <span className="font-bold text-blue-400">{currentSim.breakdown.lifestyleSync}%</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Intellect</span>
                  <span className="font-bold text-purple-400">{currentSim.breakdown.intellectualChemistry}%</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Vibe</span>
                  <span className="font-bold text-pink-400">{currentSim.breakdown.humorAndVibe}%</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block">Goals</span>
                  <span className="font-bold text-amber-400">{currentSim.breakdown.longTermGoals}%</span>
                </div>
              </div>

              {/* Proposed First Date */}
              <div className="mt-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">AI Recommended Real Date:</strong> &ldquo;{currentSim.proposedFirstDate}&rdquo;
                </div>
              </div>
            </div>

          </div>

          {/* Side Rail: Multi-Table Lounge & Live Feed */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Ticker Feed */}
            <div className="rounded-3xl glass-panel p-5 border border-white/10 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                <MessageCircle className="w-3.5 h-3.5 text-pink-400" />
                Live Dating Transcript Feed
              </h3>

              <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                {liveLog.length === 0 ? (
                  <p className="text-xs text-slate-500 italic py-6 text-center">
                    Dialogue feed will scroll as simulation plays...
                  </p>
                ) : (
                  liveLog.map((log, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-[11px] leading-relaxed">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                        <span className="font-bold text-slate-300">{log.aName} & {log.bName}</span>
                        <span className="text-pink-400 font-semibold">{log.score}%</span>
                      </div>
                      <p className="text-slate-300 italic line-clamp-2">&ldquo;{log.text}&rdquo;</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Speed Dating Mini Tables Grid */}
            <div className="rounded-3xl glass-panel p-5 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-rose-400" />
                  Speed Dating Tables
                </h3>
                <span className="text-[10px] text-slate-400">Click to inspect</span>
              </div>

              <div className="grid grid-cols-2 gap-2 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
                {pairsList.slice(0, 30).map((pair) => {
                  const sim = simulations[pair.key];
                  const isSelected = pair.key === currentPair.key;

                  return (
                    <button
                      key={pair.key}
                      onClick={() => {
                        setSelectedPairKey(pair.key);
                        setActiveMessageIndex(0);
                      }}
                      className={`p-2.5 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? 'bg-pink-600/20 border-pink-500/50 shadow-md ring-1 ring-pink-500'
                          : 'bg-slate-900/60 border-white/5 hover:border-white/20 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex -space-x-2">
                          <img
                            src={pair.a.avatarUrl}
                            alt={pair.a.name}
                            className="w-7 h-7 rounded-full object-cover border border-slate-800"
                          />
                          <img
                            src={pair.b.avatarUrl}
                            alt={pair.b.name}
                            className="w-7 h-7 rounded-full object-cover border border-slate-800"
                          />
                        </div>
                        {sim && (
                          <span className={`text-[10px] font-extrabold ${sim.overallScore >= 80 ? 'text-rose-400' : 'text-slate-400'}`}>
                            {sim.overallScore}%
                          </span>
                        )}
                      </div>

                      <div className="text-[10px] font-semibold text-white truncate">
                        {pair.a.name.split(' ')[0]} & {pair.b.name.split(' ')[0]}
                      </div>
                      <div className="text-[9px] text-slate-400 truncate">
                        {sim?.verdict || 'Simulating...'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
