import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';

export function About() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return <section ref={ref} className="py-16 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100"
          style={{ scale, opacity }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <FadeIn>
            <motion.h2 
              className="text-3xl font-semibold text-gray-900 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              About Shop360°
            </motion.h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 font-light leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Shop360° is an innovative mobile application designed to bridge the
              gap between physical and digital retail. By leveraging{' '}
              <strong className="font-semibold text-gray-900">
                Augmented Reality (AR)
              </strong>{' '}
              and{' '}
              <strong className="font-semibold text-gray-900">
                360° panoramic imaging
              </strong>
              , we enable users to explore stores and products from the comfort of
              their homes. Our goal is to eliminate the need for time-consuming
              physical visits while providing a shopping experience that is more
              immersive and trustworthy than traditional e-commerce.
            </motion.p>
          </FadeIn>
        </motion.div>
      </div>
    </section>;
}