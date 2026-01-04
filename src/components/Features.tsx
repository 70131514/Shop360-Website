import React from 'react';
import { Smartphone, Store, Lock, Cloud, Zap } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
const features = [{
  icon: <div className="w-6 h-6" />,
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
  return <section className="py-24 bg-[#F5F5F5] dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-4">
            Key Features
          </h2>
          <p className="text-[#666666] dark:text-[#999999] max-w-2xl mx-auto">
            Built with modern technology to deliver a premium user experience.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-sm border border-[#E0E0E0] dark:border-[#333333] hover:shadow-md transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-[#000000] dark:bg-[#333333] text-[#FFFFFF] rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#666666] dark:text-[#999999] font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>)}
        </div>
      </div>
    </section>;
}