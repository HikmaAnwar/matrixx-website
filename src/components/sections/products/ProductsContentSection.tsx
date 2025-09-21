'use client';

import { useState } from 'react';

export default function ProductsContentSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      phoneImage: '/assets/burger_phone.png',
      title: 'Innovation that defines trends and designing high-impact',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      phoneImage: '/assets/phone1.png',
      title: 'Advanced Technology Solutions for Modern Businesses',
      description: 'Our cutting-edge technology solutions help businesses stay ahead of the competition. We deliver innovative products that transform how companies operate and serve their customers.',
      description2: 'With our expert team and state-of-the-art development processes, we ensure every solution meets the highest standards of quality and performance.'
    },
    {
      phoneImage: '/assets/phone3.png',
      title: 'Innovation that defines trends and designing high-impact',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 relative" style={{ backgroundColor: '#F3F3F3' }}>
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-40">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-20 w-24 h-24 opacity-40">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Three Content Blocks */}
        <div className="space-y-20">
          {/* Block 1: Phone Left, Content Right */}
          <div className="flex items-center gap-20">
            {/* Mobile App Mockup */}
            <div className="w-2/5 flex justify-center">
              <img
                src={slides[0].phoneImage}
                alt="Mobile App Mockup"
                className="w-96 h-[500px] object-contain"
                onError={(e) => {
                  console.log('Image failed to load:', slides[0].phoneImage);
                  e.currentTarget.src = '/assets/phone1.png'; // Fallback
                }}
              />
            </div>

            {/* Content Card */}
            <div className="w-3/5">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Section Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/assets/service_logo.svg" alt="Our Product Logo" className="w-8 h-8" />
                  <h2 className="text-lg md:text-xl font-bold text-[#464646]">Our Product</h2>
                </div>
                
                {/* Mixed font headline */}
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#464646] leading-tight">
                    Innovation that{' '}
                    <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">defines trends</span>{' '}
                    and{' '}
                    <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">designing high-impact</span>
                  </h3>
                </div>
                
                {/* Content text */}
                <div className="mb-8">
                    <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                      {slides[currentSlide].description}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {slides[currentSlide].description2}
                    </p>
                </div>
                
                {/* View Product Button */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-gray-700 font-medium">View Product</span>
                  <button className="w-8 h-8 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-end space-x-2">
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

          {/* Block 2: Content Left, Phone Right */}
          <div className="flex items-center gap-20">
            {/* Content Card */}
            <div className="w-3/5">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Section Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/assets/service_logo.svg" alt="Our Product Logo" className="w-8 h-8" />
                  <h2 className="text-lg md:text-xl font-bold text-[#464646]">Our Product</h2>
                </div>
                
                {/* Mixed font headline */}
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#464646] leading-tight">
                    Innovation that{' '}
                    <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">defines trends</span>{' '}
                    and{' '}
                    <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">designing high-impact</span>
                  </h3>
                </div>
                
                {/* Content text */}
                <div className="mb-8">
                    <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                      {slides[currentSlide].description}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {slides[currentSlide].description2}
                    </p>
                </div>
                
                {/* View Product Button */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-gray-700 font-medium">View Product</span>
                  <button className="w-8 h-8 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-end space-x-2">
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

            {/* Mobile App Mockup */}
            <div className="w-2/5 flex justify-center">
              <img
                src={slides[1].phoneImage}
                alt="Mobile App Mockup"
                className="w-96 h-[500px] object-contain"
                onError={(e) => {
                  console.log('Image failed to load:', slides[1].phoneImage);
                  e.currentTarget.src = '/assets/phone1.png'; // Fallback
                }}
              />
            </div>
          </div>

          {/* Block 3: Phone Left, Content Right */}
          <div className="flex items-center gap-20">
            {/* Mobile App Mockup */}
            <div className="w-2/5 flex justify-center">
              <img
                src={slides[2].phoneImage}
                alt="Mobile App Mockup"
                className="w-[450px] h-[600px] object-contain"
                onError={(e) => {
                  console.log('Image failed to load:', slides[2].phoneImage);
                  e.currentTarget.src = '/assets/phone1.png'; // Fallback
                }}
              />
            </div>

            {/* Content Card */}
            <div className="w-3/5">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Section Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/assets/service_logo.svg" alt="Our Product Logo" className="w-8 h-8" />
                  <h2 className="text-lg md:text-xl font-bold text-[#464646]">Our Product</h2>
                </div>
                
                {/* Mixed font headline */}
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#464646] leading-tight">
                    Innovation that{' '}
                    <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">defines trends</span>{' '}
                    and{' '}
                    <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">designing high-impact</span>
                  </h3>
                </div>
                
                {/* Content text */}
                <div className="mb-8">
                    <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                      {slides[currentSlide].description}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {slides[currentSlide].description2}
                    </p>
                </div>
                
                {/* View Product Button */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-gray-700 font-medium">View Product</span>
                  <button className="w-8 h-8 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-end space-x-2">
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
        </div>
      </div>
    </section>
  );
}
