// src/components/ui/Button.tsx
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';

// تعريف الـ variants
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-orange-500 text-black hover:bg-orange-400',
        secondary: 'bg-zinc-900 text-gray-400 hover:bg-zinc-800',
        outline: 'border border-zinc-700 text-gray-400 hover:bg-zinc-800 hover:text-white',
        ghost: 'text-gray-400 hover:text-orange-500',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// الـ interface الصحيح
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
}

// الـ Component
export function Button({
  className,
  variant,
  size,
  icon: Icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {Icon && <Icon className={cn('w-4 h-4', size === 'sm' && 'w-3.5 h-3.5')} />}
      {children}
    </button>
  );
}