'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-full border-2 border-pink-200 bg-white/50 dark:border-neutral-800 dark:bg-neutral-950/50"
        aria-hidden="true"
      />
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-pink-200 bg-white text-pink-500 shadow-xs transition-all duration-300 hover:scale-105 hover:bg-pink-50 hover:text-pink-600 focus-visible:outline-hidden dark:border-neutral-800 dark:bg-neutral-950 dark:text-pink-300 dark:hover:bg-neutral-900 dark:hover:text-pink-200"
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          'absolute h-5 w-5 transition-all duration-500 transform text-yellow-400',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
        )}
      />
      <Moon
        className={cn(
          'absolute h-5 w-5 transition-all duration-500 transform text-pink-400 dark:text-pink-300',
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
        )}
      />
    </button>
  );
}

