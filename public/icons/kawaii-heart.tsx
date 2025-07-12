import React from 'react';

interface KawaiiHeartProps {
  className?: string;
  width?: number;
  height?: number;
  fillColor?: string;
  strokeColor?: string;
}

export function KawaiiHeart({
  className = '',
  width = 24,
  height = 24,
  fillColor = 'currentColor',
  strokeColor = 'currentColor',
}: KawaiiHeartProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-heart animate-pulse-heart h-6 w-6 ${className}`}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
  );
}
