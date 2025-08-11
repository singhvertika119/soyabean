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
    title: 'Weebly',
    description: 'RESTful blog API with authentication, validation, and database integration.',
    technologies: ['Node.js', 'Express', 'Mongoose'],
    githubLink: 'https://github.com/singhvertika119/Weebly',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-pink',
  },
  {
    id: '2',
    title: 'Bebo',
    description: 'A cute, chatty discord bot with personality and a whole lot of charm.',
    technologies: ['JavaScript', 'Node.js', 'Discord.js'],
    githubLink: 'https://github.com/singhvertika119/Discord-bot',
    status: 'completed',
    color: 'kawaii-blue',
  },
  {
    id: '3',
    title: 'Customer Churn Prediction',
    description: 'A machine learning model that predicts customer churn using logistic regression.',
    technologies: ['Python', 'pandas', 'XGBoost', 'SMOTE', 'SHAP'],
    githubLink: 'https://github.com/singhvertika119/Customer-Churn-Prediction',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-mint',
  },
  {
    id: '4',
    title: 'ML-Driven Movie Recommendation Engine',
    description: 'A machine learning model that recommends movies based on user preferences.',
    technologies: ['Python', 'pandas', 'NLTK', 'Pickle', 'TMDB API'],
    githubLink: 'https://github.com/singhvertika119/Movie-Recommendation-Engine',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-lavender',
  },
  {
    id: '5',
    title: 'Tickr',
    description: 'A health tool that predicts heart disease risk using machine learning.',
    technologies: ['Python', 'pandas', 'matplotlib'],
    githubLink: 'https://github.com/singhvertika119/Heart-Disease-Predictor',
    liveLink: '',
    status: 'completed',
    color: 'kawaii-pink',
  },
];
