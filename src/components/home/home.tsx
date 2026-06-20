import Link from 'next/link';
import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { KawaiiLeaf } from '../../../public/icons/kawaii-leaf';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="mt-10 grid min-h-[80vh] grid-cols-1 items-center justify-center gap-12 sm:mt-0 sm:min-h-[91vh] lg:grid-cols-2 lg:gap-8"
    >
      <div className="max-w-lg space-y-6">
        <h2 className="border-pink-300/30 bg-pink-500/10 text-pink-500 dark:border-pink-400/20 dark:bg-pink-400/10 dark:text-pink-300 border w-fit rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
          AI/ML Engineer & Full Stack Developer
        </h2>
        <h1 className="font-family-bubblegum text-center text-5xl font-bold sm:text-left sm:text-6xl leading-tight text-neutral-800 dark:text-neutral-100">
          Hi, I&apos;m <br />
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 dark:from-pink-300 dark:to-pink-400 bg-clip-text text-5xl sm:text-6xl text-transparent font-extrabold">
            Vertika
          </span>
        </h1>
        <p className="text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-300 sm:text-left leading-relaxed">
          I build intelligent systems that work in real world -- not just notebooks. I enjoy building interactive and user-friendly web applications that leave an impact.
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          {['Python', 'FastAPI', 'GenAI', 'Node.js', 'Deep Learning'].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-pink-200/40 bg-pink-500/5 dark:border-pink-300/20 dark:bg-pink-300/5 px-3 py-1 text-xs font-semibold text-pink-500 dark:text-pink-300 tracking-wider shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-row justify-center gap-4 sm:justify-start">
          <Link href="#projects">
            <Button className="cursor-pointer bg-pink-400 hover:bg-pink-500 dark:bg-pink-300 dark:text-neutral-900 dark:hover:bg-pink-200 px-6 py-5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              See My Work
              <KawaiiHeart fillColor="currentColor" className="w-4 h-4 text-white dark:text-neutral-900" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="cursor-pointer border-2 border-pink-300/40 hover:border-pink-400 dark:border-neutral-800 dark:hover:border-neutral-700 bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-pink-50/50 dark:hover:bg-neutral-900/50 px-6 py-5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Contact Me
              <KawaiiLeaf className="w-4 h-4 text-pink-400 dark:text-pink-300" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Interactive Developer Terminal */}
      <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
        <div className="border-pink-200/30 dark:border-neutral-800/80 shadow-[0_0_30px_rgba(255,183,197,0.12)] dark:shadow-[0_0_40px_rgba(255,183,197,0.06)] relative rounded-2xl border bg-neutral-950 p-1 font-mono text-sm shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
            {/* macOS Buttons */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            {/* Terminal Title */}
            <span className="text-xs text-neutral-500">vertika-profile.json</span>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Terminal Body */}
          <div className="p-5 text-neutral-300 space-y-4">
            <div className="flex gap-2">
              <span className="text-pink-400">~/vertika-singh</span>
              <span className="text-neutral-500">$</span>
              <span className="text-neutral-200">AI developer.json</span>
            </div>
            <pre className="overflow-x-auto whitespace-pre pl-2 leading-relaxed text-[11px] sm:text-xs text-neutral-400">
              <code>
                {`{`}
                {`\n  `}
                <span className="text-pink-400">&quot;name&quot;</span>: <span className="text-neutral-200">&quot;Vertika Singh&quot;</span>,
                {`\n  `}
                <span className="text-pink-400">&quot;role&quot;</span>: <span className="text-neutral-200">&quot;AI Engineer & Full Stack Developer&quot;</span>,
                {`\n  `}
                <span className="text-pink-400">&quot;skills&quot;</span>: [
                {`\n    `}
                <span className="text-neutral-200">&quot;Pyhton&quot;</span>, <span className="text-neutral-200">&quot;Node.js&quot;</span>, <span className="text-neutral-200">&quot;GenAI&quot;</span>,
                {`\n    `}
                <span className="text-neutral-200">&quot;FastAPI&quot;</span>, <span className="text-neutral-200">&quot;Deep Learning&quot;</span>
                {`\n  `}],
                {`\n  `}
                <span className="text-pink-400">&quot;passion&quot;</span>: <span className="text-neutral-200">&quot;Building intelligent systems.&quot;</span>,
                {`\n  `}
                <span className="text-pink-400">&quot;traits&quot;</span>: [
                <span className="text-neutral-200">&quot;Curious&quot;</span>, <span className="text-neutral-200">&quot;Detail-Oriented&quot;</span>, <span className="text-neutral-200">&quot;Cute&quot;</span>]
                {`\n}`}
              </code>
            </pre>
            <div className="flex items-center gap-2">
              <span className="text-pink-400">~/vertika-singh</span>
              <span className="text-neutral-500">$</span>
              <span className="h-4 w-2 animate-pulse bg-pink-400 dark:bg-pink-300" />
            </div>
          </div>
        </div>

        {/* Decorative Sparkle Stars matching portfolio theme */}
        <StarIcon
          className="animate-sparkle absolute -top-3 -right-3 text-yellow-300/80 dark:text-yellow-400/80 size-5"
          fill="currentColor"
        />
        <StarIcon
          className="animate-sparkle absolute -bottom-3 -left-3 text-yellow-300/80 dark:text-yellow-400/80 size-5"
          fill="currentColor"
        />
      </div>
    </section>
  );
}
