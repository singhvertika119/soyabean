import Wrapper from '../common/Wrapper';
import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { headerLinks } from '@/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-pink-200/10 bg-[#fafafa] dark:bg-[#0c0c0c] pt-16 pb-0 transition-colors duration-300">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-2">
            <KawaiiHeart fillColor="pink" className="animate-pulse text-pink-300" />
            <span className="font-family-bubblegum text-lg font-bold text-neutral-800 dark:text-neutral-100">
              vertika.
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright info */}
          <div className="text-xs text-neutral-500 dark:text-neutral-500">
            <p>© 2026 Vertika Singh. All rights reserved.</p>
          </div>
        </div>
      </Wrapper>

      {/* Large half-visible background text at the very bottom */}
      <div className="relative overflow-hidden w-full select-none pointer-events-none mt-[-10rem] sm:mt-[-8rem]">
        <h1 className="text-[10vw] sm:text-[30vw] font-bold text-center tracking-wider text-pink-200/60 dark:text-pink-300/10 translate-y-[35%] leading-none select-none lowercase font-family-bubblegum">
          vertika
        </h1>
      </div>
    </footer>
  );
}

