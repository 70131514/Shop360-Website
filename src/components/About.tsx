import React from 'react';
import { FadeIn } from './ui/FadeIn';
export function About() {
  return <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Shop360°
          </h2>
          <div className="w-16 h-1 bg-yellow-600 mx-auto mb-8 rounded-full"></div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
            Shop360° is an innovative mobile application designed to bridge the
            gap between physical and digital retail. By leveraging{' '}
            <strong className="font-semibold text-gray-900">
              Augmented Reality (AR)
            </strong>{' '}
            and{' '}
            <strong className="font-semibold text-gray-900">
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