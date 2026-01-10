import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./ui/InteractiveHoverButton";
import { FadeIn } from "./ui/FadeIn";
import { useTheme } from "../contexts/ThemeContext";
import Shop360Black from "../assets/Shop360Black.png";
import Shop360White from "../assets/Shop360White.png";

function FloatingPaths({ position }: { position: number }) {
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

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-[#000000] dark:text-[#FFFFFF]"
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

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const { theme } = useTheme();
  const titles = useMemo(
    () => ["immersive", "virtual", "revolutionary", "innovative", "interactive"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FFFFFF] dark:bg-[#000000] overflow-hidden transition-colors duration-300">
      {/* Fade transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] blur-3xl opacity-60 dark:opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] blur-3xl opacity-60 dark:opacity-40" />
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <FadeIn delay={0.1}>
            <div className="mb-8">
              <img 
                key={theme}
                src={theme === 'dark' ? Shop360White : Shop360Black} 
                alt="Shop360° Logo" 
                className="h-16 md:h-20 w-auto mx-auto"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex gap-6 flex-col items-center">
              <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
                <span className="text-[#000000] dark:text-[#FFFFFF] pl-20 pr-20">Shop360°</span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold text-[#000000] dark:text-[#FFFFFF]"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                {/*<span className="text-[#000000] dark:text-[#FFFFFF]">Shopping Experience</span>*/}
              </h1>

              {/* Main Tagline - Emphasized */}
              <FadeIn delay={0.25}>
                <div className="mt-6 mb-4">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] md:tracking-[0.2em] text-center font-mono uppercase">
                    <span className="text-[#000000] dark:text-[#FFFFFF]">See It.</span>
                    <span className="text-[#000000] dark:text-[#FFFFFF]"> Try It.</span>
                    <span className="text-[#000000] dark:text-[#FFFFFF]"> Buy It.</span>
                  </h2>
                </div>
              </FadeIn>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#000000] dark:text-[#ffffff] max-w-2xl text-center mx-auto">
                Experience products virtually with advanced 360° and AR technology. 
                The future of immersive shopping is here.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-row gap-3 flex-wrap justify-center">
              <InteractiveHoverButton 
                text="Download on Play Store" 
                href="https://play.google.com"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}