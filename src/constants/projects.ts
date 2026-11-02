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
    title: 'Mango - AI Native Developer Workspace',
    description: 'A workspace that an AI agent can natively understand, ground context from, and operate through controlled tool execution.',
    technologies: ['Next.js', 'Typescript', 'Tailwind CSS', 'React', 'PostgreSQL', 'Supabase', 'MCP', 'Groq API'],
    githubLink: 'https://github.com/singhvertika119/mango',
    liveLink: 'https://mango.vertika.in/',
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
    title: 'FaceScan - Offline Attendance Application',
    description: 'An enterprise-grade, offline-first biometric attendance management application built with Flutter and TensorFlow Lite. The system provides real-time, on-device facial recognition, multi-layered presentation attack detection (anti-spoofing PAD), and dual-factor geofencing to prevent proxy attendance.',
    technologies: ['Python', 'Dart', 'Flutter', 'TensorFlow Lite', 'InsightFace Buffalo SC', 'MiniFasNet', 'Google ML Kit'],
    githubLink: 'https://github.com/singhvertika119/biometric-attendance',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-lavender',
  },
];
