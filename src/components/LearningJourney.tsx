import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Clock, Compass, Sparkles } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 bg-gray-950 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span>Roadmap &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            My Learning Journey Toward AI Engineering
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            A step-by-step roadmap mapping where I started, what I am currently practicing,
            and the foundational milestones I am pursuing throughout my engineering studies.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-gray-800 space-y-8">
          {PORTFOLIO_DATA.journeySteps.map((step, idx) => {
            const isCompleted = step.status === 'Completed';
            const isInProgress = step.status === 'In Progress';

            return (
              <div key={idx} className="relative group">
                {/* Node icon on timeline line */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-2 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCompleted
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : isInProgress
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20 ring-4 ring-indigo-950'
                      : 'bg-gray-900 border-gray-700 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : isInProgress ? (
                    <Clock className="w-3.5 h-3.5 animate-pulse" />
                  ) : (
                    <Compass className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Content Box */}
                <div className="bg-gray-900/60 rounded-2xl border border-gray-800 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/90 shadow-xl group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-gray-950 text-indigo-400 border border-gray-800">
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isCompleted
                            ? 'bg-emerald-400'
                            : isInProgress
                            ? 'bg-indigo-400 animate-pulse'
                            : 'bg-gray-600'
                        }`}
                      />
                      <span
                        className={
                          isCompleted
                            ? 'text-emerald-400'
                            : isInProgress
                            ? 'text-indigo-300'
                            : 'text-gray-500'
                        }
                      >
                        {step.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Key Learnings */}
                  <div className="pt-3 border-t border-gray-800/80">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-2 font-mono">
                      Key Focus Points
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {step.learnings.map((item, lIdx) => (
                        <span
                          key={lIdx}
                          className="px-2.5 py-1 rounded-md bg-gray-950 text-gray-300 border border-gray-800 text-[11px] font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
