import { Quicksand, Lacquer, Bubblegum_Sans } from 'next/font/google';

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export const lacquer = Lacquer({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lacquer',
});

export const bubblegumSans = Bubblegum_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bubblegum-sans',
});
