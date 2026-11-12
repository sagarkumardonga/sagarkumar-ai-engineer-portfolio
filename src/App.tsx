/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { LearningJourney } from './components/LearningJourney';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterModal } from './components/RecruiterModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'hackathons', 'journey', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <LearningJourney />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)} />

      {/* Recruiter Fast Overview Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </div>
  );
}
