'use client';

export default function ProductsContentSection() {
  return (
    <section className="py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 left-20 w-24 h-24 opacity-40">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex items-center gap-12">
          {/* Content Card */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              
              {/* View Product Button */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">View Product</span>
                <button className="w-8 h-8 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-96 bg-black rounded-3xl p-4 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* Phone Screen Content - Shopping/E-commerce Interface */}
                <div className="w-full h-full bg-gray-50 p-4">
                  <div className="space-y-3">
                    <div className="bg-blue-500 text-white p-2 rounded text-center text-sm font-bold">
                      Shopping Cart
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-orange-400 rounded"></div>
                          <div className="text-xs">Product 1</div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-400 rounded"></div>
                          <div className="text-xs">Product 2</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-teal-500 text-white p-2 rounded text-center text-xs">
                      Checkout
                    </div>
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
