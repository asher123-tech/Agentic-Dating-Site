'use client';

import React, { useState } from 'react';
import { CandidateInput } from '@/types/dating';
import { PlusCircle, UploadCloud, Play, Trash2, Sparkles, CheckCircle2, UserPlus, Info } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '@/components/SocialIcons';

interface InputPoolViewProps {
  candidates: CandidateInput[];
  onLoadPresets: () => void;
  onAddCandidate: (candidate: CandidateInput) => void;
  onRemoveCandidate: (id: string) => void;
  onClearAll: () => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  onSelectCandidate: (candidate: CandidateInput) => void;
}

export const InputPoolView: React.FC<InputPoolViewProps> = ({
  candidates,
  onLoadPresets,
  onAddCandidate,
  onRemoveCandidate,
  onClearAll,
  onAnalyze,
  isAnalyzing,
  onSelectCandidate,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkText, setBulkText] = useState('');

  // Single candidate form state
  const [name, setName] = useState('');
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState<'female' | 'male' | 'non-binary'>('female');
  const [location, setLocation] = useState('');
  const [profession, setProfession] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [bioSnippet, setBioSnippet] = useState('');
  const [formError, setFormError] = useState('');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !profession.trim() || !linkedInUrl.trim() || !instagramUrl.trim()) {
      setFormError('Please fill in Name, Profession, LinkedIn URL, and Instagram URL.');
      return;
    }

    const defaultAvatar = gender === 'female'
      ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
      : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80';

    const newCandidate: CandidateInput = {
      id: 'custom_' + Date.now(),
      name: name.trim(),
      age: Number(age) || 28,
      gender,
      location: location.trim() || 'San Francisco, CA',
      profession: profession.trim(),
      linkedInUrl: linkedInUrl.trim().startsWith('http') ? linkedInUrl.trim() : `https://linkedin.com/in/${linkedInUrl.trim()}`,
      instagramUrl: instagramUrl.trim().startsWith('http') ? instagramUrl.trim() : `https://instagram.com/${instagramUrl.trim()}`,
      avatarUrl: avatarUrl.trim() || defaultAvatar,
      bioSnippet: bioSnippet.trim() || `Passionate ${profession.trim()} looking for genuine intellectual and emotional resonance.`
    };

    onAddCandidate(newCandidate);
    // Reset
    setName('');
    setProfession('');
    setLocation('');
    setLinkedInUrl('');
    setInstagramUrl('');
    setAvatarUrl('');
    setBioSnippet('');
    setFormError('');
    setShowAddModal(false);
  };

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(bulkText);
      if (Array.isArray(parsed)) {
        parsed.forEach((item, idx) => {
          if (item.name && item.linkedInUrl && item.instagramUrl) {
            onAddCandidate({
              id: item.id || `custom_bulk_${Date.now()}_${idx}`,
              name: item.name,
              age: item.age || 29,
              gender: item.gender || 'female',
              location: item.location || 'Global',
              profession: item.profession || 'Creative Professional',
              linkedInUrl: item.linkedInUrl,
              instagramUrl: item.instagramUrl,
              avatarUrl: item.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
              bioSnippet: item.bioSnippet || `Seeking great conversation and adventure.`
            });
          }
        });
        setBulkText('');
        setShowBulkModal(false);
      }
    } catch {
      alert('Invalid JSON format. Please ensure it is an array of candidate objects.');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Showcase Banner */}
      <div className="relative overflow-hidden rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 radial-glow">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            25 Real People • Autonomous Agent Matchmaking
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Deploy Personal <span className="gradient-text">AI Dating Agents</span> For Every Candidate.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Feed in LinkedIn careers and Instagram lifestyle narratives. Our autonomous simulation engine creates personalized AI agents that interview, date, and rank compatibility across all candidates in real time.
          </p>

          {/* Core Action Callouts */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onLoadPresets}
              id="btn-load-25-presets"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all shadow-lg active:scale-95"
            >
              <UploadCloud className="w-4 h-4 text-rose-400" />
              <span>Load 25 Sample Profiles</span>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/30 text-rose-200 text-xs font-bold">25 Presets</span>
            </button>

            <button
              onClick={onAnalyze}
              id="btn-analyze-profiles"
              disabled={candidates.length === 0 || isAnalyzing}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shadow-xl transition-all active:scale-95 ${
                candidates.length > 0 && !isAnalyzing
                  ? 'bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:opacity-95 shadow-rose-500/25'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isAnalyzing ? 'Synthesizing 25 Agents...' : `Analyze ${candidates.length} Profiles & Deploy Agents`}</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-white/10 transition-colors"
            >
              <UserPlus className="w-4 h-4 text-indigo-400" />
              <span>Add Candidate</span>
            </button>

            <button
              onClick={() => setShowBulkModal(true)}
              className="text-xs text-slate-400 hover:text-slate-200 underline font-medium px-2 py-1"
            >
              Bulk JSON Import
            </button>

            {candidates.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-400/80 hover:text-rose-400 flex items-center gap-1 font-medium ml-auto"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Pool Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Candidate Cohort</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              {candidates.length} Active
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Each candidate has a public LinkedIn URL and public Instagram URL ready for AI extraction.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Social URLs Verified
          </span>
          <span className="flex items-center gap-1.5">
            <Info className="w-4 h-4 text-purple-400" />
            Click any card to inspect full profile
          </span>
        </div>
      </div>

      {/* Candidates Grid */}
      {candidates.length === 0 ? (
        <div className="text-center py-20 rounded-3xl glass-panel border border-dashed border-white/10">
          <UploadCloud className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">No Profiles in Pool</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mt-1 mb-6">
            Click &ldquo;Load 25 Sample Profiles&rdquo; to immediately populate verified real profiles with active careers, hobbies, and social handles.
          </p>
          <button
            onClick={onLoadPresets}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all"
          >
            Load 25 Sample Profiles Now
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {candidates.map((c, index) => (
            <div
              key={c.id}
              onClick={() => onSelectCandidate(c)}
              className="group relative rounded-2xl glass-panel p-4 border border-white/10 hover:border-rose-500/40 hover:bg-slate-900/90 transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-1"
            >
              {/* Top Tag & Delete */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded-md bg-white/5">
                  #{index + 1}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveCandidate(c.id);
                  }}
                  className="p-1 rounded-md text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                  title="Remove from pool"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Avatar & Age */}
              <div className="relative mb-3 flex justify-center">
                <img
                  src={c.avatarUrl}
                  alt={c.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-white/10 group-hover:border-rose-500/50 transition-all shadow-md"
                />
                <span className="absolute bottom-0 right-1/2 translate-x-8 px-1.5 py-0.2 rounded-md bg-slate-900 text-[10px] font-semibold text-slate-200 border border-white/20">
                  {c.age}
                </span>
              </div>

              {/* Info */}
              <div className="text-center">
                <h4 className="font-bold text-sm text-white group-hover:text-rose-400 transition-colors truncate">
                  {c.name}
                </h4>
                <p className="text-[11px] font-medium text-rose-300 truncate mt-0.5">
                  {c.profession}
                </p>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">
                  {c.location}
                </p>
              </div>

              {/* Social Links Badge */}
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-center gap-3">
                <a
                  href={c.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 rounded-lg text-blue-400 hover:bg-blue-500/10 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={c.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 rounded-lg text-pink-400 hover:bg-pink-500/10 transition-colors"
                  title="Instagram Profile"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Add Candidate Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl glass-panel p-6 border border-white/15 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-rose-400" />
              Add New Candidate
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Enter candidate details along with their public LinkedIn & Instagram profiles.
            </p>

            {formError && (
              <div className="mb-4 p-2.5 rounded-xl bg-rose-500/20 text-rose-300 text-xs border border-rose-500/30">
                {formError}
              </div>
            )}

            <form onSubmit={handleAddSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Chen"
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-300">Age</label>
                  <input
                    type="number"
                    min="18"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300">Profession *</label>
                  <input
                    type="text"
                    required
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder="e.g. AI Product Lead"
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-300">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Austin, TX"
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300">Public LinkedIn URL *</label>
                <input
                  type="text"
                  required
                  value={linkedInUrl}
                  onChange={(e) => setLinkedInUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300">Public Instagram URL *</label>
                <input
                  type="text"
                  required
                  value={instagramUrl}
                  onChange={(e) => setInstagramUrl(e.target.value)}
                  placeholder="https://instagram.com/username"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300">Avatar Photo URL (Optional)</label>
                <input
                  type="text"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  placeholder="Leave empty for auto-assigned portrait"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-300">Bio / Notes Snippet</label>
                <textarea
                  rows={2}
                  value={bioSnippet}
                  onChange={(e) => setBioSnippet(e.target.value)}
                  placeholder="Brief context on interests and personality"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-rose-500 resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-lg"
                >
                  Add to Pool
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk JSON Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl glass-panel p-6 border border-white/15 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-indigo-400" />
              Bulk JSON Import
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Paste a JSON array of candidate objects with `name`, `profession`, `linkedInUrl`, and `instagramUrl`.
            </p>

            <form onSubmit={handleBulkSubmit} className="space-y-4">
              <textarea
                rows={8}
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                placeholder='[{"name": "Alex River", "profession": "Designer", "linkedInUrl": "https://linkedin.com/in/alex", "instagramUrl": "https://instagram.com/alex"}]'
                className="w-full px-3 py-2 rounded-xl bg-slate-950 font-mono text-xs border border-white/10 text-slate-200 focus:outline-none focus:border-indigo-500 resize-none"
              />

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowBulkModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg"
                >
                  Import Candidates
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
