// components/ui/Badge.tsx
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'destructive';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base = 'text-xs px-2 py-1 rounded-full flex items-center gap-1';
  const variants = {
    default: 'bg-gray-800 text-gray-300',
    destructive: 'bg-red-600 text-white',
  };

  return <div className={`${base} ${variants[variant]} ${className}`}>{children}</div>;
}