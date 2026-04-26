import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'solid';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] transform hover:-translate-y-0.5',
    solid: 'bg-[var(--color-primary)] text-white font-bold',
    outline: 'bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-white hover:border-[var(--color-primary-light)]',
    ghost: 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-primary)]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 font-semibold',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-[var(--radius-md)] transition-all duration-200 cursor-pointer border-none outline-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
