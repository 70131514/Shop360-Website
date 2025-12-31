import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
export function FinalCTA() {
  return <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to Experience <br /> Virtual Shopping?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Download Shop360° today and step into the future of retail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="https://play.google.com" icon={<Download className="w-5 h-5" />} className="w-full sm:w-auto px-8 py-4 text-lg">
              Download on Play Store
            </Button>

            {/* Optional QR Code Placeholder */}
            <div className="hidden sm:flex items-center gap-4 pl-6 border-l border-gray-200">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-900 opacity-10"></div>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900">Scan to</p>
                <p className="text-xs text-gray-500">Download</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>;
}