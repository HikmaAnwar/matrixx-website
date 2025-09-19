'use client';

export default function AboutServicesSection() {
  const services = [
    {
      id: '01',
      title: 'Management Report',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: '360',
      title: 'Enterprise Service',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '24/7',
      title: 'Customer Service',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-40">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gray-100 rounded-2xl p-6 card-hover group h-80 flex flex-col"
            >
              {/* Service Title */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[#464646]">
                  Our Services{' '}
                  <span className="font-script text-[#00ABB1]">{service.id}</span>
                </h3>
              </div>

              {/* Service Image */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <div className="w-32 h-32 bg-[#0B3A93] rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm font-bold mb-2">{service.title}</div>
                    <div className="text-xs opacity-80">Service Icon</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* View More Link */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">View More</span>
                <button className="w-8 h-8 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mt-8">
          <div className="flex space-x-2">
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
    </section>
  );
}
