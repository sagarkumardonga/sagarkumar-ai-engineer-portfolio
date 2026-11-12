import React, { useState } from 'react';
import { X, Play, Code2, Check, Copy, RefreshCw, Terminal, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectSimulatorModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectSimulatorModal: React.FC<ProjectSimulatorModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'simulator' | 'code'>('simulator');
  const [copied, setCopied] = useState(false);

  // Voter State
  const [voterAge, setVoterAge] = useState<string>('20');
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // ATM State
  const [atmPin] = useState<string>('1234');
  const [atmEnteredPin, setAtmEnteredPin] = useState<string>('');
  const [atmAuth, setAtmAuth] = useState<boolean>(false);
  const [atmBalance, setAtmBalance] = useState<number>(5000);
  const [atmAmount, setAtmAmount] = useState<string>('1000');
  const [atmMessages, setAtmMessages] = useState<string[]>([
    '>>> ATM System Initialized.',
    '>>> Default Test PIN is 1234. Initial Balance: ₹5,000.00'
  ]);

  // Grade State
  const [gradeInput, setGradeInput] = useState<string>('85, 92, 78, 90, 88');
  const [gradeOutput, setGradeOutput] = useState<{
    total: number;
    percentage: number;
    grade: string;
    status: string;
    scoresCount: number;
  } | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Voter logic
  const runVoterCalc = () => {
    const ageNum = parseInt(voterAge, 10);
    if (isNaN(ageNum)) {
      setVoterResult('Error: Please enter a valid numerical age.');
      return;
    }
    if (ageNum < 0) {
      setVoterResult('Invalid input: Age cannot be negative.');
    } else if (ageNum >= 18) {
      setVoterResult(`Eligible! At ${ageNum} years old, you meet the legal voting age requirement (Threshold: 18).`);
    } else {
      const diff = 18 - ageNum;
      setVoterResult(`Not eligible yet. At ${ageNum}, you have ${diff} year(s) until you are eligible to vote.`);
    }
  };

  // ATM logic
  const handleAtmAuth = () => {
    if (atmEnteredPin === atmPin) {
      setAtmAuth(true);
      setAtmMessages((prev) => [...prev, '>>> [AUTH OK] PIN Accepted. Account session unlocked.']);
    } else {
      setAtmMessages((prev) => [...prev, '>>> [AUTH FAIL] Incorrect PIN entered. Try "1234".']);
    }
  };

  const handleAtmDeposit = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmMessages((prev) => [...prev, '>>> [ERROR] Deposit amount must be greater than zero.']);
      return;
    }
    const newBal = atmBalance + amt;
    setAtmBalance(newBal);
    setAtmMessages((prev) => [
      ...prev,
      `>>> [DEPOSIT] ₹${amt.toLocaleString()} credited. Updated Balance: ₹${newBal.toLocaleString()}`
    ]);
  };

  const handleAtmWithdraw = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmMessages((prev) => [...prev, '>>> [ERROR] Withdrawal amount must be greater than zero.']);
      return;
    }
    if (amt > atmBalance) {
      setAtmMessages((prev) => [
        ...prev,
        `>>> [DECLINED] Insufficient funds. Available balance: ₹${atmBalance.toLocaleString()}`
      ]);
      return;
    }
    const newBal = atmBalance - amt;
    setAtmBalance(newBal);
    setAtmMessages((prev) => [
      ...prev,
      `>>> [WITHDRAW] ₹${amt.toLocaleString()} dispensed. Remaining Balance: ₹${newBal.toLocaleString()}`
    ]);
  };

  const handleAtmReset = () => {
    setAtmAuth(false);
    setAtmBalance(5000);
    setAtmEnteredPin('');
    setAtmMessages([
      '>>> [RESET] ATM Session reset.',
      '>>> Default PIN is 1234. Balance reset to ₹5,000.00'
    ]);
  };

  // Grade logic
  const runGradeCalc = () => {
    const scores = gradeInput
      .split(',')
      .map((s) => parseFloat(s.trim()))
      .filter((n) => !isNaN(n));

    if (scores.length === 0) {
      setGradeOutput(null);
      return;
    }

    const total = scores.reduce((a, b) => a + b, 0);
    const percentage = total / scores.length;

    let grade = 'F';
    let status = 'Did not meet passing criteria';

    if (percentage >= 90) {
      grade = 'A+';
      status = 'Outstanding Performance';
    } else if (percentage >= 80) {
      grade = 'A';
      status = 'Excellent Work';
    } else if (percentage >= 70) {
      grade = 'B';
      status = 'Good Effort';
    } else if (percentage >= 60) {
      grade = 'C';
      status = 'Satisfactory';
    } else if (percentage >= 50) {
      grade = 'D';
      status = 'Needs Improvement';
    }

    setGradeOutput({
      total: Math.round(total * 10) / 10,
      percentage: Math.round(percentage * 10) / 10,
      grade,
      status,
      scoresCount: scores.length
    });
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
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-gray-900/90">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                {project.category}
              </span>
              <span className="text-gray-600">·</span>
              <span className="text-xs text-gray-400">Interactive Runtime Demo</span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-gray-800 px-6 bg-gray-950/40">
          <button
            type="button"
            onClick={() => setActiveTab('simulator')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'simulator'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Python Source Code</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'simulator' ? (
            <div className="space-y-6">
              <div className="text-xs text-gray-300 bg-indigo-950/40 border border-indigo-500/20 p-3.5 rounded-xl flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">In-Browser Python Logic Sandbox:</strong> This simulator mirrors Sagar's exact Python script logic, data structures, and edge-case validations right in your browser.
                </div>
              </div>

              {/* Voter Simulator */}
              {project.simulationType === 'voter' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-800 space-y-3">
                    <label className="block text-xs font-semibold text-gray-300">
                      Enter Age in Years (Tests boundary at 18):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        placeholder="e.g. 17, 18, 25, -2"
                        className="flex-1 px-3.5 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-hidden focus:border-indigo-500 font-mono"
                      />
                      <button
                        type="button"
                        onClick={runVoterCalc}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Run Test</span>
                      </button>
                    </div>

                    <div className="flex gap-2 pt-1 text-[11px] text-gray-400">
                      <span>Quick presets:</span>
                      <button
                        type="button"
                        onClick={() => { setVoterAge('16'); }}
                        className="text-indigo-400 hover:underline cursor-pointer"
                      >
                        16 (Underage)
                      </button>
                      <span>·</span>
                      <button
                        type="button"
                        onClick={() => { setVoterAge('18'); }}
                        className="text-indigo-400 hover:underline cursor-pointer"
                      >
                        18 (Threshold)
                      </button>
                      <span>·</span>
                      <button
                        type="button"
                        onClick={() => { setVoterAge('-3'); }}
                        className="text-indigo-400 hover:underline cursor-pointer"
                      >
                        -3 (Invalid)
                      </button>
                    </div>
                  </div>

                  {voterResult && (
                    <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-gray-400 text-[11px] uppercase tracking-wider border-b border-gray-800/80 pb-1">
                        <span className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-gray-400" />
                          <span>Console Execution Output</span>
                        </span>
                        <span className="text-emerald-400">Status 200 OK</span>
                      </div>
                      <div className={voterResult.startsWith('Invalid') || voterResult.startsWith('Error') ? 'text-amber-400 font-medium' : voterResult.startsWith('Eligible') ? 'text-emerald-400 font-medium' : 'text-cyan-400 font-medium'}>
                        {voterResult}
                      </div>
                    </div>
                  )}

                  <div className="p-3.5 rounded-xl bg-gray-950/40 border border-gray-800 text-xs text-gray-400 space-y-1.5">
                    <div className="font-semibold text-gray-200">Algorithmic Mechanisms Tested:</div>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400">
                      <li>Explicit type casting from user input to integer representation (`int(input())`).</li>
                      <li>Multi-branch conditional logic handling negative numbers, edge boundaries, and legal age.</li>
                      <li>Dynamic remaining duration calculation (`18 - age`) for accurate user feedback.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* ATM Simulator */}
              {project.simulationType === 'atm' && (
                <div className="space-y-4">
                  {!atmAuth ? (
                    <div className="p-5 bg-gray-950/60 border border-gray-800 rounded-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-gray-200">Step 1: Authenticate PIN Session</div>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-mono">
                          PIN: 1234
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          maxLength={4}
                          value={atmEnteredPin}
                          onChange={(e) => setAtmEnteredPin(e.target.value)}
                          placeholder="Enter 4-digit PIN"
                          className="w-44 px-3.5 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-hidden focus:border-indigo-500 tracking-widest text-center"
                        />
                        <button
                          type="button"
                          onClick={handleAtmAuth}
                          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Unlock Session</span>
                        </button>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Default PIN is set to <span className="text-white font-mono font-bold">1234</span> in Sagar's Python script.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Active Account Banner */}
                      <div className="flex items-center justify-between p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-emerald-300 font-semibold">Active Authorized Session</span>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-400 text-[11px] block">Current Balance</span>
                          <span className="font-bold font-mono text-base text-emerald-400">
                            ₹{atmBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>

                      {/* Transaction Form */}
                      <div className="p-4 bg-gray-950/60 border border-gray-800 rounded-xl space-y-3">
                        <label className="block text-xs font-semibold text-gray-300">
                          Transaction Amount (₹):
                        </label>
                        <div className="flex flex-wrap gap-2">
                          <input
                            type="number"
                            value={atmAmount}
                            onChange={(e) => setAtmAmount(e.target.value)}
                            placeholder="Amount in ₹"
                            className="w-36 px-3.5 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-white font-mono focus:outline-hidden focus:border-indigo-500"
                          />
                          <button
                            type="button"
                            onClick={handleAtmDeposit}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                          >
                            + Deposit
                          </button>
                          <button
                            type="button"
                            onClick={handleAtmWithdraw}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                          >
                            - Withdraw
                          </button>
                          <button
                            type="button"
                            onClick={handleAtmReset}
                            className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Reset Session</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATM Audit Log Console */}
                  <div className="p-4 bg-gray-950 border border-gray-800 rounded-xl font-mono text-xs space-y-1.5 max-h-40 overflow-y-auto">
                    <div className="flex items-center justify-between text-[11px] text-gray-500 uppercase tracking-wider border-b border-gray-800/80 pb-1">
                      <span>ATM Transaction Audit Ledger</span>
                      <span className="text-gray-400">SimpleATM Object</span>
                    </div>
                    {atmMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={
                          msg.includes('[AUTH OK]') || msg.includes('[DEPOSIT]')
                            ? 'text-emerald-400'
                            : msg.includes('[ERROR]') || msg.includes('[DECLINED]') || msg.includes('[AUTH FAIL]')
                            ? 'text-amber-400'
                            : 'text-gray-300'
                        }
                      >
                        {msg}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grade Calculator Simulator */}
              {project.simulationType === 'grade' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-800 space-y-3">
                    <label className="block text-xs font-semibold text-gray-300">
                      Enter Subject Marks (Comma-separated values out of 100):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={gradeInput}
                        onChange={(e) => setGradeInput(e.target.value)}
                        placeholder="e.g. 85, 92, 78, 90, 88"
                        className="flex-1 px-3.5 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-hidden focus:border-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={runGradeCalc}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Compute</span>
                      </button>
                    </div>

                    <div className="flex gap-2 pt-1 text-[11px] text-gray-400">
                      <span>Presets:</span>
                      <button
                        type="button"
                        onClick={() => { setGradeInput('95, 92, 98, 91, 94'); }}
                        className="text-indigo-400 hover:underline cursor-pointer"
                      >
                        Top Scores (A+)
                      </button>
                      <span>·</span>
                      <button
                        type="button"
                        onClick={() => { setGradeInput('72, 78, 75, 71, 74'); }}
                        className="text-indigo-400 hover:underline cursor-pointer"
                      >
                        Good (B)
                      </button>
                      <span>·</span>
                      <button
                        type="button"
                        onClick={() => { setGradeInput('45, 48, 52, 42, 49'); }}
                        className="text-indigo-400 hover:underline cursor-pointer"
                      >
                        Needs Improvement (D)
                      </button>
                    </div>
                  </div>

                  {gradeOutput && (
                    <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-gray-400 text-[11px] uppercase tracking-wider border-b border-gray-800/80 pb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-gray-400" />
                          <span>Academic Assessment Computation</span>
                        </span>
                        <span className="text-gray-400">{gradeOutput.scoresCount} Subjects</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                        <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800">
                          <span className="text-[10px] text-gray-500 block uppercase">Aggregate Total</span>
                          <span className="text-base font-bold text-white">{gradeOutput.total}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800">
                          <span className="text-[10px] text-gray-500 block uppercase">Percentage</span>
                          <span className="text-base font-bold text-cyan-400">{gradeOutput.percentage}%</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800">
                          <span className="text-[10px] text-gray-500 block uppercase">Letter Grade</span>
                          <span className="text-base font-bold text-yellow-400">{gradeOutput.grade}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800">
                          <span className="text-[10px] text-gray-500 block uppercase">Remark</span>
                          <span className="text-xs font-semibold text-emerald-400 truncate block mt-0.5">{gradeOutput.status}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-3.5 rounded-xl bg-gray-950/40 border border-gray-800 text-xs text-gray-400 space-y-1.5">
                    <div className="font-semibold text-gray-200">Algorithmic Highlights:</div>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400">
                      <li>Dynamic list comprehension and casting of comma-separated inputs.</li>
                      <li>Aggregate summing and precision-controlled percentage average calculations.</li>
                      <li>Academic grading boundary matrix handling multiple tier evaluations.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="font-mono">Python 3 Implementation</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 transition-colors text-gray-200 cursor-pointer border border-gray-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Python Code'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-gray-950 text-gray-200 font-mono text-xs leading-relaxed overflow-x-auto border border-gray-800 max-h-96 selection:bg-indigo-900">
                <code>{project.pythonCode}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-950 border-t border-gray-800 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View Source on GitHub ({project.githubUrl.split('github.com/')[1] || 'Repo'})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
};
