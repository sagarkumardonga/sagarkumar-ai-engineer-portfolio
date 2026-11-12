import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Award, Sparkles, Binary, Sigma, Cpu } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  const subjectIcons = [Binary, Sigma, Cpu, BookOpen];

  return (
    <section id="education" className="py-20 md:py-28 bg-gray-950/70 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span>Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education &amp; Engineering Studies
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Cultivating rigorous algorithmic thinking, discrete mathematical foundations, and software discipline.
          </p>
        </div>

        {/* Education Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Academic Card (7 cols) */}
          <div className="lg:col-span-7 bg-gray-900/60 rounded-2xl border border-gray-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-indigo-400 block mb-0.5">
                    {education.stage}
                  </span>
                  <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                  <p className="text-sm text-gray-400 font-medium">{education.program}</p>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>{education.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Academic Approach */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Curricular Focus &amp; Methodology
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {education.academicApproach}
              </p>
            </div>

            {/* Focus Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Key Learning Outcomes
              </h4>
              <div className="space-y-2">
                {education.focusHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Current Coursework Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-800">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Core Semester Coursework
                </h4>
              </div>

              <div className="space-y-3">
                {education.currentSubjects.map((subject, idx) => {
                  const Icon = subjectIcons[idx % subjectIcons.length];
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-gray-950/80 border border-gray-800 flex items-center gap-3 group hover:border-gray-700 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gray-900 border border-gray-800 text-indigo-400 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-200">
                        {subject}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-gray-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Freshman Engineering Mindset</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Treating university education as an active workshop rather than passive lectures—building practical GitHub repos for every subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
