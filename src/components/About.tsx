import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import phoneImage from '../assets/image2.jpeg';

function FloatingPaths({ position, corner = "bottom-left" }: { position: number; corner?: "bottom-left" | "top-right" | "top-left" | "bottom-right" }) {
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
    : corner === "top-left"
    ? "absolute top-0 left-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden"
    : corner === "bottom-right"
    ? "absolute bottom-0 right-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden"
    : "absolute bottom-0 left-0 w-[1800px] md:w-[2000px] lg:w-[2400px] h-[900px] md:h-[1000px] lg:h-[1200px] pointer-events-none overflow-hidden";

  const transformClass = corner === "top-right" 
    ? "scale-x-[-1] scale-y-[-1]"
    : corner === "top-left"
    ? "scale-y-[-1]"
    : corner === "bottom-right"
    ? "scale-x-[-1]"
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

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulating GSAP animations with CSS and JS
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (phoneRef.current) observer.observe(phoneRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    featureCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    // Parallax scroll effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translateY(${scrollProgress * 100}px)`;
        }

        floatingElementsRef.current.forEach((el, i) => {
          if (el) {
            const speed = 0.5 + (i * 0.2);
            el.style.transform = `translateY(${scrollProgress * 100 * speed}px) rotate(${scrollProgress * 360}deg)`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 lg:py-48 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300 overflow-hidden"
    >
      {/* Fade transition at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20"></div>
      
      {/* Fade transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFFFF] dark:from-[#000000] via-[#FFFFFF]/80 dark:via-[#000000]/80 to-transparent pointer-events-none z-20"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5F5F5] to-transparent dark:from-[#1A1A1A] rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E0E0E0] to-transparent dark:from-[#0D0D0D] rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Line Animations - Different positions from Hero */}
        <FloatingPaths position={1.2} corner="top-left" />
        <FloatingPaths position={1.5} corner="bottom-right" />
        
        {/* Floating geometric shapes */}
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#000000]/5 dark:border-[#FFFFFF]/5 rounded-2xl rotate-45 transition-transform duration-300"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-[#000000]/5 dark:border-[#FFFFFF]/5 rounded-full transition-transform duration-300"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-1/4 right-1/3 w-40 h-40 border-2 border-[#000000]/5 dark:border-[#FFFFFF]/5 rounded-3xl rotate-12 transition-transform duration-300"
        ></div>
      </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          
          {/* Image Display */}
          <div 
            ref={phoneRef}
            className="order-2 lg:order-1 phone-container opacity-0"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-xs mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={phoneImage} 
                  alt="Shop360 App" 
                  className="w-full h-auto object-cover"
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#000000]/5 dark:to-[#FFFFFF]/5 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div 
            ref={contentRef}
            className="order-1 lg:order-2 content-container opacity-0"
          >
            <div className="space-y-10">
              
              {/* Title with Split Text Effect */}
              <div className="overflow-hidden">
                <h2 className="title-reveal text-6xl md:text-7xl lg:text-8xl font-bold text-[#000000] dark:text-[#FFFFFF] leading-[1.1]">
                  <span className="block">About</span>
                  <span className="block bg-gradient-to-r from-[#000000] to-[#666666] dark:from-[#FFFFFF] dark:to-[#999999] bg-clip-text text-transparent">
                    Shop360°
                  </span>
                </h2>
              </div>

              {/* Animated Divider */}
              <div className="relative h-1 w-32 bg-[#E0E0E0] dark:bg-[#333333] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[#000000] dark:bg-[#FFFFFF] rounded-full animate-slide"></div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-reveal text-2xl md:text-3xl text-[#666666] dark:text-[#999999] leading-relaxed font-light">
                  Shop360° bridges the gap between physical and digital retail through cutting-edge technology.
                </p>
                
                <p className="text-reveal text-xl md:text-2xl text-[#666666] dark:text-[#999999] leading-relaxed font-light" style={{ animationDelay: '0.2s' }}>
                  By leveraging{' '}
                  <span className="font-semibold text-[#000000] dark:text-[#FFFFFF] relative inline-block highlight-text">
                    Augmented Reality (AR)
                  </span>{' '}
                  and{' '}
                  <span className="font-semibold text-[#000000] dark:text-[#FFFFFF] relative inline-block highlight-text">
                    360° panoramic imaging
                  </span>
                  , we enable immersive product exploration from anywhere.
                </p>

                <p className="text-reveal text-lg md:text-xl text-[#666666] dark:text-[#999999] leading-relaxed font-light" style={{ animationDelay: '0.4s' }}>
                  Experience shopping that's more trustworthy than traditional e-commerce and more convenient than physical visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-smooth {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }

        .animate-spin-smooth {
          animation: spin-smooth 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .ar-float {
          animation: float 4s ease-in-out infinite;
        }

        .scan-line {
          animation: scan 3s linear infinite;
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        .floating-1 {
          animation: float-1 4s ease-in-out infinite;
        }

        .floating-2 {
          animation: float-2 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .phone-3d {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .phone-container.animate-in .phone-3d {
          animation: phoneReveal 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes phoneReveal {
          from {
            transform: perspective(1000px) rotateY(-40deg) rotateX(10deg) translateX(-100px);
            opacity: 0;
          }
          to {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateX(0);
            opacity: 1;
          }
        }

        .phone-container {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .phone-container.animate-in {
          opacity: 1;
        }

        .content-container {
          transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;
        }

        .content-container.animate-in {
          opacity: 1;
          animation: contentSlide 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes contentSlide {
          from {
            transform: translateX(60px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .title-reveal {
          animation: titleReveal 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .content-container.animate-in .title-reveal {
          animation: titleReveal 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
        }

        @keyframes titleReveal {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .text-reveal {
          animation: textReveal 0.8s ease-out forwards;
          opacity: 0;
        }

        .content-container.animate-in .text-reveal {
          animation: textReveal 0.8s ease-out 0.6s forwards;
        }

        @keyframes textReveal {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .feature-tag {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .feature-tag.animate-in {
          animation: tagReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes tagReveal {
          from {
            transform: translateY(20px) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }

        .highlight-text::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .highlight-text:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}