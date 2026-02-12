import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';

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

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300 overflow-hidden"
    >
      {/* Fade transition at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />
      {/* Fade transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20" />

      {/* Line animation + orbs: explicitly behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingPaths position={1.2} corner="bottom-left" />
        <FloatingPaths position={1.2} corner="top-right" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#F8F8F8] to-transparent dark:from-[#0D0D0D] dark:to-transparent rounded-full blur-3xl opacity-40" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#F5F5F5] to-transparent dark:from-[#0A0A0A] rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F0F0F0] to-transparent dark:from-[#0A0A0A] rounded-full blur-3xl opacity-30" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center z-10">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-5 tracking-tight leading-[1.15]">
            Ready to Experience
            <br />
            <span className="bg-gradient-to-r from-[#000000] to-[#444444] dark:from-[#FFFFFF] dark:to-[#AAAAAA] bg-clip-text text-transparent">
              Virtual Shopping?
            </span>
          </h2>
          <div className="h-px w-16 bg-[#E0E0E0] dark:bg-[#333333] mx-auto mb-8" />
          <p className="text-lg md:text-xl text-[#666666] dark:text-[#999999] max-w-2xl mx-auto leading-relaxed font-light px-4 py-3 rounded-2xl bg-[#FFFFFF]/70 dark:bg-[#000000]/70 backdrop-blur-sm">
            The app is currently released as <span className="font-medium text-[#000000] dark:text-[#FFFFFF]">early access to internal testers</span> on Google Play and will be available to everyone when it is officially released.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
