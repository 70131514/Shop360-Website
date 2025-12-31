import React from 'react';
import { GraduationCap, BookOpen, Code, Lightbulb } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function FYPInfo() {
  return <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6">
            <GraduationCap className="w-8 h-8 text-gray-900" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Final Year Project
          </h2>
          <p className="text-gray-600">
            Developed as a comprehensive academic capstone project demonstrating
            full-stack mobile development capabilities.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FadeIn delay={0.1}>
            <div className="p-6">
              <Code className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Technical Proficiency
              </h3>
              <p className="text-sm text-gray-500">
                Advanced implementation of React Native and Firebase ecosystem.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-6">
              <Lightbulb className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-500">
                Integration of emerging AR and 360° technologies in retail.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-6">
              <BookOpen className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Research</h3>
              <p className="text-sm text-gray-500">
                Based on analysis of current e-commerce limitations and user
                needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>;
}