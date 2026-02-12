import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { GlowingEffect } from './ui/GlowingEffect';
import { RotateCw, Box, Smartphone, Clock } from 'lucide-react';

function FloatingPaths({
  position,
  corner = 'bottom-left',
}: {
  position: number;
  corner?: 'bottom-left' | 'top-right';
}) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  const cornerClasses =
    corner === 'top-right'
      ? 'absolute top-0 right-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden'
      : 'absolute bottom-0 left-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden';

  const transformClass = corner === 'top-right' ? 'scale-x-[-1] scale-y-[-1]' : '';

  return (
    <div className={cornerClasses}>
      <svg
        className={`w-full h-full text-[#000000] dark:text-[#FFFFFF] ${transformClass}`}
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.7, 0.4],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const solutionPoints = [
  {
    icon: Box,
    title: 'Virtual Store Walkthroughs',
    description: 'Explore the store from anywhere, anytime.',
  },
  {
    icon: RotateCw,
    title: 'High-fidelity 360° product inspection',
    description: 'See every angle and detail before you buy.',
  },
  {
    icon: Smartphone,
    title: 'AR visualization in your space',
    description: 'Place products in your home with your camera.',
  },
  {
    icon: Clock,
    title: 'Accessible 24/7 on mobile',
    description: 'No travel, no opening hours—just tap and explore.',
  },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="relative py-24 lg:py-32 bg-[#FFFFFF] dark:bg-[#000000] text-[#000000] dark:text-[#FFFFFF] overflow-hidden transition-colors duration-300"
    >
      {/* Fade transition at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />
      {/* Fade transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />

      {/* Subtle background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#F5F5F5] to-transparent dark:from-[#1A1A1A] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#E8E8E8] to-transparent dark:from-[#0D0D0D] rounded-full blur-3xl opacity-40" />
      </div>

      <FloatingPaths position={1.2} corner="bottom-left" />
      <FloatingPaths position={1.2} corner="top-right" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">
        {/* Section header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-4">
            Our Solution
          </h2>
          <p className="text-[#666666] dark:text-[#999999] text-lg max-w-2xl mx-auto leading-relaxed">
            Shop360° brings the store to you—combining the convenience of online shopping with the immersion of physical retail.
          </p>
        </FadeIn>

        {/* Solution cards: 4 in a row, tall and minimal */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-4">
          {solutionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-xl border border-[#E0E0E0] dark:border-[#333333] p-[3px] md:rounded-2xl md:p-[3px]">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full min-h-[320px] lg:min-h-[380px] flex-col justify-between overflow-hidden rounded-[10px] border border-[#E0E0E0] dark:border-[#333333] bg-[#FAFAFA] dark:bg-[#0D0D0D] p-5 md:rounded-[13px] md:p-6">
                    <div className="flex flex-col gap-6">
                      <Icon className="w-5 h-5 text-[#000000] dark:text-[#FFFFFF] opacity-70" strokeWidth={1.25} />
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-[#000000] dark:text-[#FFFFFF] leading-snug tracking-tight">
                          {point.title}
                        </h3>
                        <p className="text-xs text-[#666666] dark:text-[#999999] leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
