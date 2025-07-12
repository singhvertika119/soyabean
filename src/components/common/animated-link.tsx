import { cn } from '@/lib/utils';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';

interface AnimatedLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const AnimatedLink = forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
  ({ children, href, className, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn('group relative inline-block cursor-pointer', className)}
        ref={ref}
        {...props}
      >
        <span className="relative inline-block overflow-hidden">
          <span className="block p-1 transition-transform duration-500 ease-out group-hover:-translate-y-[120%]">
            {children}
          </span>

          <span className="absolute top-0 left-0 block translate-y-[120%] rotate-[18deg] p-1 transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
            {children}
          </span>
        </span>
      </Link>
    );
  },
);

AnimatedLink.displayName = 'AnimatedLink';
export default AnimatedLink;
