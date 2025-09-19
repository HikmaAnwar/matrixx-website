'use client';

import { useState } from 'react';

export default function MobileAppSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      phoneImage: '/assets/phone1.png',
      title: 'Innovation that defines trends and designing high-impact',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      phoneImage: '/assets/phone1.png', // You can add different phone images
      title: 'Advanced Technology Solutions for Modern Businesses',
      description: 'Our cutting-edge technology solutions help businesses stay ahead of the competition. We deliver innovative products that transform how companies operate and serve their customers.',
      description2: 'With our expert team and state-of-the-art development processes, we ensure every solution meets the highest standards of quality and performance.'
    },
    {
      phoneImage: '/assets/phone1.png', // You can add different phone images
      title: 'Revolutionary Mobile Applications That Drive Success',
      description: 'Experience the power of mobile-first design with our revolutionary applications. Built for performance, designed for user experience, and optimized for business growth.',
      description2: 'Our mobile solutions combine beautiful design with powerful functionality, creating apps that users love and businesses rely on for their digital transformation.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0B3A93' }}>
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-20">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/2 left-10 w-16 h-16 opacity-15">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Mockup */}
          <div className="relative -ml-16">
            {/* Ellipse Pattern Background */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img 
                src="/assets/Ellipse 14.svg" 
                alt="Ellipse Pattern" 
                className="w-3/4 h-3/4 object-contain opacity-30"
              />
            </div>
            {/* Product Pattern - Bottom Corner */}
            <div className="absolute bottom-0 left-0 z-5">
              <img 
                src="/assets/product_pattern.svg" 
                alt="Product Pattern" 
                className="object-contain opacity-40"
                style={{ width: '120px', height: '120px' }}
              />
            </div>
            {/* Phone Image */}
            <div className="relative z-10">
              <img 
                src={slides[currentSlide].phoneImage} 
                alt="Mobile App Mockup" 
                className="mx-auto object-contain transition-all duration-500"
                style={{ width: '280px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Content Card */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-2xl" style={{ width: '700px' }}>
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <img src="/assets/service_logo.svg" alt="Our Product Logo" className="w-8 h-8" />
                <h2 className="text-lg md:text-xl font-bold text-[#464646]">Our Product</h2>
              </div>
              
              {/* Main Heading */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#464646] mb-8 leading-tight transition-all duration-500">
                {slides[currentSlide].title}
              </h3>
              
              {/* Body Text */}
              <div className="space-y-4 mb-8">
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
  );
}
