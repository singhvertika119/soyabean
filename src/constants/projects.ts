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
    title: 'GhibliClimate',
    description:
      'A web application that allows users to search for movies and TV shows from the Studio Ghibli collection.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubLink: 'https://github.com/your-username/ghibli-climate',
    liveLink: 'https://ghibli-climate.vercel.app',
    status: 'completed',
    color: 'kawaii-pink',
  },
  {
    id: '2',
    title: 'TaskMaster Pro',
    description:
      'A comprehensive task management application with real-time collaboration features and progress tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com/your-username/taskmaster-pro',
    liveLink: 'https://taskmaster-pro.vercel.app',
    status: 'in-progress',
    color: 'kawaii-mint',
  },
  {
    id: '3',
    title: 'WeatherWise',
    description:
      'A beautiful weather dashboard that provides detailed forecasts with interactive maps and location-based alerts.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
    githubLink: 'https://github.com/your-username/weatherwise',
    status: 'completed',
    color: 'kawaii-lavender',
  },
  {
    id: '4',
    title: 'RecipeHub',
    description:
      'A social recipe sharing platform where users can discover, create, and share their favorite recipes with the community.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
    githubLink: 'https://github.com/your-username/recipehub',
    status: 'on-hold',
    color: 'kawaii-blue',
  },
];
