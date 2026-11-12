import React, { useState } from 'react';
import { ArrowDown, Github, Terminal, Sparkles, Play, Check, Copy, Code2, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenRecruiterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterModal }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'roadmap' | 'stats'>('profile');
  const [hasRunSnippet, setHasRunSnippet] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const [outputLog, setOutputLog] = useState<string[]>([
    '>>> [INIT] Student profile initialized.',
    '>>> Name: Sagar Kumar Donga (D. Sagar Kumar)',
    '>>> Status: B.Tech (1st Semester Freshman)',
    '>>> Core Direction: Computational Logic & AI Engineering'
  ]);

  const handleSimulateRun = () => {
    setHasRunSnippet(true);
    setOutputLog([
      '>>> [INIT] Student profile initialized.',
      '>>> Name: Sagar Kumar Donga',
      '>>> Degree: Bachelor of Technology (1st Semester)',
      '>>> Active Focus: Python | Web Dev | GenAI | Ideathons',
      '>>> Verified Repos: github.com/sagarkumardonga/python..',
      '>>> Built: Voter Eligibility, ATM Simulator, Grade Calc',
      '>>> Current Stance: "Learn deeply by building, questioning, and testing boundary cases."'
    ]);
  };

  const codeSnippets = {
    profile: `# student_profile.py
# Sagar Kumar Donga · Aspiring AI Engineer

class EngineeringStudent:
    def __init__(self):
        self.name = "Sagar Kumar Donga"
        self.academic_stage = "B.Tech 1st Semester"
        self.target_specialization = "Artificial Intelligence"
        self.active_stack = ["Python", "Web Basics", "Generative AI"]
        self.philosophy = "Build real projects to master core logic"
        self.github = "sagarkumardonga"

    def current_status(self):
        return {
            "ready_for": "Collaborations & Internships",
            "daily_focus": "Syntax drills & algorithmic reasoning"
        }

student = EngineeringStudent()
print(f"Candidate: {student.name} | Goal: {student.target_specialization}")`,
    roadmap: `# ai_roadmap.py
# Learning Milestones toward AI Engineering

milestones = [
    {"step": 1, "topic": "Python Core & Logic", "status": "Completed"},
    {"step": 2, "topic": "Web Foundations", "status": "In Progress"},
    {"step": 3, "topic": "Generative AI & LLMs", "status": "In Progress"},
    {"step": 4, "topic": "AI Theory & Discrete Math", "status": "In Progress"},
    {"step": 5, "topic": "Hackathons & Rapid Prototyping", "status": "Active"},
    {"step": 6, "topic": "Deep Learning & Neural Systems", "status": "Upcoming"}
]

for m in milestones:
    print(f"[{m['status']}] Step {m['step']}: {m['topic']}")`,
    stats: `{
  "student": "Sagar Kumar Donga",
  "program": "B.Tech (1st Semester)",
  "location": "India",
  "github_repositories": ["python..", "ai_engineer_"],
  "projects_built": [
    "Voter Eligibility Calculator",
    "ATM Management System",
    "Student Grade Calculator"
  ],
  "open_to": [
    "Freshman internships",
    "Hackathon teams",
    "Technical mentorship"
  ]
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden cyber-grid border-b border-gray-800"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top metadata pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.Tech 1st Semester</span>
              <span className="text-gray-600">·</span>
              <span className="text-cyan-300">Aspiring AI Engineer</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Sagar Kumar Donga</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gray-300 tracking-tight">
                {PORTFOLIO_DATA.profile.headline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.profile.bioShort}
            </p>

            {/* Focus areas tags */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2.5">
                Current Learning &amp; Exploration Pillars
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.profile.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/25 active:scale-98"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenRecruiterModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-gray-200 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-xl transition-all active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Recruiter Snapshot</span>
              </button>

              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-gray-300 hover:text-white bg-gray-950/60 hover:bg-gray-900 border border-gray-800 rounded-xl transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
              </a>
            </div>

            {/* Authentic student positioning statement */}
            <div className="pt-4 text-xs text-gray-400 border-t border-gray-800/80 flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Dedicated first-semester growth · Building transparent foundations without inflated claims</span>
            </div>
          </div>

          {/* Right Column: High-Tech Python Terminal Environment */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl border border-gray-800 shadow-2xl overflow-hidden cyber-glow">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-gray-950 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-gray-400 ml-2">python3-runtime</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
                    title="Copy code snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleSimulateRun}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 rounded-md hover:bg-emerald-900/60 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                    <span>{hasRunSnippet ? 'Rerun' : 'Run Script'}</span>
                  </button>
                </div>
              </div>

              {/* Tabs for Snippets */}
              <div className="flex border-b border-gray-800/80 bg-gray-950/40 text-xs font-mono px-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-2 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'profile'
                      ? 'border-indigo-500 text-indigo-300 bg-gray-900/40 font-semibold'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  student_profile.py
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('roadmap')}
                  className={`px-3 py-2 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'roadmap'
                      ? 'border-indigo-500 text-indigo-300 bg-gray-900/40 font-semibold'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  ai_roadmap.py
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('stats')}
                  className={`px-3 py-2 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'stats'
                      ? 'border-indigo-500 text-indigo-300 bg-gray-900/40 font-semibold'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  stats.json
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto text-gray-300 max-h-64 bg-gray-950/90">
                <pre>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Simulated Interactive Console Output */}
              <div className="bg-gray-950 p-4 border-t border-gray-800 font-mono text-xs">
                <div className="flex items-center justify-between text-gray-400 mb-2 pb-1 border-b border-gray-800/80">
                  <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Live Console Output</span>
                  </span>
                  <span className="text-[10px] text-gray-400">Python 3.12 (Interactive)</span>
                </div>
                <div className="space-y-1 text-gray-300">
                  {outputLog.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        idx >= 3 ? 'text-emerald-400 font-medium' : 'text-gray-400'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
