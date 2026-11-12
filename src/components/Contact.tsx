import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, ArrowUpRight, Copy, Check, Send, MessageSquare, Mail, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedGithub, setCopiedGithub] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderTopic, setSenderTopic] = useState('Hackathon Collaboration');
  const [senderNote, setSenderNote] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.github);
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderNote.trim() || !senderName.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-950 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Invitation & GitHub Link */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Let's Connect &amp; Collaborate
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Whether you are a fellow engineering student interested in teaming up for an upcoming hackathon,
              or a mentor willing to share learning advice for a first-semester student, I welcome connecting.
            </p>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Email Inquiries</h3>
                  <p className="text-xs text-gray-400">Personal &amp; professional communications</p>
                </div>
              </div>

              <div className="p-3 bg-gray-950 rounded-xl border border-gray-800 font-mono text-xs text-indigo-300 truncate select-all">
                {PORTFOLIO_DATA.profile.email}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Portfolio%20Inquiry%20from%20Website`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3 h-3 text-indigo-200" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* GitHub Primary Card */}
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Developer Profile (GitHub)</h3>
                  <p className="text-xs text-gray-400">Code repositories, commit history &amp; project sources</p>
                </div>
              </div>

              <div className="p-3 bg-gray-950 rounded-xl border border-gray-800 font-mono text-xs text-gray-300 truncate select-all">
                {PORTFOLIO_DATA.profile.github}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-lg border border-gray-700 transition-colors shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyGithub}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-950 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-900 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  {copiedGithub ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedGithub ? 'Link Copied' : 'Copy URL'}</span>
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-400 space-y-2 pt-1">
              <div className="font-semibold text-gray-200 uppercase tracking-wider text-[11px]">
                Currently Open To:
              </div>
              <ul className="space-y-1 text-gray-400">
                {PORTFOLIO_DATA.profile.openTo.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Quick Note Box */}
          <div className="lg:col-span-6">
            <div className="bg-gray-900/70 rounded-2xl border border-gray-800 shadow-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-800">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="text-base font-bold text-white">Send a Message or Feedback</h3>
                  <p className="text-xs text-gray-400">Connect directly with Sagar</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Thank you for reaching out!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Your note has been received. I appreciate your encouragement and advice as I progress through my first semester of engineering.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setSenderNote('');
                      }}
                      className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitNote} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex Sharma / Mentor / Peer"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-hidden focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Email (Optional, if you'd like a reply)
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. yourname@domain.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-hidden focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Discussion Topic
                    </label>
                    <select
                      value={senderTopic}
                      onChange={(e) => setSenderTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-hidden focus:border-indigo-500 cursor-pointer"
                    >
                      <option value="Hackathon Collaboration">Hackathon &amp; Ideathon Collaboration</option>
                      <option value="Python & Code Advice">Python &amp; Code Feedback</option>
                      <option value="AI Learning Guidance">AI Learning Guidance / Mentorship</option>
                      <option value="Internship Discussion">Freshman Internship Opportunity</option>
                      <option value="General Encouragement">General Student Connection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Message, Feedback, or Invitation
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={senderNote}
                      onChange={(e) => setSenderNote(e.target.value)}
                      placeholder="Share advice, feedback on projects, or an invitation to collaborate on an upcoming hackathon..."
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-hidden focus:border-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-indigo-600/20 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sagar</span>
                  </button>

                  <p className="text-[11px] text-gray-500 text-center">
                    Note recorded interactively for portfolio visitors &amp; mentors.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
