import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';

export function Solution() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const features = [
    'Virtual Store Walkthroughs from anywhere', 
    'High-fidelity 360° product inspection', 
    'AR visualization in your own space', 
    'Accessible 24/7 on your mobile device'
  ];

  return <section ref={ref} className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            style={{ y, opacity }}
          >
            <FadeIn>
              <motion.h2 
                className="text-3xl font-semibold mb-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                Our Solution
              </motion.h2>
              <p className="text-gray-300 text-base mb-8 font-light leading-relaxed">
                Shop360° revolutionizes the shopping experience by bringing the
                store to you. We combine the convenience of online shopping with
                the immersion of physical retail.
              </p>

              <motion.ul className="space-y-4">
                {features.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-gray-200 font-light text-base">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </FadeIn>
          </motion.div>

          <div className="flex-1 w-full relative">
            <FadeIn direction="left" delay={0.2}>
              <motion.div 
                className="relative aspect-square max-w-md mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="relative z-10 w-full h-full bg-gray-800 rounded-3xl border border-gray-700/50 p-8 flex items-center justify-center shadow-xl"
                  animate={{
                    boxShadow: [
                      "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                      "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
                      "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    {['360°', 'AR', 'Virtual'].map((text, index) => (
                      <motion.div
                        key={index}
                        className={`bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm ${index === 2 ? 'col-span-2' : ''}`}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <span className="text-3xl font-semibold text-white/30">
                          {text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>;
}