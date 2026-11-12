import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Cpu, Globe, Lightbulb, CheckCircle2, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming & Logic': <Terminal className="w-4 h-4 text-indigo-400" />,
    'AI & Emerging Tech': <Cpu className="w-4 h-4 text-cyan-400" />,
    'Web & Development Tools': <Globe className="w-4 h-4 text-purple-400" />,
    'Engineering Mindset': <Lightbulb className="w-4 h-4 text-amber-400" />
  };

  const filteredCategories = selectedFilter === 'all'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(cat => cat.title.toLowerCase().includes(selectedFilter));

  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-950/70 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span>Skills &amp; Technical Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Current Tech Stack &amp; Areas of Study
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            As a first-semester student, I focus on authentic growth stages rather than
            arbitrary percentage scores. Here is what I am actively learning, practicing, and building with.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-gray-900 border border-gray-800 rounded-xl mb-10 max-w-2xl">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All Categories
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('programming')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedFilter === 'programming'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Programming &amp; Logic
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('ai')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedFilter === 'ai'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            AI &amp; GenAI
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('web')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedFilter === 'web'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Web &amp; Tools
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('mindset')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedFilter === 'mindset'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Mindset
          </button>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-900/60 rounded-2xl border border-gray-800 p-6 shadow-xl hover:border-gray-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-gray-950 border border-gray-800 group-hover:border-indigo-500/40 transition-colors">
                    {categoryIcons[category.title] || <Terminal className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="divide-y divide-gray-800/80">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-200">{skill.name}</span>
                          {skill.tag && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700 font-mono">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{skill.focus}</p>
                      </div>
                      <div className="text-xs text-indigo-400 font-medium whitespace-nowrap self-start sm:self-auto shrink-0 sm:text-right pt-1 sm:pt-0 flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        <span>{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Note */}
        <div className="mt-10 p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs text-gray-400 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>
              <strong className="text-gray-200">Philosophy:</strong> Prioritizing deep comprehension of core logic, syntax mechanics, and problem decomposition over surface buzzwords.
            </span>
          </div>
          <span className="text-gray-500 font-mono text-[11px]">Semester 1 Curriculum Baseline</span>
        </div>
      </div>
    </section>
  );
};
