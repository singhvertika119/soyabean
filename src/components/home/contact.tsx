'use client';

import Wrapper from '../common/Wrapper';
import { MailIcon, HeartIcon, SparklesIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { motion, AnimatePresence } from 'motion/react';

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
    <section id="contact" className="from-kawaii-pink/20 to-kawaii-mint/20 bg-gradient-to-br py-20">
      <Wrapper>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-family-bubblegum text-center text-4xl font-semibold">Get in touch</h1>
          <div className="bg-kawaii-pink h-1 w-20"></div>
          <p className="mt-2 max-w-lg text-center">
            Have a project in mind or want to chat about coding? Drop me a line and let&apos;s
            create something amazing together!
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-2xl">
          {/* Main Email Card */}
          <div className="border-kawaii-pink relative overflow-hidden rounded-3xl border-2 bg-white p-10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            {/* Decorative Elements */}
            <div className="text-kawaii-mint/20 absolute -top-4 -right-4">
              <SparklesIcon className="h-16 w-16 animate-pulse" />
            </div>
            <div className="text-kawaii-pink absolute bottom-4 left-4">
              <HeartIcon className="animate-sparkle size-8" />
            </div>

            <div className="relative z-10 text-center">
              <div className="bg-kawaii-pink/40 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                <MailIcon className="h-8 w-8 text-neutral-800" />
              </div>

              <h3 className="font-family-bubblegum mb-4 text-2xl font-semibold">Let&apos;s connect!</h3>

              <div className="mx-auto mb-6 max-w-md rounded-2xl p-4">
                <p className="mb-2 text-sm font-medium text-neutral-800">Send me an email at:</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg font-semibold text-pink-400">
                    singhvertika119@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="cursor-pointer text-neutral-800 transition-colors hover:text-neutral-900"
                    title="Copy email"
                  >
                    <CopyIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative min-h-[24px]">
                  <AnimatePresence mode="wait">
                    {copied && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-1/2 mt-2 translate-x-1/2 text-sm font-medium text-neutral-700"
                      >
                        ✨ Copied to clipboard!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <a
                href="mailto:singhvertika119@gmail.com"
                className="bg-kawaii-pink hover:bg-kawaii-pink/80 inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-neutral-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <MailIcon className="h-5 w-5" />
                Open Email App
              </a>
            </div>
          </div>

          {/* Fun Stats Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-kawaii-mint/50 border-kawaii-mint rounded-2xl border-2 p-6 text-center transition-transform hover:scale-105">
              <div className="text-2xl font-bold">⚡</div>
              <p className="mt-2 text-sm font-medium text-neutral-800">Quick Response</p>
              <p className="text-xs text-gray-600">Usually within 24h</p>
            </div>

            <div className="bg-kawaii-pink/50 border-kawaii-pink rounded-2xl border-2 p-6 text-center transition-transform hover:scale-105">
              <div className="text-2xl font-bold">💝</div>
              <p className="mt-2 text-sm font-medium text-neutral-800">Supportive Vibes</p>
              <p className="text-xs text-gray-600">Always happy to help</p>
            </div>

            <div className="bg-kawaii-lavender/50 border-kawaii-lavender rounded-2xl border-2 p-6 text-center transition-transform hover:scale-105">
              <div className="text-2xl font-bold">🚀</div>
              <p className="mt-2 text-sm font-medium text-neutral-800">Let&apos;s Build</p>
              <p className="text-xs text-gray-600">Amazing projects await</p>
            </div>
          </div>

          {/* Social Links (Optional) */}
          <div className="mt-8 text-center">
            <p className="mb-4 text-sm font-medium text-pink-400">Or find me elsewhere:</p>
            <TooltipProvider>
              <div className="flex justify-center gap-4">
                {/* <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-kawaii-mint hover:bg-kawaii-mint rounded-full p-3 transition-colors"
                    >
                      <span className="text-lg">💼</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip> */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/singhvertika119"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-kawaii-pink hover:bg-kawaii-pink rounded-full p-3 transition-colors"
                    >
                      <span className="text-lg">🐱</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://x.com/vertikasngh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-kawaii-lavender hover:bg-kawaii-lavender rounded-full p-3 transition-colors"
                    >
                      <span className="text-lg">🐦</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Twitter</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
