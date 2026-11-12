import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, ArrowUp, ArrowUpRight, Mail, Sparkles, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenRecruiterModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRecruiterModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-gray-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">
              {PORTFOLIO_DATA.profile.role} · {PORTFOLIO_DATA.profile.location}
            </p>
            <p className="text-xs text-gray-500 max-w-md leading-relaxed">
              Committed to authentic learning, practical software engineering, and disciplined daily practice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#hackathons" className="hover:text-white transition-colors">Hackathons</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>

            <button
              onClick={onOpenRecruiterModal}
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Recruiter Snapshot</span>
            </button>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; 2026 {PORTFOLIO_DATA.profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gray-500 font-mono">
              Built with React, TypeScript &amp; Tailwind CSS
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
