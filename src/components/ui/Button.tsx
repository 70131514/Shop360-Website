import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  className?: string;
}
export function Button({
  variant = 'primary',
  children,
  className = '',
  icon,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm';
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300 focus:ring-gray-300',
    outline: 'bg-transparent text-white border border-white/40 hover:bg-white/10 focus:ring-white/50'
  };
  const content = <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>;
  const Component = motion.create(href ? 'a' : 'button') as any;
  return <Component whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${className}`} href={href} {...href ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}} {...props}>
      {content}
    </Component>;
}