import { Smartphone, Lock, Cloud, Zap, RotateCw } from 'lucide-react';
import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from './ui/GlowingEffect';
import { cn } from '../lib/utils';

function FloatingPaths({ position, corner = "bottom-left" }: { position: number; corner?: "bottom-left" | "top-right" }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  const cornerClasses = corner === "top-right" 
    ? "absolute top-0 right-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden"
    : "absolute bottom-0 left-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden";

  const transformClass = corner === "top-right" 
    ? "scale-x-[-1] scale-y-[-1]"
    : "";

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
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const FadeIn = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return <div className={`animate-fade-in ${className}`}>{children}</div>;
};

const BentoCard = ({ name, description, Icon, background, className = "" }: { 
  name: string; 
  description: string; 
  Icon: React.ComponentType<{ className?: string }>; 
  background: ReactNode; 
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li className={cn("min-h-[11rem] list-none", className)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-[#E0E0E0] dark:border-[#333333] p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div 
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-[#E0E0E0] dark:border-[#333333] bg-[#FFFFFF] dark:bg-[#1A1A1A] p-5 md:p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {background}
          
          <div className={`relative flex flex-1 flex-col justify-between gap-3 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isHovered ? 'justify-center' : 'justify-end'
          }`}>
            <div className="w-fit rounded-lg p-2 text-[#000000] dark:text-[#FFFFFF] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
              <Icon className={`w-6 h-6 md:w-7 md:h-7 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isHovered ? 'opacity-100 scale-110' : 'opacity-80 scale-100'
              }`} />
            </div>
            <div className="space-y-2.5">
              <h3 className="text-base md:text-lg font-semibold text-[#000000] dark:text-[#FFFFFF] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] leading-tight">
                {name}
              </h3>
              <p className={`text-xs md:text-sm text-[#666666] dark:text-[#999999] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] leading-relaxed ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const BentoGrid = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <ul className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </ul>
  );
};

const features = [
  {
    name: '360° Product Views',
    description: 'Rotate and inspect products from every angle to see every detail.',
    Icon: RotateCw,
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] dark:from-[#1A1A1A] dark:to-[#000000]" />,
    className: "md:col-span-2",
  },
  {
    name: 'AR Visualization',
    description: 'Place products in your real-world environment using your camera.',
    Icon: Smartphone,
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] dark:from-[#1A1A1A] dark:to-[#000000]" />,
    className: "md:col-span-1",
  },
  {
    name: 'Secure Auth',
    description: 'Robust user authentication powered by Firebase Security.',
    Icon: Lock,
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] dark:from-[#1A1A1A] dark:to-[#000000]" />,
    className: "md:col-span-1",
  },
  {
    name: 'Cloud Data',
    description: 'Real-time product updates and inventory management via Cloud Firestore.',
    Icon: Cloud,
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] dark:from-[#1A1A1A] dark:to-[#000000]" />,
    className: "md:col-span-2",
  },
  {
    name: 'Smooth Experience',
    description: 'Optimized performance for seamless interaction on mobile devices.',
    Icon: Zap,
    background: <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] dark:from-[#1A1A1A] dark:to-[#000000]" />,
    className: "md:col-span-3",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300 overflow-hidden">
      <FloatingPaths position={1.2} corner="bottom-left" />
      <FloatingPaths position={1.2} corner="top-right" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-4">
            Key Features
          </h2>
          <p className="text-[#666666] dark:text-[#999999] max-w-2xl mx-auto">
            Built with modern technology to deliver a premium user experience.
          </p>
        </FadeIn>
        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((feature) => (
            <BentoCard
              key={feature.name}
              name={feature.name}
              description={feature.description}
              Icon={feature.Icon}
              background={feature.background}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}