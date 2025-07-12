import { cn } from '@/lib/utils';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={cn(className, 'mx-auto max-w-6xl px-6 xl:px-0')}>{children}</div>;
}
