import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  style,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary:
      'font-semibold bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-blue-500',
    secondary:
      'font-semibold border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus:ring-slate-500 dark:border-slate-700 dark:bg-slate-800/70 dark:text-white dark:hover:bg-slate-800',
    ghost:
      'font-medium border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800',
    outline:
      'font-medium border border-slate-400 bg-transparent hover:bg-slate-100 focus:ring-slate-600 dark:border-slate-600 dark:hover:bg-slate-900/40',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const buttonClasses = twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          style={style}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses} style={style}>
      {children}
    </button>
  );
}
