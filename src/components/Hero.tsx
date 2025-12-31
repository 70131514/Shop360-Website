import React from 'react';
import { Smartphone, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 pb-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gray-50 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gray-50 blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-600 mr-2"></span>
                Final Year Project 2024
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                Shop<span className="text-gray-400">360°</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl sm:text-2xl font-light text-gray-600 mb-2">
                See It. Try It. Buy It.
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience products virtually with advanced 360° and AR
                technology. The future of immersive shopping is here.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button href="https://play.google.com" icon={<Download className="w-5 h-5" />} className="w-full sm:w-auto">
                  Download on Play Store
                </Button>
                <Button variant="secondary" href="#how-it-works" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
            <FadeIn delay={0.5} direction="left">
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                  {/* Screen Content Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white flex flex-col">
                    {/* Status Bar */}
                    <div className="h-6 w-full bg-white/90 backdrop-blur-sm flex justify-between items-center px-4 text-[10px] font-medium text-gray-900">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-gray-900 rounded-full opacity-20"></div>
                        <div className="w-3 h-3 bg-gray-900 rounded-full opacity-20"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-8 pb-4">
                      <div className="h-8 w-8 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                        <Smartphone className="text-white w-4 h-4" />
                      </div>
                      <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 w-48 bg-gray-100 rounded"></div>
                    </div>

                    {/* App Content Skeleton */}
                    <div className="px-6 space-y-4">
                      <div className="h-40 w-full bg-gray-100 rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                          <span className="text-sm font-medium">360° View</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-32 bg-gray-50 rounded-xl"></div>
                        <div className="h-32 bg-gray-50 rounded-xl"></div>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="mt-auto h-16 bg-white border-t border-gray-100 flex justify-around items-center px-6">
                      <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-200"></div>
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