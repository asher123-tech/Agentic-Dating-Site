'use client';

import React from 'react';
import { Sparkles, Users, Cpu, Flame, Trophy, RefreshCw, HeartHandshake } from 'lucide-react';

export type NavigationTab = 'pool' | 'profiles' | 'simulation' | 'rankings';

interface HeaderProps {
  currentTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  candidateCount: number;
  isAnalyzed: boolean;
  isSimulated: boolean;
  onResetToDefault: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  candidateCount,
  isAnalyzed,
  isSimulated,
  onResetToDefault,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080915]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onTabChange('pool')}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-purple-600 p-[2px] shadow-lg shadow-rose-500/20">
              <div className="w-full h-full bg-[#0d0e1c] rounded-2xl flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-rose-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-white">Amor<span className="text-rose-500">AI</span></span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Agentic Dating Engine
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                Autonomous multi-agent social extraction & dating simulation
              </p>
            </div>
          </div>

          {/* Navigation Pipeline Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => onTabChange('pool')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'pool'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>1. Candidates ({candidateCount})</span>
            </button>

            <button
              onClick={() => isAnalyzed && onTabChange('profiles')}
              disabled={!isAnalyzed}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'profiles'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : isAnalyzed
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  : 'text-slate-600 cursor-not-allowed opacity-50'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>2. AI Profiles</span>
              {isAnalyzed && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
            </button>

            <button
              onClick={() => isAnalyzed && onTabChange('simulation')}
              disabled={!isAnalyzed}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'simulation'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                  : isAnalyzed
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  : 'text-slate-600 cursor-not-allowed opacity-50'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>3. Dating Lounge</span>
              {isSimulated && <span className="w-2 h-2 rounded-full bg-pink-400"></span>}
            </button>

            <button
              onClick={() => isSimulated && onTabChange('rankings')}
              disabled={!isSimulated}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'rankings'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                  : isSimulated
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  : 'text-slate-600 cursor-not-allowed opacity-50'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>4. Top Rankings</span>
              {isSimulated && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onResetToDefault}
              title="Reload the 25 verified benchmark profiles"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              <span>Reset 25 Profiles</span>
            </button>

            <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next.js 16 AI</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
