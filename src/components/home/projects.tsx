import { projects } from '@/constants';
import ProjectsCard from '@/components/common/projects-card';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-family-bubblegum text-center text-4xl font-semibold">Projects</h1>
        <div className="bg-kawaii-pink h-1 w-20"></div>

        <p className="mt-2 max-w-lg text-center">
          A handful of things I&apos;ve made while figuring stuff out. Some tiny, some bold — all
          built with curiosity.
        </p>
      </div>

      <div className="mx-auto mt-20 grid w-fit grid-cols-1 gap-6 md:grid-cols-2 lg:mx-28 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            status={project.status}
            color={project.color}
          />
        ))}
      </div>
    </section>
  );
}
