'use client';

import { motion } from 'framer-motion';

export default function AboutHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-[#F3F3F3] relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img src="/assets/service_logo.svg" alt="About Us Logo" className="w-8 h-8" />
            <h2 className="text-lg md:text-xl font-bold text-[#464646]">About Us</h2>
          </div>
          
          {/* Mixed font headline */}
          <div className="mb-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#464646] leading-tight"
            >
              Innovation that{' '}
              <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl italic">defines trends</span>{' '}
              and{' '}
              <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl italic">designing high-impact</span>
            </motion.h1>
          </div>
          
        </div>
      </div>
    </section>
  );
}
