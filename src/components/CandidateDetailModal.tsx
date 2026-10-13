'use client';

import React from 'react';
import { X, ExternalLink, Sparkles, MapPin, Briefcase, Heart, Compass, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '@/components/SocialIcons';
import { AgentProfile, CandidateInput } from '@/types/dating';

interface CandidateDetailModalProps {
  candidate: CandidateInput | AgentProfile | null;
  onClose: () => void;
}

export const CandidateDetailModal: React.FC<CandidateDetailModalProps> = ({ candidate, onClose }) => {
  if (!candidate) return null;

  const agent = 'needs' in candidate ? (candidate as AgentProfile) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Hero Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/10">
          <div className="relative">
            <img
              src={candidate.avatarUrl}
              alt={candidate.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-rose-500/40 shadow-xl"
            />
            <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-xs font-bold shadow-md">
              {candidate.age} yrs
            </span>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">{candidate.name}</h2>
              {agent && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {agent.personalityTraits.mbti} • {agent.personalityTraits.enneagram}
                </span>
              )}
            </div>

            <div className="mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-1 text-rose-300">
                <Briefcase className="w-4 h-4" />
                {candidate.profession}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-4 h-4" />
                {candidate.location}
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed italic">
              &ldquo;{candidate.bioSnippet}&rdquo;
            </p>

            {/* Public Links */}
            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                href={candidate.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-medium transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
              </a>

              <a
                href={candidate.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/30 text-xs font-medium transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Public Instagram</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Synthesized Agent Insights */}
        {agent ? (
          <div className="mt-6 space-y-6">
            {/* Personality Summary & Quote */}
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20">
              <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm mb-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Synthesized Agent Dossier
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {agent.personalitySummary}
              </p>
              <div className="mt-3 pt-3 border-t border-purple-500/20 text-xs italic text-purple-200">
                Agent Directive: {agent.agentQuote}
              </div>
            </div>

            {/* Extracted Needs */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" /> Core Relationship Needs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {agent.needs.map((need, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{need}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" /> Extracted Hobbies
                </h3>
                <div className="space-y-1.5">
                  {agent.hobbies.map((hobby, idx) => (
                    <div key={idx} className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs text-pink-200">
                      {hobby}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Intellectual Interests
                </h3>
                <div className="space-y-1.5">
                  {agent.interests.map((interest, idx) => (
                    <div key={idx} className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ideal Partner Target */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Target Matchmaking Matrix (AI Instructions)
              </h3>
              <p className="text-xs text-slate-300 mb-3">{agent.idealPartnerProfile.summary}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-semibold text-emerald-400 block mb-1">Must-Haves:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-[11px]">
                    {agent.idealPartnerProfile.mustHaves.map((mh, i) => (
                      <li key={i}>{mh}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-rose-400 block mb-1">Dealbreakers:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-[11px]">
                    {agent.idealPartnerProfile.dealbreakers.map((db, i) => (
                      <li key={i}>{db}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Signal Insights */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
              <div className="font-semibold text-slate-300">Autonomous Web Data Extraction:</div>
              <div className="text-slate-400 text-[11px] space-y-1">
                <p><strong className="text-blue-300">LinkedIn:</strong> {agent.socialDataExtracted.linkedInHighlights.join(' • ')}</p>
                <p><strong className="text-pink-300">Instagram:</strong> {agent.socialDataExtracted.instagramAesthetic.join(' • ')}</p>
              </div>
            </div>

          </div>
        ) : (
          <div className="mt-8 text-center py-6 text-slate-400 text-sm">
            Click &ldquo;Analyze Profiles&rdquo; to synthesize the autonomous AI personality dossier for {candidate.name}.
          </div>
        )}

      </div>
    </div>
  );
};
