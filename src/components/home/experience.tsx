import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';
import { experiences } from '@/constants';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-family-bubblegum flex items-center gap-2 text-center text-4xl font-bold tracking-wide text-neutral-800 dark:text-neutral-100">
          <Briefcase className="text-pink-400 dark:text-pink-300" />
          Experience
        </h2>
        <div className="h-1.5 w-20 rounded-full bg-pink-400 dark:bg-pink-300"></div>
      </div>

      {/* Timeline */}
      <ol className="relative mx-auto mt-16 max-w-3xl space-y-10 border-l-2 border-pink-200/50 pl-6 sm:pl-10 dark:border-neutral-800">
        {experiences.map((exp) => (
          <li key={exp.id} className="relative">
            {/* Timeline dot */}
            <span className="absolute top-6 -left-[33px] h-4 w-4 rounded-full border-4 border-background bg-pink-400 sm:-left-[49px] dark:bg-pink-300" />

            <div className="group rounded-2xl border border-pink-200/20 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8 dark:border-neutral-800/80 dark:bg-[#161616]">
              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-family-bubblegum text-xl font-bold text-neutral-800 transition-colors group-hover:text-pink-500 dark:text-neutral-100 dark:group-hover:text-pink-300">
                    {exp.role}
                  </h3>
                  {exp.companyLink ? (
                    <Link
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-pink-500 hover:underline dark:text-pink-300"
                    >
                      {exp.company}
                      <ExternalLink className="size-3.5" />
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-pink-500 dark:text-pink-300">
                      {exp.company}
                    </p>
                  )}
                </div>
                <span className="w-fit rounded-full border border-pink-200/20 bg-pink-500/10 px-2.5 py-1 text-[10px] font-bold tracking-widest text-pink-500 uppercase dark:border-pink-300/10 dark:bg-pink-400/10 dark:text-pink-300">
                  {exp.type}
                </span>
              </div>

              {/* Meta */}
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {exp.startDate} – {exp.endDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {exp.location}
                </span>
              </div>

              {/* Summary & highlights */}
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-300">
                {exp.summary}
              </p>
              {exp.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400 dark:bg-pink-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tags */}
              {exp.technologies.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4 dark:border-neutral-800/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
