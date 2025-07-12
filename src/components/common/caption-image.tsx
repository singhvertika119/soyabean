import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CaptionImageProps {
  src: string;
  caption: string;
  captionClassName?: string;
  className?: string;
  imageClassName?: string;
}

export default function CaptionImage({
  src,
  caption,
  captionClassName,
  className,
  imageClassName,
}: CaptionImageProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-lg', className)}>
      <Image src={src} alt={caption} width={500} height={500} className={cn(imageClassName)} />
      <p
        className={cn(
          'absolute bottom-0 left-0 w-full bg-white/20 py-2 text-center text-sm font-medium text-white backdrop-blur-sm',
          captionClassName,
        )}
      >
        {caption}
      </p>
    </div>
  );
}
