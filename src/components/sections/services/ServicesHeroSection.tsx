'use client';

import { motion } from 'framer-motion';

export default function ServicesHeroSection() {
  return (
    <section className="pt-32 pb-20 relative" style={{ backgroundColor: '#0B3A93' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img src="/assets/service_logo.svg" alt="Our Services Logo" className="w-8 h-8" />
            <h2 className="text-lg md:text-xl font-bold text-white">Our Services</h2>
          </div>
          
          {/* Mixed font headline */}
          <div className="mb-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Innovation that{' '}
              <span className="font-script text-[#00ABB1] text-5xl md:text-6xl lg:text-7xl italic">defines trends</span>{' '}
              and designing{' '}
              <span className="font-script text-[#00ABB1] text-5xl md:text-6xl lg:text-7xl italic">high-impact</span>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
