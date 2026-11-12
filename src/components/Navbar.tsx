import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Sparkles, Terminal, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenRecruiterModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenRecruiterModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Journey', href: '#journey' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800 text-gray-100 shadow-xl'
          : 'bg-gray-950/60 backdrop-blur-sm border-b border-gray-800/60 text-gray-100'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-indigo-950/90 via-purple-950/90 to-cyan-950/90 border-b border-indigo-900/40 py-1 px-4 text-center text-[11px] text-gray-300 flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-medium text-gray-200">B.Tech 1st Semester Student · Aspiring AI Engineer</span>
        <span className="text-gray-500 hidden sm:inline">|</span>
        <button
          onClick={onOpenRecruiterModal}
          className="text-indigo-300 hover:text-white font-semibold underline underline-offset-2 ml-1 cursor-pointer"
        >
          View Recruiter Snapshot &rarr;
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark with Terminal Accent */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight font-extrabold">{PORTFOLIO_DATA.profile.name}</span>
            <span className="text-[10px] font-mono text-gray-400 font-normal tracking-wide">
              ~/aspiring-ai-engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-indigo-400 font-bold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Recruiter Quick View Button */}
          <button
            type="button"
            onClick={onOpenRecruiterModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Recruiter Quick View</span>
          </button>

          {/* GitHub Link */}
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 transition-colors shadow-xs"
            title="Visit GitHub Profile (sagarkumardonga)"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-gray-400" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 border border-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 px-5 py-4 space-y-2 text-sm shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-gray-300 hover:bg-gray-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRecruiterModal();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Recruiter 30-Sec Snapshot</span>
            </button>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold bg-gray-900 border border-gray-800 text-gray-200 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Open GitHub (sagarkumardonga)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
