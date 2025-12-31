import React from 'react';
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
export function App() {
  return <main className="min-h-screen bg-white">
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
    </main>;
}