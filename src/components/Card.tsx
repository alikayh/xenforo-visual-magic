
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'outline' | 'gradient';
  onClick?: () => void;
  animate?: boolean;
  delay?: number;
}

const Card = ({
  className,
  style,
  children,
  variant = 'default',
  onClick,
  animate = false,
  delay = 0,
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white shadow-md border border-gray-100',
    glass: 'glass-card',
    outline: 'border border-gray-200 bg-transparent',
    gradient: 'primary-gradient text-white',
  };

  const animationClasses = animate 
    ? `opacity-0 translate-y-4 animate-fade-in` 
    : '';

  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        variantClasses[variant],
        onClick && 'cursor-pointer hover:shadow-lg',
        animationClasses,
        className
      )}
      style={{ ...style, ...delayStyle }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
