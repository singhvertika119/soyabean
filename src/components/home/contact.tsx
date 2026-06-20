'use client';

import Wrapper from '../common/Wrapper';
import { Mail, Linkedin, Github, Instagram, Twitter, Copy, Check, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('singhvertika119@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#fafafa] dark:bg-[#0f0f0f] transition-colors duration-300 border-t border-pink-200/10"
    >
      <Wrapper>
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <h1 className="font-family-bubblegum text-center text-4xl font-bold tracking-wide text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
            <Mail className="text-pink-400 dark:text-pink-300" />
            Get in touch
          </h1>
          <div className="bg-pink-400 dark:bg-pink-300 h-1.5 w-20 rounded-full"></div>
          <p className="mt-2 max-w-lg text-center text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            Have a project in mind or want to chat about opportunities? Drop me a line and let&apos;s
            create something amazing together!
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Column 1: Direct Email */}
          <div className="bg-white dark:bg-[#161616] border border-pink-200/20 dark:border-neutral-800/80 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-pink-300/40 dark:hover:border-neutral-700/80 transition-all duration-300">
            <div>
              <h3 className="font-family-bubblegum text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-100">
                Direct Email
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Feel free to email me directly or click below to copy the address to your clipboard.
              </p>

              {/* Quick Details List */}
              <div className="space-y-3.5 my-6 border-t border-b border-neutral-100 dark:border-neutral-800/60 py-5 text-left">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  <span className="text-pink-500 shrink-0">⚡</span>
                  <span>Active responder — usually get back within 24 hours.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  <span className="text-pink-500 shrink-0">💼</span>
                  <span>Open for opportunities and developer roles.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  <span className="text-pink-500 shrink-0">💬</span>
                  <span>Happy to collaborate on GenAI, backend projects, or AI Agents.</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleCopyEmail}
                className="cursor-pointer flex items-center justify-between w-full p-4 rounded-xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-pink-300/40 dark:hover:border-neutral-700 transition-all duration-300 text-neutral-800 dark:text-neutral-200"
              >
                <div className="flex items-center gap-3 w-full">
                  <Mail className="text-pink-500 dark:text-pink-400 size-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide truncate">
                    singhvertika119@gmail.com
                  </span>
                </div>
                <div className="text-neutral-500 hover:text-pink-500 dark:hover:text-pink-300 transition-colors ml-2 shrink-0">
                  {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
                </div>
              </button>

              <a
                href="mailto:singhvertika119@gmail.com"
                className="cursor-pointer bg-pink-400 hover:bg-pink-500 dark:bg-pink-300 dark:text-neutral-900 dark:hover:bg-pink-200 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] w-full"
              >
                <Mail className="size-4" />
                Open Email App
              </a>
            </div>
          </div>

          {/* Column 2: Social Links Directory */}
          <div className="bg-white dark:bg-[#161616] border border-pink-200/20 dark:border-neutral-800/80 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-pink-300/40 dark:hover:border-neutral-700/80 transition-all duration-300">
            <div>
              <h3 className="font-family-bubblegum text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-100">
                Connect Elsewhere
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                Feel free to reach out or follow my work on any of these platforms!
              </p>
            </div>

            <div className="space-y-3 w-full">
              {[
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/vertika-singh09/',
                  handle: 'Vertika Singh',
                  icon: Linkedin,
                },
                {
                  name: 'GitHub',
                  href: 'https://github.com/singhvertika119',
                  handle: '@singhvertika119',
                  icon: Github,
                },
                {
                  name: 'Twitter / X',
                  href: 'https://x.com/vertikasngh',
                  handle: '@vertikasngh',
                  icon: Twitter,
                },
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/vertikaa_13/',
                  handle: '@vertikaa_13',
                  icon: Instagram,
                },
              ].map(({ name, href, handle, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/50 hover:border-pink-300/40 dark:hover:border-neutral-700/80 hover:bg-pink-500/5 dark:hover:bg-neutral-900/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500/5 text-pink-500 dark:bg-pink-400/5 dark:text-pink-300 group-hover:bg-pink-500/10 group-hover:text-pink-600 transition-colors">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{name}</h4>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400">{handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-neutral-400 dark:text-neutral-500 group-hover:text-pink-500 dark:group-hover:text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

