import React from 'react';
import { FadeIn } from './ui/FadeIn';
const techs = ['React Native', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'AR Integration', 'TypeScript'];
export function TechStack() {
  return <section className="py-20 bg-[#000000] dark:bg-[#000000] text-[#FFFFFF] border-y border-[#333333] dark:border-[#333333] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-10 text-[#FFFFFF] dark:text-[#FFFFFF]">
            Built With Modern Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {techs.map((tech, index) => <div key={index} className="px-6 py-3 rounded-full border border-[#333333] dark:border-[#333333] bg-[#1A1A1A]/50 dark:bg-[#1A1A1A]/50 text-[#999999] dark:text-[#CCCCCC] text-sm sm:text-base font-medium hover:border-[#666666] dark:hover:border-[#666666] hover:bg-[#1A1A1A] dark:hover:bg-[#1A1A1A] transition-colors cursor-default">
                {tech}
              </div>)}
          </div>
        </FadeIn>
      </div>
    </section>;
}