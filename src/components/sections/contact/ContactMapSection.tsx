'use client';

export default function ContactMapSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Map Container */}
        <div className="relative">
          {/* Map Placeholder */}
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="text-gray-400 text-lg">Interactive Map</div>
            
            {/* Location Card Overlay */}
            <div className="absolute top-6 left-6 bg-[#0B3A93] text-white p-6 rounded-lg shadow-lg max-w-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-lg">Matrix Technology</h3>
                <p className="text-sm">4th Floor, Dembel</p>
                <p className="text-sm">Dembel City Center</p>
                <p className="text-sm">Addis Ababa, Ethiopia</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mt-4">
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">4.5</span>
                </div>
                
                {/* View Location Button */}
                <button className="mt-4 bg-white text-[#0B3A93] px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-sm font-medium">View Location</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
