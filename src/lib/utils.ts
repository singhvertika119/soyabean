import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomColorGenerator(): string {
  const colors = ['bg-kawaii-pink', 'bg-kawaii-mint', 'bg-kawaii-lavender', 'bg-kawaii-blue'];

  return colors[Math.floor(Math.random() * colors.length)];
}
