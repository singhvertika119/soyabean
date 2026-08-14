interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  status: 'completed' | 'in-progress' | 'on-hold';
  color: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'ORBIT - Multi-Agent Freelance Work Command Center',
    description: 'A multi-agent AI crews (Llama 3.3 via Groq) to automate contract analysis, client scoping, invoice billing, and payment tracking.',
    technologies: ['CrewAI', 'React', 'Next.js', 'PostgreSQL', 'FastAPI'],
    githubLink: 'https://github.com/singhvertika119/The-Orbit',
    liveLink: 'https://orbit.vertika.in/',
    status: 'completed',
    color: 'kawaii-pink',
  },
  {
    id: '2',
    title: 'FemmeCare - Women Health Care Platform',
    description: 'A MERN-stack telehealth platform connecting patients with gynecologists with integrated AI Assistant.',
    technologies: ['Node.js', 'Express.js', 'Vite', 'React', 'MongoDB', 'REST APIs', 'Jitsi Meet', 'WebRTC'],
    githubLink: 'https://github.com/singhvertika119/FemmeCare',
    liveLink: 'https://femme-care.vercel.app/',
    status: 'completed',
    color: 'kawaii-blue',
  },
  {
    id: '3',
    title: 'KOKO - Offline AI Agent',
    description: 'A 100% local, privacy-first AI assistant capable of multimodal vision, live system monitoring, and Text-to-SQL database querying. Built with Streamlit, Ollama, and defensive Python engineering.',
    technologies: ['Python', 'Pydantic', 'Ollama', 'Llama 3.2', 'Moondream', 'SQLite'],
    githubLink: 'https://github.com/singhvertika119/SLM',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-mint',
  },
  {
    id: '4',
    title: 'Entropy AI - DevOps Log Analyzer',
    description: 'An AI-assisted log monitoring stack that watches application logs, detects errors in real time, retrieves matching DevOps runbooks, and generates structured Root Cause Analysis (RCA) reports using a Groq-hosted LLM.',
    technologies: ['Python', 'FastAPI', 'Groq API', 'LangChain', 'Docker'],
    githubLink: 'https://github.com/singhvertika119/Entropy-AI',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-lavender',
  },
];
