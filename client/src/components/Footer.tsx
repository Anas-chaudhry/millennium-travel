/* Design Philosophy: Dynamic Modernism with Cultural Fusion
 * - Organic curved divider at top
 * - Warm color scheme with brand colors
 * - Clear contact information and social presence
 */

import { Mail, Phone, Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2C3E50] to-[#006D77] text-white overflow-hidden">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            fill="#FFF8F0"
          />
        </svg>
      </div>

      <div className="container relative pt-20 md:pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FFB627] flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Millennium
                </h3>
                <p className="text-sm text-white/80">Travel Agency</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Your trusted partner for visa services and unforgettable travel experiences across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Destinations
            </h4>
            <ul className="space-y-2">
              {["Qatar", "Cambodia", "Indonesia", "Jordan", "Malaysia", "Morocco"].map((dest) => (
                <li key={dest}>
                  <a
                    href="#destinations"
                    className="text-white/80 hover:text-[#FFB627] transition-colors duration-300"
                  >
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFB627] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="tel:+97333238737"
                    className="block text-white/90 hover:text-[#FFB627] transition-colors duration-300"
                  >
                    +973 3323 8737
                  </a>
                  <a
                    href="tel:+923069513249"
                    className="block text-white/90 hover:text-[#FFB627] transition-colors duration-300"
                  >
                    +92 306 951 3249
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFB627] flex-shrink-0" />
                <a
                  href="mailto:Naveedgill156@gmail.com"
                  className="text-white/90 hover:text-[#FFB627] transition-colors duration-300 break-all"
                >
                  Naveedgill156@gmail.com
                </a>
              </div>
              <p className="text-white/80 text-sm mt-4">
                <strong>Contact Person:</strong> Naveed Gill
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Millennium Travel Agency. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-3xl -z-10 animate-float"></div>
    </footer>
  );
}
