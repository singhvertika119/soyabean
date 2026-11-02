export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLink?: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Part-time' | 'Freelance';
  startDate: string;
  endDate: string; // use 'Present' if ongoing
  summary: string;
  highlights: string[];
  technologies: string[];
}

// TODO: Replace the placeholder values below with your internship details.
// Add more objects to this array for additional roles (most recent first).
export const experiences: Experience[] = [
  {
    id: '1',
    role: 'AI Engineer Intern',
    company: 'Schoollog- LB Microtechnologies Pvt. Ltd.',
    companyLink: '',
    location: 'Remote',
    type: 'Internship',
    startDate: 'July 23, 2026',
    endDate: 'October 23, 2026',
    summary: 'Built a multi-tenant voice-agent platform that answers phone calls in Hindi, English and Hinglish running at about $0.0065 per call-minute for speech, AI and voice',
    highlights: [
      'Architected a multi-agent voice calling platform on LiveKit, enabling teams to spin up multiple calling agents, each grounded in its own knowledge base built from text, documents, and URLs',
      'Halved the AI prompt from about 4,200 to about 2,000 tokens by searching the knowledge base per question, which cut reply time from 2.1 s to 1.8 s in a simulated call',
      'Benchmarked STT and TTS models on the basis of latency, cost, and accuracy to identify the best model for the platform',
    ],
    technologies: ['Python', 'Next.js', 'LiveKit', 'PostgreSQL', 'Supabase', 'Sarvam AI'],
  },
];
