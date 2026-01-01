import React from 'react';
import { Smartphone, Store, Lock, Cloud, Zap, RotateCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { StaggerContainer, StaggerItem } from './ui/StaggerContainer';

const features = [{
  icon: <RotateCw className="w-6 h-6" />,
  title: '360° Product Views',
  description: 'Rotate and inspect products from every angle to see every detail.'
}, {
  icon: <Smartphone className="w-6 h-6" />,
  title: 'AR Visualization',
  description: 'Place products in your real-world environment using your camera.'
}, {
  icon: <Store className="w-6 h-6" />,
  title: 'Virtual Walkthrough',
  description: 'Navigate through store aisles virtually as if you were there.'
}, {
  icon: <Lock className="w-6 h-6" />,
  title: 'Secure Auth',
  description: 'Robust user authentication powered by Firebase Security.'
}, {
  icon: <Cloud className="w-6 h-6" />,
  title: 'Cloud Data',
  description: 'Real-time product updates and inventory management via Cloud Firestore.'
}, {
  icon: <Zap className="w-6 h-6" />,
  title: 'Smooth Experience',
  description: 'Optimized performance for seamless interaction on mobile devices.'
}];

export function Features() {
  return <section className="py-16 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-semibold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
            Built with modern technology to deliver a premium user experience.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-5 shadow-sm"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>;
}