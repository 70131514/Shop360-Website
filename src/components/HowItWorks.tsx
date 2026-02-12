import React from 'react';
import { FadeIn } from './ui/FadeIn';
const steps = [{
  number: '01',
  title: 'Install App',
  description: 'Download Shop360° from the Google Play Store and create your account.'
}, {
  number: '02',
  title: 'Browse Products',
  description: 'Explore a variety of products from the comfort of your home.'
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
  return <section id="how-it-works" className="py-24 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-4">
            How It Works
          </h2>
          <p className="text-[#666666] dark:text-[#999999]">
            Simple steps to a better shopping experience.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-[#E0E0E0] dark:bg-[#333333] -z-10"></div>

          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.15} className="relative bg-[#FFFFFF] dark:bg-[#000000]">
              <div className="group flex flex-col items-center text-center cursor-default py-2 -my-2 px-1 rounded-2xl transition-colors duration-300 ease-out hover:duration-500">
                {/* Number circle: inverts on hover (light in dark mode, dark in light mode) */}
                <div className="w-24 h-24 rounded-full bg-[#FFFFFF] dark:bg-[#1A1A1A] border-4 border-[#F5F5F5] dark:border-[#333333] flex items-center justify-center mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-[#E8E8E8] group-hover:border-[#E0E0E0] dark:group-hover:bg-[#2A2A2A] dark:group-hover:border-[#555555]">
                  <span className="text-3xl font-bold text-[#666666] dark:text-[#666666] transition-colors duration-300 ease-out group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-3 transition-colors duration-300 ease-out group-hover:text-[#000000] dark:group-hover:text-[#E8E8E8]">
                  {step.title}
                </h3>
                <p className="text-[#666666] dark:text-[#999999] text-sm leading-relaxed max-w-xs transition-colors duration-300 ease-out group-hover:text-[#333333] dark:group-hover:text-[#CCCCCC]">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>;
}