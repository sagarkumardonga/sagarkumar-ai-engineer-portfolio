import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Mail, Github, GraduationCap, Code2, Award, Sparkles, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copySummaryText = () => {
    const summary = `Candidate: Sagar Kumar Donga (D. Sagar Kumar)
Role: Aspiring AI Engineer & B.Tech 1st Semester Student
Email: ${PORTFOLIO_DATA.profile.email}
GitHub: ${PORTFOLIO_DATA.profile.github}
Core Focus: Python Programming, Generative AI, Web Technologies, Problem Solving
Projects: Voter Eligibility Calculator, ATM Management System, Student Grade Calculator
Hackathons: Active participant in collegiate ideathons & collaborative hackathons`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full text-gray-100 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-gray-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Recruiter &amp; Mentor Quick Overview</h3>
              <p className="text-xs text-gray-400">30-second candidate summary for internships &amp; collaborations</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Top Profile Card */}
          <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-white">{PORTFOLIO_DATA.profile.name}</h4>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  Open to Internships
                </span>
              </div>
              <p className="text-xs text-indigo-400 font-medium mt-0.5">{PORTFOLIO_DATA.profile.role}</p>
              <p className="text-xs text-gray-400 mt-1">Location: {PORTFOLIO_DATA.profile.location} · B.Tech 1st Semester</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Email Copied' : 'Email Sagar'}</span>
              </button>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium border border-gray-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Academic Profile */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Academic Status</span>
            </div>
            <div className="p-3.5 rounded-xl bg-gray-950/40 border border-gray-800 space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">{PORTFOLIO_DATA.education.degree}</span>
                <span className="text-indigo-400 font-medium">{PORTFOLIO_DATA.education.stage}</span>
              </div>
              <p className="text-xs text-gray-400">{PORTFOLIO_DATA.education.program}</p>
              <p className="text-xs text-gray-300 leading-relaxed pt-1">
                Currently building deep fundamentals in Python logic, discrete structures, and AI foundations.
              </p>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Key Technical Highlights</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-lg bg-gray-950/40 border border-gray-800">
                <div className="text-xs font-bold text-white mb-1">Hands-on Python Logic</div>
                <p className="text-[11px] text-gray-400">
                  Built runnable console programs including Voter Validation, ATM State Simulator, and Grade Computation.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-950/40 border border-gray-800">
                <div className="text-xs font-bold text-white mb-1">AI &amp; GenAI Direction</div>
                <p className="text-[11px] text-gray-400">
                  Studying LLM behaviors, heuristic problem formulation, and foundational mathematics for AI.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-950/40 border border-gray-800">
                <div className="text-xs font-bold text-white mb-1">Collaborative Hackathon Mindset</div>
                <p className="text-[11px] text-gray-400">
                  Active participant in collegiate hackathons and ideathons; rapid prototyping under event constraints.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-950/40 border border-gray-800">
                <div className="text-xs font-bold text-white mb-1">Committed Daily Learner</div>
                <p className="text-[11px] text-gray-400">
                  Disciplined version control on GitHub, clean modular coding practices, and genuine intellectual curiosity.
                </p>
              </div>
            </div>
          </div>

          {/* Fast Candidate Snippet for ATS/Notes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="font-semibold uppercase tracking-wider">Candidate Quick Notes</span>
              <button
                onClick={copySummaryText}
                className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer"
              >
                {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSummary ? 'Copied to Clipboard' : 'Copy Full Summary'}</span>
              </button>
            </div>
            <div className="p-3 rounded-xl bg-gray-950 border border-gray-800 font-mono text-[11px] text-gray-300 space-y-1 select-all">
              <div>Name: Sagar Kumar Donga (D. Sagar Kumar)</div>
              <div>Program: B.Tech (1st Semester) · Aspiring AI Engineer</div>
              <div>Focus: Python Programming, Generative AI, Algorithm Logic</div>
              <div>Status: Actively seeking freshman internships &amp; hackathon collaborations</div>
              <div>Contact: varasagar111@gmail.com · github.com/sagarkumardonga</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-gray-950 border-t border-gray-800 flex items-center justify-between text-xs">
          <span className="text-gray-400">Verified student profile · 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
