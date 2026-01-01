import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';

const steps = [{
  number: '01',
  title: 'Install App',
  description: 'Download Shop360° from the Google Play Store and create your account.'
}, {
  number: '02',
  title: 'Browse Stores',
  description: 'Explore a variety of virtual shops from the comfort of your home.'
}, {
  number: '03',
  title: 'View in 360°/AR',
  description: 'Interact with products using immersive 360° views and Augmented Reality.'
}, {
  number: '04',
  title: 'Decide',
  description: 'Make informed purchasing decisions with confidence and ease.'
}];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Timeline line progress - smooth fill animation
  const lineProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-gray-50 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <motion.h2 
            className="text-3xl font-semibold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            How It Works
          </motion.h2>
          <p className="text-gray-600 text-base font-light">
            Simple steps to a better shopping experience.
          </p>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Background Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gray-200" />
          
          {/* Animated Progress Line */}
          <motion.div
            className="hidden lg:block absolute top-20 left-0 h-px bg-gray-900 origin-left"
            style={{ scaleX: lineProgress }}
            initial={{ scaleX: 0 }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative">
            {steps.map((step, index) => {
              const circleDelay = index * 0.2;
              const contentDelay = circleDelay + 0.15;
              
              return (
                <div key={index} className="flex flex-col items-center lg:items-start relative">
                  {/* Timeline Circle - positioned on line */}
                  <div className="relative mb-8 lg:mb-12">
                    {/* Connecting line from circle to content (mobile only) */}
                    <div className="lg:hidden absolute top-16 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2" />
                    
                    {/* Circle */}
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center relative z-10 shadow-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: 1, 
                        opacity: 1 
                      } : {}}
                      transition={{ 
                        duration: 0.5,
                        delay: circleDelay,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        borderColor: "rgb(17, 24, 39)"
                      }}
                    >
                      {/* Number */}
                      <motion.span
                        className="text-sm font-semibold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { 
                          opacity: 1
                        } : {}}
                        transition={{ 
                          delay: circleDelay + 0.1,
                          duration: 0.3
                        }}
                      >
                        {step.number}
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    className="text-center lg:text-left w-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0 
                    } : {}}
                    transition={{ 
                      delay: contentDelay,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}