'use client';

import { useState, useEffect } from 'react';

export default function ServicesProductSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      phoneImage: '/assets/burger_phone.png',
      title: 'Innovation that defines trends and designing high-impact',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      phoneImage: '/assets/first_phone.png',
      title: 'Advanced Technology Solutions for Modern Businesses',
      description: 'Our cutting-edge technology solutions help businesses stay ahead of the competition. We deliver innovative products that transform how companies operate and serve their customers.',
      description2: 'With our expert team and state-of-the-art development processes, we ensure every solution meets the highest standards of quality and performance.'
    }
  ];

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };
  return (
    <>
      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .animate-slideInFromRight {
          animation: slideInFromRight 0.7s ease-in-out;
        }
      `}</style>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: '#F3F3F3' }}>
      {/* Product Pattern - Left Bottom */}
      <div className="absolute bottom-0 left-0 z-5">
        <img 
          src="/assets/product_pattern.svg" 
          alt="Product Pattern" 
          className="object-contain opacity-40"
          style={{ width: '300px', height: '300px' }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex items-center gap-20">
          {/* Mobile App Mockup */}
          <div className="w-2/5 flex justify-center relative">
            {/* Phone Image */}
            <div className="relative z-10">
              <img 
                src={slides[currentSlide].phoneImage} 
                alt="Mobile App Mockup" 
                className={`w-[450px] h-[600px] object-contain transition-all duration-700 ease-in-out transform hover:scale-105 ${isAnimating ? 'animate-slideInFromRight' : ''}`}
                onError={(e) => {
                  console.log('Image failed to load:', slides[currentSlide].phoneImage);
                  e.currentTarget.src = '/assets/first_phone.png'; // Fallback
                }}
              />
            </div>
          </div>

          {/* Content Card */}
          <div className="w-3/5">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <img src="/assets/service_logo.svg" alt="Our Product Logo" className="w-8 h-8" />
                <h2 className="text-lg md:text-xl font-bold text-[#464646]">Our Product</h2>
              </div>
              
              {/* Main Heading */}
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#464646] leading-tight">
                  Innovation that{' '}
                  <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">defines trends</span>{' '}
                  and{' '}
                  <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">designing high-impact</span>
                </h3>
              </div>
              
              {/* Body Text */}
              <div className="space-y-4 mb-8 h-48 overflow-hidden">
                <p className="text-gray-600 leading-relaxed text-lg transition-all duration-500">
                  {slides[currentSlide].description}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg transition-all duration-500">
                  {slides[currentSlide].description2}
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium text-lg">View Product</span>
                <img 
                  src="/assets/Explore More.svg" 
                  alt="Explore More" 
                  className="w-10 h-10 hover:opacity-80 transition-opacity duration-200"
                />
              </div>
            </div>
            
            {/* Navigation Arrows - Right Tip */}
            <div className="flex space-x-2 justify-end mt-4">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
