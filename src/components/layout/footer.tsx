import Wrapper from '../common/Wrapper';
import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { GithubIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-kawaii-pink bg-kawaii-footer border-t-2 py-8 text-center dark:bg-neutral-900">
      <Wrapper>
        <div className="mb-10 space-y-4">
          <h1 className="font-semibold">
            Made with{' '}
            <KawaiiHeart fillColor="pink" className="inline-block animate-pulse text-pink-300" /> by
            Vertika
          </h1>

          <div className="flex items-center justify-center gap-4 text-sm">
            {headerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link href="https://github.com/pringles-dev">
              <GithubIcon className="dark:text-kawaii-pink size-5 text-neutral-700" />
            </Link>
            <Link href="https://x.com/pringles_dev">
              <TwitterIcon className="dark:text-kawaii-pink size-5 text-neutral-700" />
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2025 Vertika Singh. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
