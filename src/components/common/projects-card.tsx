import { cn, randomColorGenerator } from '@/lib/utils';
import { GithubIcon, Heart } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectsCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  status: 'completed' | 'in-progress' | 'on-hold';
  color: string;
}

// Color mapping object
const colorClasses = {
  'kawaii-pink': {
    bg: 'bg-kawaii-pink',
    text: 'text-kawaii-pink',
  },
  'kawaii-mint': {
    bg: 'bg-kawaii-mint',
    text: 'text-kawaii-mint',
  },
  'kawaii-lavender': {
    bg: 'bg-kawaii-lavender',
    text: 'text-kawaii-lavender',
  },
  'kawaii-blue': {
    bg: 'bg-kawaii-blue',
    text: 'text-kawaii-blue',
  },
};

export default function ProjectsCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  status,
  color,
}: ProjectsCardProps) {
  const colorClass =
    colorClasses[color as keyof typeof colorClasses] || colorClasses['kawaii-pink'];

  return (
    <div className="border-kawaii-pink group max-w-md rounded-3xl border-3 p-6 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
      <div
        className={cn(
          colorClass.bg,
          'relative mb-6 flex h-96 w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl p-6 text-center',
        )}
      >
        <div className="mb-4 grid size-16 place-items-center rounded-full bg-white">
          <Heart className={colorClass.text} />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>

        <div className="group-hover:backdrop-blur-l absolute grid h-full w-full place-items-center gap-2 bg-neutral-900/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex translate-y-10 flex-col gap-2 transition-all duration-300 group-hover:translate-y-0">
            <Link
              href={githubLink}
              className="mx-auto flex w-fit items-center gap-1 rounded-full bg-white px-6 py-2"
            >
              <GithubIcon className="size-4 text-neutral-700 hover:text-neutral-900" fill="black" />
              View on GitHub
            </Link>
            {liveLink && (
              <Link href={liveLink} className="mx-auto w-fit rounded-full bg-white px-6 py-2">
                View Live
              </Link>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-neutral-500">
          {status === 'completed'
            ? 'Completed Project'
            : status === 'in-progress'
              ? 'Currently Working On'
              : 'On Hold'}
        </p>
        <div className="flex items-center justify-between">
          <h2 className="mt-1 mb-2 text-lg font-semibold">{title}</h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={githubLink}>
                <GithubIcon className="size-4 text-neutral-700 hover:text-neutral-900" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-1 text-xs">
          {technologies.map((technology) => (
            <span key={technology} className={`rounded-full px-2 py-1 text-nowrap ${randomColorGenerator()}`}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
