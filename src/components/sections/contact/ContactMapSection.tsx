'use client';

export default function ContactMapSection() {
  return (
    <section className="pt-20 relative w-full" style={{ backgroundColor: '#F3F3F3' }}>
      <div className="relative z-10">
        {/* Map Container */}
        <div className="relative">
          {/* Google Maps Embed */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d38.7636!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f1234567890%3A0x1234567890abcdef!2sDembel%20City%20Center%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            
            {/* Location Card Overlay - Matching the image exactly */}
            <div className="absolute top-4 left-4 bg-[#0B3A93] text-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="space-y-1">
                <h3 className="font-bold text-base">Matrix Technology 4th Floor, Dembel</h3>
                <p className="text-xs opacity-90">Dembel City Center</p>
                <p className="text-xs opacity-90">Addis Ababa, Ethiopia</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mt-2">
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-star)" />
                      <defs>
                        <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="50%" stopColor="#FCD34D" />
                          <stop offset="50%" stopColor="#E5E7EB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-xs font-medium">4.5</span>
                </div>
                
                {/* View Location Button */}
                <button className="mt-2 bg-white text-[#0B3A93] px-3 py-1 rounded-lg flex items-center space-x-1 hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-xs font-medium">View Location</span>
                  <div className="w-4 h-4 bg-[#00ABB1] rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
