import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-6">
          <Logo light />
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading the way in digital education. Join thousands of students 
            mastering their subjects with our expert-led courses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 list-none p-0">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
            <li><Link to="/board-cbse" className="text-gray-400 hover:text-white transition-colors text-sm">Boards</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-bold mb-6">Support & Legal</h4>
          <ul className="space-y-4 list-none p-0">
            <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs</Link></li>
            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold mb-6">Support</h4>
          <p className="text-gray-400 text-sm mb-2">Have questions? Reach out to us:</p>
          <a href="mailto:support@sikshakendra.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
            support@sikshakendra.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Siksha Kendra. All rights reserved.</p>
      </div>
    </footer>
  );
};
