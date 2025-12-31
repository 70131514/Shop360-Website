import React from 'react';
import { FadeIn } from './ui/FadeIn';
const techs = ['React Native', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'AR Integration', 'TypeScript'];
export function TechStack() {
  return <section className="py-20 bg-gray-900 text-white border-y border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-10 text-gray-100">
            Built With Modern Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {techs.map((tech, index) => <div key={index} className="px-6 py-3 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm sm:text-base font-medium hover:border-gray-600 hover:bg-gray-800 transition-colors cursor-default">
                {tech}
              </div>)}
          </div>
        </FadeIn>
      </div>
    </section>;
}