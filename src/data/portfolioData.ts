export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  concepts: string[];
  githubUrl: string;
  highlights: string[];
  pythonCode: string;
  defaultInputs?: Record<string, string | number>;
  simulationType: 'voter' | 'atm' | 'grade';
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: 'terminal' | 'cpu' | 'globe' | 'lightbulb';
  skills: {
    name: string;
    focus: string;
    level: string;
    tag?: string;
  }[];
}

export interface JourneyStep {
  step: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
  learnings: string[];
}

export interface EducationDetail {
  degree: string;
  program: string;
  stage: string;
  timeline: string;
  location: string;
  focusHighlights: string[];
  currentSubjects: string[];
  academicApproach: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sagar Kumar Donga',
    displayName: 'D. Sagar Kumar',
    role: 'Aspiring AI Engineer & B.Tech Student',
    semester: '1st Semester, B.Tech',
    headline: 'Aspiring AI Engineer & B.Tech Student',
    bioShort:
      'I am a first-semester B.Tech student exploring Python, web development, Generative AI, and Artificial Intelligence. I believe in learning by building real projects, asking questions, and collaborating in hackathons and ideathons.',
    fullBio:
      'I am currently at the beginning of my formal engineering journey in my first semester of B.Tech. Rather than merely consuming theoretical concepts, I focus on building real console applications, breaking down algorithms, and writing clean, reproducible Python code. My goal is to cultivate deep foundations in computational logic, mathematical intuition, and software architecture to evolve into a proficient AI Engineer.',
    github: 'https://github.com/sagarkumardonga',
    pythonRepo: 'https://github.com/sagarkumardonga/python..',
    previousRepo: 'https://github.com/sagarkumardonga/ai_engineer_',
    email: 'varasagar111@gmail.com',
    location: 'India',
    openTo: [
      'Internship opportunities',
      'Hackathons & Ideathons',
      'Open-source collaborations',
      'Technical mentorship'
    ],
    focusAreas: [
      'Python Programming',
      'Web Development',
      'Generative AI',
      'Artificial Intelligence',
      'Problem Solving',
      'Hackathons & Ideathons'
    ]
  },

  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    program: 'Computer Science & Engineering Foundations',
    stage: '1st Semester (Freshman)',
    timeline: '2024 - Present',
    location: 'India',
    focusHighlights: [
      'Building rigorous algorithmic thinking & discrete logic foundations',
      'Practical software implementation through daily programming drills',
      'Bridging mathematical principles (linear algebra, logic) with intelligent systems',
      'Active team participation in campus ideathons and student technical clubs'
    ],
    currentSubjects: [
      'Programming & Problem Solving in Python',
      'Engineering Mathematics & Discrete Structures',
      'Digital Logic & Computational Basics',
      'Web Technologies & Modern Interfaces'
    ],
    academicApproach:
      'Focusing on foundational depth over superficial familiarity. Emphasizing hands-on syntax drills, algorithm analysis, and modular software construction from day one.'
  } as EducationDetail,

  projects: [
    {
      id: 'voter-eligibility',
      title: 'Voter Eligibility Calculator',
      category: 'Python Logic & Validation',
      shortDescription:
        'A beginner-friendly Python logic project that determines whether an individual is legally eligible to vote based on age, handling edge cases and input validation.',
      concepts: ['Conditional Logic (if/else)', 'Integer Type Casting', 'Input Validation', 'Boundary Testing (Age 18)'],
      githubUrl: 'https://github.com/sagarkumardonga/python..',
      highlights: [
        'Evaluates eligibility using the legal threshold of 18 years.',
        'Calculates the exact remaining years if the user is underage.',
        'Includes guardrails for negative or invalid numerical inputs.'
      ],
      simulationType: 'voter',
      metrics: [
        { label: 'Validation Bounds', value: '0 - 120 Years' },
        { label: 'Edge-Case Guard', value: 'Active' },
        { label: 'Execution', value: 'Zero Latency' }
      ],
      pythonCode: `# Voter Eligibility Calculator in Python
# Created by Sagar Kumar Donga

def check_voting_eligibility(age):
    if age < 0:
        return "Invalid input: Age cannot be negative."
    elif age >= 18:
        return f"Eligible! At {age} years old, you are qualified to vote."
    else:
        years_left = 18 - age
        return f"Not eligible yet. At {age}, you have {years_left} year(s) until you can vote."

# Example execution:
user_age = int(input("Enter your age: "))
result = check_voting_eligibility(user_age)
print(result)`
    },
    {
      id: 'atm-management',
      title: 'ATM Management System',
      category: 'Python Program Structure',
      shortDescription:
        'A console-based Python project simulating essential ATM workflows, state tracking, PIN verification, deposits, withdrawals, and balance inquiries.',
      concepts: ['While Loops', 'State Management', 'Conditional Branching', 'User Transaction Flow', 'Input Guardrails'],
      githubUrl: 'https://github.com/sagarkumardonga/python..',
      highlights: [
        'Simulates PIN authentication flow before transaction access.',
        'Dynamic balance ledger updating across deposits and withdrawals.',
        'Prevents overdrawing beyond available account balance.'
      ],
      simulationType: 'atm',
      metrics: [
        { label: 'Starting Balance', value: '₹5,000.00' },
        { label: 'Security', value: 'PIN-Protected' },
        { label: 'Overdraw Guard', value: 'Enforced' }
      ],
      pythonCode: `# ATM Management System in Python
# Created by Sagar Kumar Donga

class SimpleATM:
    def __init__(self, initial_balance=5000, pin="1234"):
        self.balance = initial_balance
        self.pin = pin
        self.is_authenticated = False

    def authenticate(self, entered_pin):
        if entered_pin == self.pin:
            self.is_authenticated = True
            return "PIN Accepted. Welcome to your account."
        return "Incorrect PIN. Please try again."

    def check_balance(self):
        return f"Current Balance: ₹{self.balance:,.2f}"

    def deposit(self, amount):
        if amount <= 0:
            return "Deposit amount must be greater than zero."
        self.balance += amount
        return f"₹{amount:,.2f} deposited successfully. New Balance: ₹{self.balance:,.2f}"

    def withdraw(self, amount):
        if amount <= 0:
            return "Withdrawal amount must be greater than zero."
        if amount > self.balance:
            return f"Insufficient funds. Maximum available: ₹{self.balance:,.2f}"
        self.balance -= amount
        return f"₹{amount:,.2f} dispensed. Remaining Balance: ₹{self.balance:,.2f}"`
    },
    {
      id: 'student-grade-calculator',
      title: 'Student Grade Calculator',
      category: 'Python Mathematical Logic',
      shortDescription:
        'A structured Python tool that calculates overall percentage, assigns academic letter grades based on defined score ranges, and provides performance remarks.',
      concepts: ['Arithmetic Calculations', 'Multi-grade Thresholds', 'List Aggregation', 'Edge-case Checks'],
      githubUrl: 'https://github.com/sagarkumardonga/python..',
      highlights: [
        'Computes aggregate marks, percentage, and letter grade (A/B/C/D/F).',
        'Validates that each subject score falls between 0 and 100.',
        'Outputs clear feedback and performance indicators for students.'
      ],
      simulationType: 'grade',
      metrics: [
        { label: 'Grading Scale', value: 'A+ down to F' },
        { label: 'List Parsing', value: 'Dynamic N-Subjects' },
        { label: 'Precision', value: '2 Decimal Places' }
      ],
      pythonCode: `# Student Grade Calculator in Python
# Created by Sagar Kumar Donga

def calculate_student_grade(scores):
    if not scores:
        return "No scores provided."
    
    total = sum(scores)
    count = len(scores)
    percentage = total / count

    if percentage >= 90:
        grade = "A+"
        status = "Outstanding Performance"
    elif percentage >= 80:
        grade = "A"
        status = "Excellent Work"
    elif percentage >= 70:
        grade = "B"
        status = "Good Effort"
    elif percentage >= 60:
        grade = "C"
        status = "Satisfactory"
    elif percentage >= 50:
        grade = "D"
        status = "Needs Improvement"
    else:
        grade = "F"
        status = "Did not meet passing criteria"

    return {
        "total": total,
        "percentage": round(percentage, 2),
        "grade": grade,
        "status": status
    }`
    }
  ] as Project[],

  skillCategories: [
    {
      title: 'Programming & Logic',
      description: 'Foundational syntax and algorithmic thinking through regular Python scripting.',
      iconName: 'terminal',
      skills: [
        { name: 'Python', focus: 'Variables, loops, conditionals, functions, basic data structures', level: 'Actively Practicing', tag: 'Core Language' },
        { name: 'Logic Building', focus: 'Decomposing complex problems into step-by-step algorithms', level: 'Core Focus', tag: 'Problem Solving' },
        { name: 'Console Program Design', focus: 'Handling user inputs, terminal menus, and state flow', level: 'Practical Application', tag: 'CLI Applications' }
      ]
    },
    {
      title: 'AI & Emerging Tech',
      description: 'Exploring modern machine intelligence concepts, model behaviors, and workflows.',
      iconName: 'cpu',
      skills: [
        { name: 'Artificial Intelligence', focus: 'Core fundamentals, heuristic search, problem spaces', level: 'Foundational Exploration', tag: 'Theory & Foundations' },
        { name: 'Generative AI', focus: 'Prompt engineering, LLM capabilities, context framing', level: 'Curious Experimentation', tag: 'Modern LLMs' },
        { name: 'AI Engineering Roadmap', focus: 'Studying math foundations, linear algebra, and data pipelines', level: 'Active Learning', tag: 'Long-term Specialization' }
      ]
    },
    {
      title: 'Web & Development Tools',
      description: 'Understanding how modern applications are created, styled, and version-controlled.',
      iconName: 'globe',
      skills: [
        { name: 'Web Development', focus: 'Semantic HTML, responsive CSS layouts, modern interfaces', level: 'Building Fundamentals', tag: 'Frontend Basics' },
        { name: 'Git & GitHub', focus: 'Version tracking, repository management, commit discipline', level: 'Daily Practice', tag: 'Version Control' },
        { name: 'VS Code & CLI', focus: 'Code editing, terminal commands, virtual environments', level: 'Workflow Standard', tag: 'Developer Tooling' }
      ]
    },
    {
      title: 'Engineering Mindset',
      description: 'Collaborative and analytical attributes cultivated through events and projects.',
      iconName: 'lightbulb',
      skills: [
        { name: 'Hackathons & Ideathons', focus: 'Rapid prototyping, peer collaboration, problem pitching', level: 'Active Participant', tag: 'Collaborative Hackers' },
        { name: 'Curiosity & Self-Learning', focus: 'Reading documentation, debugging independently', level: 'Core Habit', tag: 'Self-Directed' },
        { name: 'Code Readability', focus: 'Clean naming, modular structure, beginner-friendly comments', level: 'Continuous Improvement', tag: 'Best Practices' }
      ]
    }
  ] as SkillCategory[],

  hackathonDimensions: [
    {
      title: 'Real-World Problem Scoping',
      description: 'Translating open-ended community or industry prompts into distinct, actionable technical constraints during ideation sprints.',
      iconKey: 'target'
    },
    {
      title: 'Interdisciplinary Collaboration',
      description: 'Teaming up with peers from diverse engineering branches to combine logic, interface design, and domain concepts.',
      iconKey: 'users'
    },
    {
      title: 'Fast-Paced Prototyping',
      description: 'Transforming theoretical ideas into tangible working scripts and proof-of-concept workflows under tight event time limits.',
      iconKey: 'zap'
    },
    {
      title: 'Iterative Problem Solving',
      description: 'Debugging roadblocks collaboratively and adapting solutions quickly when initial assumptions fall short.',
      iconKey: 'sparkles'
    }
  ],

  journeySteps: [
    {
      step: '01',
      title: 'Started with Python',
      status: 'Completed',
      description:
        'Mastered foundational syntax, variable types, conditional branching (if/else), loops, and structured procedural coding.',
      learnings: ['Variables & Type Casting', 'Conditionals & Loops', 'Basic Error Handling', 'Console I/O']
    },
    {
      step: '02',
      title: 'Exploring Web Development',
      status: 'In Progress',
      description:
        'Connecting logic with visual user interfaces, responsive layouts, and modern web application building blocks.',
      learnings: ['Semantic Structure', 'CSS Responsive Design', 'Component Thinking', 'User Experience']
    },
    {
      step: '03',
      title: 'Learning Generative AI',
      status: 'In Progress',
      description:
        'Experimenting with large language models, prompt engineering, agentic concepts, and exploring how AI augments software.',
      learnings: ['Prompt Design', 'API Integration Basics', 'Context Windows', 'AI Ethics & Limits']
    },
    {
      step: '04',
      title: 'Exploring Artificial Intelligence',
      status: 'In Progress',
      description:
        'Studying theoretical principles of intelligence, heuristic algorithms, search trees, and foundational mathematics.',
      learnings: ['Problem Formulation', 'Search Algorithms', 'Math for AI Foundations', 'Data Representation']
    },
    {
      step: '05',
      title: 'Building Projects',
      status: 'In Progress',
      description:
        'Turning conceptual tutorials into functional standalone scripts: Voter Calculator, ATM Management, and Grade Calculator.',
      learnings: ['Code Structuring', 'Testing Boundary Cases', 'GitHub Documentation', 'Refactoring']
    },
    {
      step: '06',
      title: 'Hackathons & Ideathons',
      status: 'In Progress',
      description:
        'Participating in collegiate hackathons and ideathons to test problem-solving, exchange ideas with peers, and build under pressure.',
      learnings: ['Idea Pitching', 'Team Synergy', 'Sprint Time Management', 'Rapid Prototyping']
    },
    {
      step: '07',
      title: 'Working Toward Becoming an AI Engineer',
      status: 'Upcoming',
      description:
        'Advancing into data structures, deep learning, PyTorch/TensorFlow, and building intelligent production-grade systems.',
      learnings: ['Data Structures & Algorithms', 'Machine Learning Libraries', 'Model Training', 'System Architecture']
    }
  ] as JourneyStep[]
};
