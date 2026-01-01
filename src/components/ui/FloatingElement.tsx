import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function FloatingElement({ 
  children, 
  className = '',
  duration = 3,
  delay = 0
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

