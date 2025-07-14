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
    title: 'Tickr',
    description: 'A health tool that predicts heart disease risk using machine learning.',
    technologies: ['Python', 'scikit-learn', 'pandas', 'matplotlib'],
    githubLink: 'https://github.com/singhvertika119/Heart-Disease-Predictor',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-pink',
  },
  {
    id: '2',
    title: 'Weebly',
    description: 'RESTful blog API with authentication, validation, and database integration.',
    technologies: ['Node.js', 'Express', 'Mongoose'],
    githubLink: 'https://github.com/singhvertika119/Weebly',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-mint',
  },
  {
    id: '3',
    title: 'Bebo',
    description: 'A cute, chatty discord bot with personality and a whole lot of charm.',
    technologies: ['JavaScript', 'Node.js', 'Discord.js'],
    githubLink: 'https://github.com/singhvertika119/Discord-bot',
    status: 'completed',
    color: 'kawaii-lavender',
  },
];
