import { Smartphone, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { FloatingElement } from './ui/FloatingElement';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          style={{ opacity }}
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left w-full lg:max-w-2xl">
            <FadeIn delay={0.1}>
              <motion.div 
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 text-xs font-medium mb-6 shadow-sm border border-gray-200/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Final Year Project 2024
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Shop<span className="text-gray-500">360°</span>
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.p 
                className="text-xl sm:text-2xl font-medium text-gray-800 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                See It. Try It. Buy It.
              </motion.p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Experience products virtually with advanced 360° and AR
                technology. The future of immersive shopping is here.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Button href="https://play.google.com" icon={<Download className="w-5 h-5" />} className="w-full sm:w-auto">
                  Download on Play Store
                </Button>
                <Button variant="secondary" href="#how-it-works" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </motion.div>
            </FadeIn>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <FloatingElement duration={4} delay={0.5}>
              <FadeIn delay={0.5} direction="left">
                <motion.div 
                  className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                  {/* Screen Content Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white flex flex-col">
                    {/* Status Bar */}
                    <div className="h-6 w-full bg-white/90 backdrop-blur-sm flex justify-between items-center px-4 text-[10px] font-medium text-gray-900">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-gray-900 rounded-full opacity-20"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full opacity-20"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-8 pb-4">
                      <div className="h-8 w-8 bg-gray-900 rounded-xl mb-4 flex items-center justify-center shadow-sm">
                        <Smartphone className="text-white w-4 h-4" />
                      </div>
                      <div className="h-6 w-32 bg-gray-200 rounded-lg mb-2"></div>
                      <div className="h-4 w-48 bg-gray-100 rounded-lg"></div>
                    </div>

                    {/* App Content Skeleton */}
                    <div className="px-6 space-y-4">
                      <div className="h-40 w-full bg-gray-100 rounded-2xl relative overflow-hidden group shadow-sm">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          <span className="text-sm font-medium">360° View</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-32 bg-gray-50 rounded-xl shadow-sm"></div>
                        <div className="h-32 bg-gray-50 rounded-xl shadow-sm"></div>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="mt-auto h-16 bg-white border-t border-gray-100 flex justify-around items-center px-6">
                      <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </FloatingElement>
          </div>
        </motion.div>
      </div>
    </section>;
}