import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export function FinalCTA() {
  return <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
        >
          <FadeIn>
            <motion.h2 
              className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Experience <br /> Virtual Shopping?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Download Shop360° today and step into the future of retail.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button href="https://play.google.com" icon={<Download className="w-5 h-5" />} className="w-full sm:w-auto">
                Download on Play Store
              </Button>
            </motion.div>
          </FadeIn>
        </motion.div>
      </div>
    </section>;
}