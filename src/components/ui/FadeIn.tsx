import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}
export function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up'
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return {
          y: 40,
          x: 0
        };
      case 'down':
        return {
          y: -40,
          x: 0
        };
      case 'left':
        return {
          x: 40,
          y: 0
        };
      case 'right':
        return {
          x: -40,
          y: 0
        };
      case 'none':
        return {
          x: 0,
          y: 0
        };
      default:
        return {
          y: 40,
          x: 0
        };
    }
  };
  const initial = {
    opacity: 0,
    ...getDirectionOffset()
  };
  const animate = isInView ? {
    opacity: 1,
    x: 0,
    y: 0
  } : initial;
  return <motion.div ref={ref} initial={initial} animate={animate} transition={{
    duration: 0.7,
    delay: delay,
    ease: [0.21, 0.47, 0.32, 0.98]
  }} className={className}>
      {children}
    </motion.div>;
}