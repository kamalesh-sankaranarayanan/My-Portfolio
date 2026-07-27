import {
  Award,
  BadgeCheck,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Droplets,
  Globe2,
  Laptop,
  Network,
  Server,
  Sparkles,
  TerminalSquare,
  Trophy,
  Wind,
  Zap
} from 'lucide-react';

export const profile = {
  name: 'Kamalesh Sankaranarayanan',
  title: 'Backend Software Engineer in progress',
  tagline:
    'Final-year CSE student at PSG iTech building backend-first products across AI workflows, cloud dashboards, IoT systems, and practical database-backed applications.',
  email: 'sankarkamalesh05@gmail.com',
  phone: '8072054044',
  github: 'https://github.com/kamalesh-sankaranarayanan',
  linkedin: 'https://www.linkedin.com/in/kamalesh-s-22330428b/',
  leetcode: 'https://leetcode.com/u/JePcaCbI3d/',
  resume: '/resume.pdf',
  githubUser: 'kamalesh-sankaranarayanan'
};

export const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Proof', 'GitHub', 'Contact'];

export const heroStats = [
  { label: 'CGPA', value: '8.61' },
  { label: 'LeetCode', value: '227+' },
  { label: 'Offer', value: 'DSE' },
  { label: 'Repos', value: '9' }
];

export const skills = [
  { group: 'Languages', icon: Code2, level: 82, items: ['C', 'C++', 'Python', 'JavaScript'] },
  { group: 'Backend', icon: Server, level: 78, items: ['Flask', 'REST APIs', 'Authentication', 'Dashboards'] },
  { group: 'AI Systems', icon: Brain, level: 75, items: ['LangGraph', 'Whisper', 'Hugging Face', 'OpenRouter', 'Prompt Engineering', 'LLMs'] },
  { group: 'Databases', icon: Database, level: 72, items: ['MySQL', 'SQLite', 'Schema Design', 'Query Debugging'] },
  { group: 'Cloud & Tools', icon: Cloud, level: 70, items: ['OCI', 'Firebase', 'Render', 'Git', 'GitHub', 'VS Code'] },
  { group: 'Learning Track', icon: Network, level: 68, items: ['Advanced Graphs', 'Dynamic Programming', 'System Design', 'Distributed Systems'] }
];

export const experiences = [
  {
    role: 'AI Intern',
    company: 'RND Optimisers',
    period: 'June 2026',
    type: 'Internship',
    summary:
      'Designed an AI Meeting-to-Execution Agent that converts meeting audio into transcripts, summaries, owner-assigned tasks, deadlines, priorities, dashboards, and reminders.',
    impact: ['Built Flask + LangGraph workflow orchestration', 'Integrated Whisper transcription and OpenRouter LLM extraction', 'Persisted meetings/tasks in SQLite', 'Improved the product from transcription to execution tracking']
  },
  {
    role: 'Python Developer Intern',
    company: 'Gustovalley Technovations',
    period: 'Internship',
    type: 'Software',
    summary: 'Worked on Python-based development tasks, debugging, implementation, and software problem-solving workflows.',
    impact: ['Strengthened Python fundamentals', 'Practiced real-world debugging', 'Improved code readability and maintenance habits']
  },
  {
    role: 'Data Science Intern',
    company: 'Elewayte',
    period: 'Internship',
    type: 'Data',
    summary: 'Performed data analysis, visualization, and basic machine learning model implementation on real datasets.',
    impact: ['Explored preprocessing workflows', 'Built visual insights from datasets', 'Implemented beginner-friendly ML pipelines']
  }
];

