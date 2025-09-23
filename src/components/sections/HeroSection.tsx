'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { HERO_CONTENT } from '@/lib/constants';

// Lazy load Spline with better error handling
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function mHeroSection() {
  const [showCard, setShowCard] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSplineLoad = useCallback(() => {
    console.log('Spline scene loaded successfully');
    setSplineLoaded(true);
  }, []);

  const handleSplineError = useCallback((error: any) => {
    console.error('Spline error:', error);
    setSplineError(true);
  }, []);
  return (
    <section className="relative h-screen bg-[#F3F3F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full flex flex-col justify-center">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#464646] leading-tight"
              >
                Innovation that{' '}
                <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl">
                  defines trends
                </span>{' '}
                and designing{' '}
                <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl">
                  high-impact
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </motion.p>
            </div>

            {/* Note */}
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-gray-600 text-base leading-relaxed max-w-md text-left mt-16 mb-0"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </motion.p>

            {/* Explore More Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="flex items-center space-x-4 mt-2"
            >
              <span className="text-gray-700 font-medium">Explore More</span>
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>

            {/* Abstract Circles */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#00ABB1] rounded-full opacity-60"></div>
              <div className="absolute top-2 left-8 w-2 h-2 bg-[#0B3A93] rounded-full opacity-40"></div>
              <div className="absolute top-6 left-2 w-2.5 h-2.5 bg-[#00ABB1] rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Right Content - Hero Section Spline */}
          <div className="relative">
            {/* 3D Animation Container - Full visibility */}
            <div className="relative w-full h-[600px] lg:h-[700px] overflow-visible flex justify-end items-start mr-8 lg:mr-16">
              {splineError ? (
                // Fallback when Spline fails to load
                <div className="w-full h-full bg-gradient-to-br from-[#00ABB1] to-[#0B3A93] rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">3D Animation</h3>
                    <p className="text-sm opacity-80">Interactive Experience</p>
                    <button 
                      onClick={() => {
                        setSplineError(false);
                        setSplineLoaded(false);
                      }}
                      className="mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      Retry Loading
                    </button>
                  </div>
                </div>
              ) : (
                // Load Spline with scale transform and positioning
                <div className="w-full h-full transform scale-150 origin-top-right translate-x-32 lg:translate-x-64 -translate-y-8 lg:-translate-y-16">
                  <Spline
                    scene="https://prod.spline.design/E51XOAWnUdBbEzFZ/scene.splinecode"
                    className="w-full h-full"
                    onLoad={handleSplineLoad}
                    onError={handleSplineError}
                  />
                </div>
              )}
            </div>
            
            {/* Cards Section - Overlapping design */}
            <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-2xl shadow-lg mx-4 overflow-hidden transition-all duration-1000 ease-out ${
              showCard 
                ? 'opacity-100 transform translate-y-0 animate-slow-bounce' 
                : 'opacity-0 transform translate-y-8'
            }`}>
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Section - Our Latest Product */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#464646] mb-2">
                    Our Latest{' '}
                    <span className="font-script text-[#00ABB1]">Product</span>
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium text-sm">View Product</span>
                    <button className="w-8 h-8 bg-[#0B3A93] rounded-lg flex items-center justify-center hover:bg-[#00ABB1] transition-colors duration-200">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Section - MPOS */}
                <div className="bg-white p-4 text-[#464646] relative">
                  {/* Hero Slide Image */}
                  <div className="relative">
                    <img 
                      src="/assets/Hero Slide Image.png" 
                      alt="MPOS Dashboard" 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
