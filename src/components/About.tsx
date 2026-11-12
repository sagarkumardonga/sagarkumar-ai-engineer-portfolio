import React from 'react';
import { BookOpen, Code2, Users, Compass, CheckCircle2, ShieldCheck, HeartHandshake, Flame } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: 'B.Tech 1st Semester',
      description:
        'At the very beginning of my formal engineering journey, building strong fundamentals in programming logic and mathematical foundations.',
      accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
    },
    {
      icon: Code2,
      title: 'Python & Web Basics',
      description:
        'Practicing Python syntax, conditional branching, algorithms, and exploring how web technologies build user-facing software.',
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
    },
    {
      icon: Compass,
      title: 'Curiosity for AI',
      description:
        'Driven by an interest in how Generative AI and modern AI systems work, with a long-term goal of growing into a skilled AI Engineer.',
      accent: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
    },
    {
      icon: Users,
      title: 'Hackathons & Ideathons',
      description:
        'Using hackathons and ideathons as experimental grounds to learn teamwork, brainstorm solutions, and iterate rapidly under constraints.',
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-950 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span>About Sagar Kumar Donga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Early-Stage Engineering Student &amp; Aspiring AI Engineer
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Honest about where I stand today, driven by where disciplined practice will take me tomorrow.
          </p>
        </div>

        {/* Two-Column Authentic Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6 text-base text-gray-300 leading-relaxed">
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-4">
              <p>
                I am currently in my <strong className="text-white font-semibold">first semester of B.Tech</strong>. As an aspiring
                AI Engineer, I am dedicating my initial college months to establishing a solid
                foundation in <strong className="text-indigo-400 font-semibold">Python</strong>,{' '}
                <strong className="text-cyan-400 font-semibold">web development</strong>, and the
                core mechanisms behind <strong className="text-purple-400 font-semibold">Artificial Intelligence</strong> and{' '}
                <strong className="text-emerald-400 font-semibold">Generative AI</strong>.
              </p>
              <p>
                Rather than just reading theory, I prioritize learning by writing code. My early projects—including
                a voter eligibility calculator, an ATM operations simulator, and a student grade calculator—have
                helped me internalize conditionals, loops, functions, and user input validation.
              </p>
              <p>
                Beyond solo practice, I actively participate in <strong className="text-white font-semibold">hackathons and ideathons</strong>.
                These events give me the opportunity to collaborate with peers, brainstorm creative solutions
                to open-ended problems, and develop the agility required to solve real-world technical challenges.
              </p>
            </div>

            {/* Preserved Philosophy Quote Block */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-transparent border-l-4 border-indigo-500 text-gray-300 italic text-base">
              "{`I do not view myself as an experienced engineer yet; I view myself as a committed, curious student ready to experiment, fail fast, and build my way forward.`}"
              <span className="block mt-2 text-xs font-semibold not-italic text-indigo-400">
                — Sagar Kumar Donga, B.Tech 1st Semester
              </span>
            </div>

            {/* 3 Core Operating Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Daily Coding</span>
                </div>
                <p className="text-xs text-gray-400">Continuous problem solving in Python syntax &amp; CLI logic.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real Projects</span>
                </div>
                <p className="text-xs text-gray-400">No mock claims; every project runs with verifiable logic.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Team Player</span>
                </div>
                <p className="text-xs text-gray-400">Thriving in ideathons, campus sprints, and peer sessions.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/90 hover:border-gray-700 transition-all space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${pillar.accent} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-1">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
