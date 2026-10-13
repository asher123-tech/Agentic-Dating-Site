'use client';

import React, { useState } from 'react';
import { AgentProfile } from '@/types/dating';
import { Sparkles, Search, Heart, Compass, ShieldCheck, Flame, ExternalLink, Filter } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '@/components/SocialIcons';

interface AgentProfilesViewProps {
  agents: AgentProfile[];
  onStartSimulation: () => void;
  onSelectAgent: (agent: AgentProfile) => void;
}

export const AgentProfilesView: React.FC<AgentProfilesViewProps> = ({
  agents,
  onStartSimulation,
  onSelectAgent,
}) => {
  const [search, setSearch] = useState('');
  const [filterGender, setFilterGender] = useState<'all' | 'female' | 'male'>('all');

  const filteredAgents = agents.filter(agent => {
    const matchesSearch =
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.profession.toLowerCase().includes(search.toLowerCase()) ||
      agent.location.toLowerCase().includes(search.toLowerCase()) ||
      agent.hobbies.some(h => h.toLowerCase().includes(search.toLowerCase())) ||
      agent.interests.some(i => i.toLowerCase().includes(search.toLowerCase()));

    const matchesGender = filterGender === 'all' || agent.gender === filterGender;

    return matchesSearch && matchesGender;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 radial-glow">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Synthesized AI Agent Dossiers
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            25 Autonomous Personalities Extracted
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Each profile has been processed into structured traits: relational needs, lifestyle hobbies, intellectual interests, and precise ideal partner directives.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onStartSimulation}
            id="btn-start-simulation-from-profiles"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-rose-500/25 active:scale-95 transition-all"
          >
            <Flame className="w-4 h-4 fill-current" />
            <span>Enter Dating Lounge & Simulate All</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, craft, hobby, or interest..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        {/* Gender Filter Pills */}
        <div className="flex items-center space-x-2 bg-slate-900/80 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setFilterGender('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterGender === 'all'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All ({agents.length})
          </button>
          <button
            onClick={() => setFilterGender('female')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterGender === 'female'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Female ({agents.filter(a => a.gender === 'female').length})
          </button>
          <button
            onClick={() => setFilterGender('male')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterGender === 'male'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Male ({agents.filter(a => a.gender === 'male').length})
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div
            key={agent.id}
            className="group rounded-3xl glass-panel p-6 border border-white/10 hover:border-purple-500/40 hover:bg-slate-900/85 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Header: Photo, Name, Badge */}
              <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                <img
                  src={agent.avatarUrl}
                  alt={agent.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors shadow-md shrink-0 cursor-pointer"
                  onClick={() => onSelectAgent(agent)}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 
                      onClick={() => onSelectAgent(agent)}
                      className="font-bold text-base text-white group-hover:text-purple-300 transition-colors truncate cursor-pointer"
                    >
                      {agent.name}
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                      {agent.personalityTraits.mbti} • {agent.personalityTraits.enneagram}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-rose-300 truncate mt-0.5">
                    {agent.profession}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {agent.location} • {agent.age} yrs
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <a
                      href={agent.linkedInUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
                    >
                      <LinkedinIcon className="w-3 h-3" />
                      <span>LinkedIn</span>
                    </a>
                    <span className="text-slate-600">•</span>
                    <a
                      href={agent.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-pink-400 hover:text-pink-300 flex items-center gap-1 font-medium"
                    >
                      <InstagramIcon className="w-3 h-3" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Personality Summary */}
              <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  Personality Summary
                </span>
                <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                  {agent.personalitySummary}
                </p>
              </div>

              {/* Needs Pills */}
              <div className="mt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1 mb-2">
                  <Heart className="w-3 h-3" /> Extracted Relational Needs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {agent.needs.slice(0, 3).map((need, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[11px] text-rose-200 font-medium leading-tight"
                    >
                      {need}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hobbies & Interests Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1 mb-1.5">
                    <Compass className="w-3 h-3" /> Hobbies
                  </span>
                  <div className="space-y-1 text-slate-300">
                    {agent.hobbies.slice(0, 2).map((h, i) => (
                      <p key={i} className="truncate">• {h}</p>
                    ))}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1 mb-1.5">
                    <ShieldCheck className="w-3 h-3" /> Interests
                  </span>
                  <div className="space-y-1 text-slate-300">
                    {agent.interests.slice(0, 2).map((it, i) => (
                      <p key={i} className="truncate">• {it}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ideal Partner Directive */}
              <div className="mt-4 p-3 rounded-2xl bg-amber-950/20 border border-amber-500/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Target Partner Directive
                </span>
                <p className="text-xs text-amber-100/90 leading-snug line-clamp-2">
                  {agent.idealPartnerProfile.summary}
                </p>
                <div className="mt-2 flex flex-wrap gap-1 text-[10px] text-slate-300">
                  <span className="text-emerald-400 font-semibold">Must-Have:</span>
                  <span>{agent.idealPartnerProfile.mustHaves[0]}</span>
                </div>
              </div>
            </div>

            {/* Bottom Inspect Action */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] italic text-slate-400 truncate max-w-[200px]">
                {agent.agentQuote}
              </span>
              <button
                onClick={() => onSelectAgent(agent)}
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
              >
                <span>Full Dossier</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
