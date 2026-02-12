import { GraduationCap, BookOpen, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { GlowingEffect } from './ui/GlowingEffect';

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

const pillars = [
  {
    icon: Code,
    title: 'Technical Proficiency',
    description: 'Advanced implementation of React Native and Firebase ecosystem.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Integration of emerging AR and 360° technologies in retail.',
  },
  {
    icon: BookOpen,
    title: 'Research',
    description: 'Based on analysis of current e-commerce limitations and user needs.',
  },
];

export function FYPInfo() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />

      {/* Line animation background */}
      <FloatingPaths position={1.2} corner="bottom-left" />
      <FloatingPaths position={1.2} corner="top-right" />

      {/* Subtle orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#F8F8F8] to-transparent dark:from-[#0D0D0D] rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#F0F0F0] to-transparent dark:from-[#0A0A0A] rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl z-10">
        <FadeIn className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#E8E8E8] dark:border-[#2A2A2A] bg-[#F5F5F5] dark:bg-[#1A1A1A] mb-6">
            <GraduationCap className="w-8 h-8 text-[#000000] dark:text-[#FFFFFF]" />
          </div>
          <h2 className="text-3xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-4">
            Final Year Project
          </h2>
          <div className="h-px w-12 bg-[#E0E0E0] dark:bg-[#333333] mx-auto mb-5" />
          <p className="text-[#666666] dark:text-[#999999] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Developed as a comprehensive academic capstone demonstrating full-stack mobile development capabilities.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={index} delay={0.08 * index}>
                <div className="relative h-full min-h-[300px] md:min-h-[340px] rounded-[1.25rem] border-[0.75px] border-[#E0E0E0] dark:border-[#333333] p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full min-h-[300px] md:min-h-[340px] flex-col rounded-xl border-[0.75px] border-[#E0E0E0] dark:border-[#333333] bg-[#FFFFFF] dark:bg-[#1A1A1A] p-6 md:p-8 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] transition-colors duration-300">
                    <Icon className="w-9 h-9 text-[#000000] dark:text-[#FFFFFF] mb-5 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed flex-1">
                      {item.description}
                    </p>
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
