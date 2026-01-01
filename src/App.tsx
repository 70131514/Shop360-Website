import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { TechStack } from './components/TechStack';
import { FYPInfo } from './components/FYPInfo';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ui/ScrollProgress';

export function App() {
  return (
    <motion.main 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <TechStack />
      <FYPInfo />
      <FinalCTA />
      <Footer />
    </motion.main>
  );
}