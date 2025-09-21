'use client';

export default function ContactFormSection() {
  return (
    <section className="pt-20 relative" style={{ backgroundColor: '#F3F3F3' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex gap-32">
          {/* Contact Information - Left Side */}
          <div className="w-1/2 space-y-8">
            {/* Top Paragraph */}
            <div className="pb-8 pt-8">
              <p className="text-gray-600 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-2 gap-8">
              {/* Call Center */}
              <div className="pb-8">
                <h3 className="text-xl font-bold text-black mb-4">Call Center</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">+2519111111111</p>
                  <p className="text-gray-600">+2519111111111111</p>
                  <p className="text-gray-600">+251111700000</p>
                </div>
              </div>

              {/* Our Office */}
              <div className="pb-8">
                <h3 className="text-xl font-bold text-black mb-4">Our Office</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">4th Floor, Room No-401</p>
                  <p className="text-gray-600">Dembel City Center</p>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Email</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">info@matrix.et</p>
                  <p className="text-gray-600">Contact@matrix.et</p>
                </div>
              </div>

              {/* Social Network */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Social Network</h3>
                <div className="flex space-x-4">
                  <button className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="w-1/2">
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #E6E6E63B, #EAEAEA1F, #00ABB133)' }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#464646] mb-2">Get Touch</h3>
                <p className="text-gray-600">Our Team Will Be In Touch Shortly.</p>
              </div>

              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-b-[#00ABB1] placeholder-gray-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-b-[#00ABB1] placeholder-gray-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-b-[#00ABB1] placeholder-gray-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#00ABB1] placeholder-gray-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">Submit</span>
                    <button className="w-6 h-6 bg-[#00ABB1] rounded flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                      <img src="/assets/Explore More.svg" alt="Explore More" className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
