import { cn } from '@/lib/utils';
import { GithubIcon, ExternalLink, Sparkles, Code2, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

interface ProjectsCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  status: 'completed' | 'in-progress' | 'on-hold';
  color: string;
}

export default function ProjectsCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  status,
}: ProjectsCardProps) {
  // Map project status to clean styles
  const statusStyles = {
    'completed': 'bg-pink-500/10 text-pink-500 border-pink-200/20 dark:bg-pink-400/10 dark:text-pink-300 dark:border-pink-300/10',
    'in-progress': 'bg-yellow-500/10 text-yellow-600 border-yellow-200/20 dark:bg-yellow-400/10 dark:text-yellow-300 dark:border-yellow-300/10',
    'on-hold': 'bg-neutral-500/10 text-neutral-500 border-neutral-200/20 dark:bg-neutral-400/10 dark:text-neutral-400 dark:border-neutral-800',
  };

  // Dynamically assign project type icons based on key indicators
  const isML =
    title.toLowerCase().includes('recommendation') ||
    title.toLowerCase().includes('churn') ||
    title.toLowerCase().includes('predictor') ||
    title.toLowerCase().includes('heart');

  const ProjectIcon = isML ? BrainCircuit : Code2;

  return (
    <div className="group relative flex flex-col justify-between min-h-[300px] w-full max-w-md rounded-2xl border border-pink-200/20 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 dark:border-neutral-800/80 dark:bg-[#161616]">
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/5 text-pink-500 dark:bg-pink-400/5 dark:text-pink-300">
            <ProjectIcon className="size-5" />
          </div>
          <span
            className={cn(
              'text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border',
              statusStyles[status],
            )}
          >
            {status}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-family-bubblegum text-lg font-bold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-pink-500 dark:group-hover:text-pink-300 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-neutral-100 dark:bg-neutral-800/80 px-2.5 py-1 text-[10px] font-semibold text-neutral-600 dark:text-neutral-300 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Footer Links */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
          <Link
            href={githubLink}
            className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="size-4" />
            Source Code
          </Link>

          {liveLink ? (
            <Link
              href={liveLink}
              className="flex items-center gap-1 text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <ExternalLink className="size-3.5" />
            </Link>
          ) : (
            <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
              <Sparkles className="size-3 text-pink-400/70" />
              Local Model
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

