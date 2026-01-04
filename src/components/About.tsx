import React from 'react';
import { FadeIn } from './ui/FadeIn';
export function About() {
  return <section id="about" className="py-24 bg-[#F5F5F5] dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-6">
            About Shop360°
          </h2>
          <div className="w-16 h-1 bg-[#000000] dark:bg-[#FFFFFF] mx-auto mb-8 rounded-full"></div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-[#666666] dark:text-[#999999] leading-relaxed font-light">
            Shop360° is an innovative mobile application designed to bridge the
            gap between physical and digital retail. By leveraging{' '}
            <strong className="font-semibold text-[#000000] dark:text-[#FFFFFF]">
              Augmented Reality (AR)
            </strong>{' '}
            and{' '}
            <strong className="font-semibold text-[#000000] dark:text-[#FFFFFF]">
              360° panoramic imaging
            </strong>
            , we enable users to explore stores and products from the comfort of
            their homes. Our goal is to eliminate the need for time-consuming
            physical visits while providing a shopping experience that is more
            immersive and trustworthy than traditional e-commerce.
          </p>
        </FadeIn>
      </div>
    </section>;
}