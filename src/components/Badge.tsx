
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'primary';
  className?: string;
}

const Badge = ({ 
  children, 
  variant = 'default', 
  className 
}: BadgeProps) => {
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-primary text-primary bg-transparent',
    primary: 'primary-gradient text-white',
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
