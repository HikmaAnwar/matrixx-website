'use client';

import { SERVICES } from '@/lib/constants';

export default function ServicesSection() {
  const serviceData = [
    {
      id: '1',
      title: 'Our Services ONE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: '2', 
      title: 'Our Services TWO',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '3',
      title: 'Our Services Three', 
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-45 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 right-0 w-60 h-34 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <img src="/assets/service_logo.svg" alt="Service Logo" className="w-12 h-12" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#464646]">Our Services</h2>
          </div>
          
          <div className="flex justify-between items-end">
            <p className="text-lg text-gray-600 max-w-3xl">
              We provide comprehensive solutions that drive innovation and deliver exceptional results for our clients across various industries. Our expert team combines cutting-edge technology with strategic thinking to transform your business challenges into opportunities for growth. From initial consultation to final implementation, we ensure every project meets the highest standards of quality and exceeds expectations.
            </p>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-2 ml-8">
              <button className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 rounded-2xl px-4 pt-4 pb-4 card-hover group h-56 flex flex-col"
            >
              <div className="flex flex-1">
                {/* Left Content */}
                <div className="flex-1 flex flex-col relative">
                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-[#464646] mb-3">
                    Our Services{' '}
                    <span className="font-script text-[#00ABB1]">
                      {service.id === '1' ? 'ONE' : service.id === '2' ? 'TWO' : 'THREE'}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* View More Link - Fixed position */}
                  <div className="absolute bottom-0 left-0 flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">View More</span>
                    <img 
                      src="/assets/Explore More.svg" 
                      alt="Explore More" 
                      className="w-8 h-8 hover:opacity-80 transition-opacity duration-200"
                    />
                  </div>
                </div>

                {/* Right Image */}
                <div className="ml-4 flex-shrink-0">
                  <img 
                    src={`/assets/service_img${service.id === '1' ? '' : service.id}.svg`}
                    alt={`Service ${service.id}`}
                    className="w-32 h-40 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
