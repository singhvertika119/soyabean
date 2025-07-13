'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Wrapper from '../common/Wrapper';
import AnimatedLink from '../common/animated-link';
import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { headerLinks } from '@/constants';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="border-kawaii-pink sticky top-0 z-50 border-b-2 bg-white/90 backdrop-blur-md dark:bg-black/90">
        <Wrapper className="flex justify-between py-4">
          <Link href="/" className="group font-family-bubblegum flex items-center gap-2">
            <KawaiiHeart
              fillColor="pink"
              className="text-pink-300 transition-transform group-hover:scale-110"
            />
            <h1 className="text-lg font-semibold text-neutral-800">Pringles Portfolio</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 sm:flex">
            {headerLinks.map((link) => (
              <AnimatedLink key={link.href} href={link.href}>
                {link.label}
              </AnimatedLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="border-kawaii-pink/80 hover:bg-kawaii-pink/70 relative h-10 w-10 rounded-full border-2 transition-all duration-300 hover:border-pink-200 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              <Menu
                className={`h-5 w-5 text-pink-300 transition-all duration-300 ${
                  isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 text-pink-300 transition-all duration-300 ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              />
            </div>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </Wrapper>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 sm:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 backdrop-blur-lg" onClick={() => setIsOpen(false)} />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full transform transition-all duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="border-kawaii-pink h-full border-l-2 bg-gradient-to-br from-white via-pink-50/50 to-white shadow-2xl dark:from-black dark:via-pink-950/20 dark:to-black">
            {/* Menu Header */}
            <div className="border-kawaii-pink/20 border-b p-6">
              <Link
                href="/"
                className="group flex items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <div className="bg-kawaii-pink group-hover:bg-kawaii-pink/20 rounded-full p-2 transition-colors">
                  <KawaiiHeart
                    className="text-kawaii-pink transition-transform group-hover:scale-110"
                    fillColor="none"
                  />
                </div>
                <div>
                  <h2 className="from-kawaii-pink bg-gradient-to-r to-pink-400 bg-clip-text text-lg font-bold text-transparent">
                    Pringles Portfolio
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Welcome back! ✨</p>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2 p-6">
              {headerLinks.map((link, index) => (
                <div
                  key={link.href}
                  className={`transform transition-all duration-300 ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div onClick={() => setIsOpen(false)}>
                    <AnimatedLink
                      href={link.href}
                      className={`hover:bg-kawaii-pink/80 group flex items-center gap-3 rounded-xl border-2 border-pink-200 p-3 transition-all duration-200`}
                    >
                      <div className="bg-kawaii-pink h-2 w-2 rounded-full transition-colors group-hover:bg-pink-400" />
                      <span className="text-base font-semibold transition-colors">
                        {link.label}
                      </span>
                    </AnimatedLink>
                  </div>
                </div>
              ))}
            </nav>

            {/* Menu Footer */}
            <div className="absolute right-6 bottom-6 left-6">
              <div className="from-kawaii-pink/80 to-kawaii-pink dark:from-kawaii-pink/5 rounded-xl border-2 border-pink-200 bg-gradient-to-r p-4 dark:to-pink-950/20">
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                  Made with{' '}
                  <span className="text-kawaii-pink">
                    <KawaiiHeart fillColor="pink" className="inline-block text-pink-300" />
                  </span>{' '}
                  by Pringles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
