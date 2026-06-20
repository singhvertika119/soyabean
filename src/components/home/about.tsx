import { Code2, Brain, Terminal, Wrench, GraduationCap, User } from 'lucide-react';
import Wrapper from '../common/Wrapper';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 border-t border-pink-200/10 bg-[#fafafa] dark:bg-[#0f0f0f] transition-colors duration-300"
    >
      <Wrapper>
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="font-family-bubblegum text-center text-4xl font-bold tracking-wide text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
            <User className="text-pink-400 dark:text-pink-300" />
            About Me
          </h2>
          <div className="bg-pink-400 dark:bg-pink-300 h-1.5 w-20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Who I Am & Education */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-[#161616] border border-pink-200/20 dark:border-neutral-800/80 rounded-2xl p-6 shadow-xs">
              <h3 className="font-family-bubblegum text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                <Code2 className="text-pink-400 dark:text-pink-300 size-5" />
                Who I Am
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                I&apos;m Vertika Singh — a computer science student with a passion for building clean,
                purposeful, and thoughtfully designed technology. I find joy in unraveling the logic
                behind algorithms and fine-tuning intelligent systems to work smarter and smoother.
              </p>
            </div>

            <div className="bg-white dark:bg-[#161616] border border-pink-200/20 dark:border-neutral-800/80 rounded-2xl p-6 shadow-xs">
              <h3 className="font-family-bubblegum text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                <GraduationCap className="text-pink-400 dark:text-pink-300 size-5" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                    B.Tech in Computer Science & Engineering from JSS, Noida
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    Final Year Student
                  </p>
                </div>
                <div className="border-t border-neutral-100 dark:border-neutral-800 pt-3">
                  <h4 className="font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                    Core Fundamentals
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    Strong foundation in Data Structures and Algorithms (DSA) in Java/C++, SQL, DBMS, Operating Systems, OOPs and Computer Networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Skills */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-[#161616] border border-pink-200/20 dark:border-neutral-800/80 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="font-family-bubblegum text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                <Brain className="text-pink-400 dark:text-pink-300 size-6" />
                Technical Skills
              </h3>

              <div className="space-y-6">
                {/* AI & ML Category */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-pink-500 dark:text-pink-400">
                    AI & Machine Learning
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Deep Learning', 'Generative AI', 'Computer Vision', 'NLP', 'Neural Networks', 'LLMs', 'Prompt Engineering', "Vector Databases", 'ChromaDB', 'RAG', "LangChain", "AI Agents"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-pink-200/30 bg-pink-500/5 dark:border-pink-300/10 dark:bg-pink-300/5 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:border-pink-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend Category */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-pink-500 dark:text-pink-400 flex items-center gap-1.5">
                    <Terminal className="size-4" />
                    Backend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['FastAPI', 'Node.js', 'Express', 'React', 'REST APIs', 'JWT Authentication', 'JavaScript', 'MONGODB', 'Webhooks'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-pink-200/30 bg-pink-500/5 dark:border-pink-300/10 dark:bg-pink-300/5 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:border-pink-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Programming Languages Category */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-pink-500 dark:text-pink-400">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C++', 'C', 'Java', 'JavaScript'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-pink-200/30 bg-pink-500/5 dark:border-pink-300/10 dark:bg-pink-300/5 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:border-pink-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & DevOps Category */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-pink-500 dark:text-pink-400 flex items-center gap-1.5">
                    <Wrench className="size-4" />
                    Tools & Workflows
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Docker', 'Vercel', 'Google Colab'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-pink-200/30 bg-pink-500/5 dark:border-pink-300/10 dark:bg-pink-300/5 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:border-pink-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
