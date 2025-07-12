import Link from 'next/link';
import Wrapper from '../common/Wrapper';
import AnimatedLink from '../common/animated-link';
import { KawaiiHeart } from '../../../public/icons/kawaii-heart';
import { headerLinks } from '@/constants';

export default function Header() {
  return (
    <header className="border-kawaii-pink sticky top-0 z-50 border-b-2 bg-white/80 backdrop-blur-md dark:bg-black/80">
      <Wrapper className="flex justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <KawaiiHeart className="text-kawaii-pink" fillColor="none" />
          <h1 className="text-lg font-semibold">Pringles Portfolio</h1>
        </Link>

        <nav className="flex items-center gap-4">
          {headerLinks.map((link) => (
            <AnimatedLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedLink>
          ))}
        </nav>
      </Wrapper>
    </header>
  );
}
