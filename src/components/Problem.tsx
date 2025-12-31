import React from 'react';
import { EyeOff, MapPin, Clock, ShoppingBag } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
const problems = [{
  icon: <EyeOff className="w-6 h-6" />,
  title: 'Limited Visualization',
  description: 'Static images and videos fail to provide a true sense of product scale, texture, and detail.'
}, {
  icon: <MapPin className="w-6 h-6" />,
  title: 'Expensive Showrooms',
  description: 'Businesses spend fortunes on physical locations that reach only a local audience.'
}, {
  icon: <Clock className="w-6 h-6" />,
  title: 'Time Consuming',
  description: 'Physical store visits require travel time and effort, often with limited operating hours.'
}, {
  icon: <ShoppingBag className="w-6 h-6" />,
  title: 'Lack of Trust',
  description: "Online shoppers often hesitate because they can't fully inspect the product before buying."
}];
export function Problem() {
  return <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Challenge
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Traditional e-commerce and physical retail both have significant
            limitations in today's fast-paced world.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 shadow-sm mb-6 border border-gray-100">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </FadeIn>)}
        </div>
      </div>
    </section>;
}