import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function Solution() {
  return <section id="solution" className="py-24 bg-[#000000] dark:bg-[#000000] text-[#FFFFFF] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Solution
              </h2>
              <p className="text-[#999999] text-lg mb-8 leading-relaxed">
                Shop360° revolutionizes the shopping experience by bringing the
                store to you. We combine the convenience of online shopping with
                the immersion of physical retail.
              </p>

              <ul className="space-y-6">
                {['Virtual Store Walkthroughs from anywhere', 'High-fidelity 360° product inspection', 'AR visualization in your own space', 'Accessible 24/7 on your mobile device'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#FFFFFF] dark:text-[#FFFFFF] mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-[#CCCCCC] font-light">{item}</span>
                  </li>)}
              </ul>
            </FadeIn>
          </div>

          <div className="flex-1 w-full relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Abstract representation of AR/360 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-full opacity-50 blur-3xl"></div>
                <div className="relative z-10 w-full h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-center border border-white/5">
                      <span className="text-4xl font-bold text-white/20">
                        360°
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-center border border-white/5">
                      <span className="text-4xl font-bold text-white/20">
                        AR
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-center border border-white/5 col-span-2">
                      <span className="text-4xl font-bold text-white/20">
                        Virtual
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>;
}