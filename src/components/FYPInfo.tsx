import React from 'react';
import { GraduationCap, BookOpen, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { StaggerContainer, StaggerItem } from './ui/StaggerContainer';

export function FYPInfo() {
  return <section className="py-16 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <FadeIn className="text-center mb-10">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-5"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="w-8 h-8 text-gray-900" />
            </motion.div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Final Year Project
            </h2>
            <p className="text-gray-600 text-base font-light">
              Developed as a comprehensive academic capstone project demonstrating
              full-stack mobile development capabilities.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div 
                className="p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">
                  Technical Proficiency
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Advanced implementation of React Native and Firebase ecosystem.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className="p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">Innovation</h3>
                <p className="text-sm text-gray-600 font-light">
                  Integration of emerging AR and 360° technologies in retail.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className="p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <BookOpen className="w-6 h-6 text-green-600" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">Research</h3>
                <p className="text-sm text-gray-600 font-light">
                  Based on analysis of current e-commerce limitations and user needs.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </motion.div>
      </div>
    </section>;
}