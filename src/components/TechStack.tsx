import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { StaggerContainer, StaggerItem } from './ui/StaggerContainer';

const techs = ['React Native', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'AR Integration', 'TypeScript'];

export function TechStack() {
  return <section className="py-16 bg-gray-900 text-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <motion.h2 
            className="text-3xl font-semibold mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Built With Modern Technologies
          </motion.h2>
        </FadeIn>
        
        <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.1}>
          {techs.map((tech, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="px-5 py-2.5 rounded-full border border-gray-700 bg-gray-800/80 text-gray-200 text-sm font-medium backdrop-blur-sm cursor-default"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(55, 65, 81, 1)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {tech}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>;
}