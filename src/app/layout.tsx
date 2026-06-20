import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/next';
import { quicksand, lacquer, bubblegumSans } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Vertika Singh',
  description: 'Vertika Singh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lacquer.variable} ${quicksand.variable} ${bubblegumSans.variable} font-family-quicksand antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
