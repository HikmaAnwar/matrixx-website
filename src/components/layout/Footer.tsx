'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-2xl font-bold">Matrix</span>
            </div>
            <p className="text-gray-300">
              Innovation that defines trends and designing high-impact solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-teal-400 transition-colors">Products</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Service 01</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Service 02</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Service 03</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Service 04</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@matric.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Innovation St, Tech City</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Matrix. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
