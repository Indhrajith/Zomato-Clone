import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Zomato Branding */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-white">Zomato</h2>
          <p className="text-sm text-gray-400">Discover the best food & drinks in your city.</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Team</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition">Zomato</a></li>
            <li><a href="#" className="hover:text-white transition">Blinkit</a></li>
            <li><a href="#" className="hover:text-white transition">Feeding India</a></li>
            <li><a href="#" className="hover:text-white transition">Hyperpure</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2 text-white">Social</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Zomato Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
