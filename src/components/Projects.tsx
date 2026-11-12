import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectSimulatorModal } from './ProjectSimulatorModal';
import { Github, ArrowUpRight, Play, CheckCircle2, UserCheck, CreditCard, GraduationCap, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectIcons: Record<string, React.ReactNode> = {
    'voter-eligibility': <UserCheck className="w-5 h-5 text-indigo-400" />,
    'atm-management': <CreditCard className="w-5 h-5 text-cyan-400" />,
    'student-grade-calculator': <GraduationCap className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-950 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Hands-on Programming &amp; Logic Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Practical Python projects built during my first semester to understand core programming principles,
            conditional branching, input validation, and user interaction loops.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/60 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 space-y-5">
                {/* Header row with Icon and category */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-gray-950 border border-gray-800 group-hover:scale-105 transition-transform">
                    {projectIcons[project.id]}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-950 text-indigo-400 border border-gray-800 font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Key Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-800/80">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2 rounded-lg bg-gray-950/60 border border-gray-800/80 text-center">
                        <span className="text-[10px] text-gray-500 block truncate">{metric.label}</span>
                        <span className="text-xs font-mono font-semibold text-gray-200 block truncate">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Concepts Used */}
                <div className="pt-2 border-t border-gray-800/80">
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Core Concepts
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-gray-300">
                    {project.concepts.map((concept, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded bg-gray-950 text-[11px] text-gray-300 border border-gray-800/80 font-mono"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights list */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Card Footer */}
              <div className="p-6 pt-3 bg-gray-950/70 border-t border-gray-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer shadow-sm active:scale-98"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Test Demo &amp; Code</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
                  title="View repository on GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repo</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Repository */}
        <div className="mt-12 text-center text-xs text-gray-400">
          <span>All project source code and logic scripts are hosted on </span>
          <a
            href={PORTFOLIO_DATA.profile.pythonRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 font-semibold underline underline-offset-2 hover:text-indigo-300"
          >
            GitHub (sagarkumardonga/python..)
          </a>
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectSimulatorModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