export const projects = [
  {
    title: 'AI Meeting-to-Execution Agent',
    category: 'Flagship AI Backend',
    icon: Brain,
    live: 'https://ai-meeting-task-dashboard.onrender.com/',
    github: 'https://github.com/kamalesh-sankaranarayanan/AI-Meeting-Analyser',
    status: 'Live',
    oneLiner: 'Turns meeting audio into execution-ready tasks, deadlines, priorities, and reminder workflows.',
    description:
      'A full-stack AI workflow system built during internship to convert unstructured meeting audio into structured execution data. The project shows backend thinking, AI orchestration, database persistence, and dashboard delivery.',
    tech: ['Flask', 'LangGraph', 'Whisper', 'OpenRouter', 'SQLite', 'LLMs'],
    architecture: ['Audio upload', 'Whisper transcription', 'LangGraph agents', 'LLM extraction', 'SQLite storage', 'Task dashboard', 'Email reminders'],
    features: ['Transcription', 'Speaker analysis', 'Task extraction', 'Deadline detection', 'Priority detection', 'Progress tracking'],
    challenges: ['Long audio handling', 'Structured JSON reliability', 'Task deduplication', 'Clean dashboard state'],
    roadmap: ['Google Drive watcher', 'Calendar sync', 'Vector search', 'Role-based task ownership']
  },
  {
    title: 'MindCare AI - Depression Screening System',
    category: 'Healthcare Web App',
    icon: Sparkles,
    live: 'https://mindcare-ai-app.onrender.com',
    github: 'https://github.com/kamalesh-sankaranarayanan/mindcare-ai-app',
    status: 'Live',
    oneLiner: 'A mental wellness screening app with risk classification and personalized recommendations.',
    description:
      'A Flask-based screening platform that evaluates users through a structured questionnaire and classifies risk into mild, moderate, or high categories with supportive wellness recommendations.',
    tech: ['Flask', 'Python', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    architecture: ['Questionnaire', 'Scoring engine', 'Risk classifier', 'Recommendation layer', 'Responsive UI'],
    features: ['16-question assessment', 'Risk level classification', 'Wellness recommendations', 'Responsive interface'],
    challenges: ['Responsible wording', 'Simple UX', 'Score mapping', 'Supportive result page'],
    roadmap: ['User history', 'Admin analytics', 'Multilingual flow', 'Better recommendations']
  },
  {
    title: 'Air Quality Index Prediction Dashboard',
    category: 'ML Dashboard',
    icon: Wind,
    live: 'https://aqi-projectgit-9ghjkltbuhvamxcz4savga.streamlit.app/',
    github: 'https://github.com/kamalesh-sankaranarayanan/Air-Quality-Index-Prediction',
    status: 'Live',
    oneLiner: 'Streamlit dashboard for AQI insight, prediction flow, and pollution-level interpretation.',
    description:
      'An air-quality project focused on environmental data interpretation, prediction-oriented workflows, and clear dashboard presentation for AQI analysis.',
    tech: ['Python', 'Streamlit', 'Machine Learning', 'Data Visualization'],
    architecture: ['Environmental inputs', 'Preprocessing', 'Prediction logic', 'AQI interpretation', 'Streamlit dashboard'],
    features: ['AQI visualization', 'Prediction workflow', 'Interactive dashboard', 'Pollution interpretation'],
    challenges: ['Feature interpretation', 'Clean layout', 'Result communication'],
    roadmap: ['Realtime feed', 'Location trends', 'Alert notifications', 'Model comparison']
  },
  {
    title: 'AquaSentinel - IoT Water Quality Monitoring',
    category: 'IoT + Firebase',
    icon: Droplets,
    live: 'https://watermonitoring-36dcf.web.app',
    github: 'https://github.com/kamalesh-sankaranarayanan/IoT-based-Water-Monitoring',
    status: 'Live',
    oneLiner: 'Realtime water-quality dashboard using sensors, Firebase, alerts, and multi-parameter monitoring.',
    description:
      'A smart IoT system that monitors water quality parameters including pH, turbidity, temperature, and TDS through hardware sensors and a Firebase-backed dashboard.',
    tech: ['Arduino', 'ESP32', 'LoRa', 'Firebase', 'Sensors', 'Dashboard'],
    architecture: ['Sensors', 'Microcontroller', 'Firebase RTDB', 'Web dashboard', 'Alert cards'],
    features: ['pH monitoring', 'Turbidity tracking', 'Temperature reading', 'TDS monitoring', 'Realtime alerts'],
    challenges: ['Sensor calibration', 'Realtime sync', 'Alert clarity', 'Hardware-dashboard integration'],
    roadmap: ['ML quality prediction', 'SMS alerts', 'Historical analytics', 'Multi-location tracking']
  },
  {
    title: 'Laptop Safety & User Health Monitoring',
    category: 'Embedded + Computer Vision',
    icon: Laptop,
    live: '',
    github: 'https://github.com/kamalesh-sankaranarayanan/Laptop-safety-and-Health-assistant',
    status: 'Repo',
    oneLiner: 'Desktop safety assistant for temperature, light, presence detection, and screen-usage alerts.',
    description:
      'A hardware/software system that monitors laptop temperature, lighting conditions, user presence, and long screen usage to improve safe and healthy laptop usage.',
    tech: ['Python', 'Arduino', 'OpenCV', 'Serial', 'Sensors', 'Tkinter'],
    architecture: ['Sensor readings', 'Camera presence detection', 'Python rule engine', 'Desktop alerts', 'Monitoring UI'],
    features: ['Temperature monitoring', 'Light detection', 'Presence detection', 'Screen alerts'],
    challenges: ['Reliable detection', 'Alert cooldowns', 'Serial stability', 'Compact UI'],
    roadmap: ['System tray mode', 'Usage analytics', 'Mobile notifications', 'Smarter thresholds']
  },
  {
    title: 'LLM Guided Code Optimization Tool',
    category: 'AI Developer Tool',
    icon: TerminalSquare,
    live: '',
    github: 'https://github.com/kamalesh-sankaranarayanan?tab=repositories',
    status: 'Concept',
    oneLiner: 'LLM-assisted refactoring assistant for C programs with optimization suggestions and explanations.',
    description:
      'A developer productivity tool concept that analyzes C code, suggests refactoring opportunities, explains complexity improvements, and helps reduce debugging effort.',
    tech: ['Python', 'C', 'LLMs', 'Prompt Engineering'],
    architecture: ['Code input', 'Prompt analysis', 'Optimization suggestions', 'Refactored output', 'Explanation layer'],
    features: ['C code analysis', 'Refactoring guidance', 'Optimization suggestions', 'Readable explanations'],
    challenges: ['Logic preservation', 'Unsafe transformation avoidance', 'Useful explanations'],
    roadmap: ['Compiler feedback', 'Unit-test generation', 'IDE extension', 'Multi-language support']
  }
];

export const achievements = [
  { title: 'HackWithInfy Interview Round Qualified', icon: Trophy },
  { title: 'Infosys Digital Specialist Engineer Offer - 6.25 LPA', icon: Zap },
  { title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', icon: Cpu },
  { title: 'ITech Ideathon 2026 Finalist', icon: Trophy },
  { title: 'AI Internship - RND Optimisers', icon: Brain },
  { title: 'NSS Volunteer - community service and awareness programs', icon: Globe2 }
];

export const certificates = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    category: 'Cloud',
    icon: Cloud,
    credential: 'Foundations Associate',
    link: '/certificates/Oracle%20certification.pdf'
  },
  {
    title: 'Python Developer Internship Certificate',
    issuer: 'Gustovalley Technovations',
    date: '2025',
    category: 'Software',
    icon: Code2,
    credential: 'Internship certificate',
    link: '/certificates/kamalesh%20gustovalley%20certificate.jpg'
  },
  {
    title: 'Data Science Internship Certificate',
    issuer: 'Elewayte',
    date: '2026',
    category: 'Data',
    icon: BadgeCheck,
    credential: 'Internship certificate',
    link: '/certificates/Elewayte-Intern.pdf'
  },
  {
    title: 'Design and Analysis of Algorithms',
    issuer: 'Course Certificate',
    date: '2026',
    category: 'Computer Science',
    icon: Award,
    credential: 'Algorithm fundamentals',
    link: '/certificates/Design%20and%20Analysis%20of%20Algorithms%20(1).pdf'
  },
  {
    title: 'Machine Learning A-Z',
    issuer: 'Udemy',
    date: '2026',
    category: 'Machine Learning',
    icon: Brain,
    credential: 'ML course certificate',
    link: '/certificates/Udemy-ML(A-Z)%20%20certificate.jpeg'
  },
  {
    title: 'Wadhwani Ignition Program',
    issuer: 'Wadhwani Foundation',
    date: '2026',
    category: 'Entrepreneurship',
    icon: Sparkles,
    credential: 'Ignition program certificate',
    link: '/certificates/wadhwani-ignition%20program.pdf'
  },
  {
    title: 'Arduino Certificate',
    issuer: 'JRM Technologies',
    date: '2025',
    category: 'Embedded Systems',
    icon: Cpu,
    credential: 'Arduino training certificate',
    link: '/certificates/JRM%20Technologies-Arduino%20certificate.jpg'
  }
];

export const companies = ['Arm', 'Cisco', 'Qualcomm', 'NVIDIA', 'Amazon', 'Netflix', 'Hotstar', 'Microsoft', 'Atlassian', 'Google', 'SAP', 'Oracle', 'Flipkart', 'Walmart Global Tech'];
