'use client';

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex gap-12">
          {/* Contact Information - Left Side */}
          <div className="flex-1 space-y-8">
            {/* Call Center */}
            <div>
              <h3 className="text-xl font-bold text-[#464646] mb-4">Call Center</h3>
              <div className="space-y-2">
                <p className="text-gray-600">+2519111111111</p>
                <p className="text-gray-600">+2519111111111111</p>
                <p className="text-gray-600">+251111700000</p>
              </div>
            </div>

            {/* Our Office */}
            <div>
              <h3 className="text-xl font-bold text-[#464646] mb-4">Our Office</h3>
              <div className="space-y-1">
                <p className="text-gray-600">4th Floor, Room No-401</p>
                <p className="text-gray-600">Dembel City Center</p>
                <p className="text-gray-600">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl font-bold text-[#464646] mb-4">Email</h3>
              <div className="space-y-2">
                <p className="text-gray-600">info@matrix.et</p>
                <p className="text-gray-600">Contact@matrix.et</p>
              </div>
            </div>

            {/* Social Network */}
            <div>
              <h3 className="text-xl font-bold text-[#464646] mb-4">Social Network</h3>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ABB1] focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ABB1] focus:border-transparent"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ABB1] focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ABB1] focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button className="bg-[#00ABB1] text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-[#0B3A93] transition-colors duration-200">
                    <span>Submit</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
