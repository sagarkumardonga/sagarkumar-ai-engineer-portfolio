import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, Users2, Target, Zap, MessageSquareQuote, Lightbulb, Trophy } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const dimensionIcons = [Target, Users2, Zap, Sparkles];
  const accentColors = [
    'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    'text-amber-400 bg-amber-500/10 border-amber-500/30',
    'text-purple-400 bg-purple-500/10 border-purple-500/30'
  ];

  return (
    <section id="hackathons" className="py-20 md:py-28 bg-gray-950/70 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span>Collaborative Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Hackathons &amp; Ideathons
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Participating in hackathons and ideathons to explore real-world problems,
            collaborate with peers, develop ideas, and strengthen my problem-solving skills.
          </p>
        </div>

        {/* 4 Core Dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PORTFOLIO_DATA.hackathonDimensions.map((item, idx) => {
            const Icon = dimensionIcons[idx % dimensionIcons.length];
            const accent = accentColors[idx % accentColors.length];
            return (
              <div
                key={idx}
                className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 shadow-xl hover:border-gray-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className={`p-2.5 rounded-xl border ${accent} w-fit group-hover:scale-105 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Insight Callout */}
        <div className="bg-gray-900/60 rounded-2xl border border-gray-800 p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
            <MessageSquareQuote className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-base font-bold text-white">
              Why I Join Hackathons in My First Semester
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              In college, classroom tutorials teach syntax, but hackathons and ideathons teach resilience.
              Working alongside teammates pushes me to break down ambiguous challenges, brainstorm outside the box,
              and apply whatever Python or web logic I know under real time limits.
            </p>
          </div>
          <div className="text-xs px-3 py-1.5 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-300 font-semibold uppercase tracking-wider whitespace-nowrap self-start md:self-auto font-mono">
            Growth Mindset
          </div>
        </div>
      </div>
    </section>
  );
};
