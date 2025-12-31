import React from 'react';
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
  return <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500">
            Simple steps to a better shopping experience.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => <FadeIn key={index} delay={index * 0.15} className="relative bg-white">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-3xl font-bold text-gray-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </FadeIn>)}
        </div>
      </div>
    </section>;
}