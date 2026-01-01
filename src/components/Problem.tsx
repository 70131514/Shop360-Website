import React from 'react';
import { EyeOff, MapPin, Clock, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { StaggerContainer, StaggerItem } from './ui/StaggerContainer';

const problems = [{
  icon: <EyeOff className="w-6 h-6" />,
  title: 'Limited Visualization',
  description: 'Static images and videos fail to provide a true sense of product scale, texture, and detail.'
}, {
  icon: <MapPin className="w-6 h-6" />,
  title: 'Expensive Showrooms',
  description: 'Businesses spend fortunes on physical locations that reach only a local audience.'
}, {
  icon: <Clock className="w-6 h-6" />,
  title: 'Time Consuming',
  description: 'Physical store visits require travel time and effort, often with limited operating hours.'
}, {
  icon: <ShoppingBag className="w-6 h-6" />,
  title: 'Lack of Trust',
  description: "Online shoppers often hesitate because they can't fully inspect the product before buying."
}];

export function Problem() {
  return <section className="py-16 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            The Challenge
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
            Traditional e-commerce and physical retail both have significant
            limitations in today's fast-paced world.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="h-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-10 h-10 flex items-center justify-center text-gray-900 mb-4 rounded-xl bg-gray-50"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {problem.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {problem.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>;
}