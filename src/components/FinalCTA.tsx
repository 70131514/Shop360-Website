import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
export function FinalCTA() {
  return <section className="py-24 bg-[#F5F5F5] dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-6 tracking-tight">
            Ready to Experience <br /> Virtual Shopping?
          </h2>
          <p className="text-xl text-[#666666] dark:text-[#999999] mb-10 max-w-2xl mx-auto">
            Download Shop360° today and step into the future of retail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="https://play.google.com" size="lg" className="w-full sm:w-auto gap-2">
              <Download className="w-5 h-5" />
              Download on Play Store
            </Button>

            {/* Optional QR Code Placeholder */}
            <div className="hidden sm:flex items-center gap-4 pl-6 border-l border-[#E0E0E0] dark:border-[#333333]">
              <div className="w-12 h-12 bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E0E0E0] dark:border-[#333333] rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-[#000000] dark:bg-[#FFFFFF] opacity-10 dark:opacity-20"></div>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#000000] dark:text-[#FFFFFF]">Scan to</p>
                <p className="text-xs text-[#666666] dark:text-[#999999]">Download</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>;
}