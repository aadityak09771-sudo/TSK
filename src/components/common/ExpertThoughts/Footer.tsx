import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "Courses", href: "/courses" },
  { title: "Study Packs", href: "/study-packs" },
  { title: "Test Series", href: "/test-series" },
  { title: "Expert Thoughts", href: "/insights" },
];

const supportLinks = [
  { title: "FAQs", href: "/faq" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Refund Policy", href: "/refund-policy" },
  { title: "Shipping Policy", href: "/shipping-policy" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-blob left"></div>
      <div className="footer-blob right"></div>
      <div className="footer-dots footer-dots-top"></div>
      <div className="footer-dots footer-dots-bottom"></div>

      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-column footer-brand">
          <div className="footer-logo-container">
            <img src="/assets/images/home/TKS.png" alt="Topper Siksha Kendra" className="footer-logo" />
            <span className="footer-brand-text">Topper's Siksha Kendra</span>
          </div>
          <p className="footer-tagline">
            India's Trusted Learning Platform
          </p>
          <div className="footer-contact-list">
            <div className="contact-item">
              <div className="footer-contact-icon"><Mail size={16} /></div>
              <span>support@sikhakendra.com</span>
            </div>
            <div className="contact-item">
              <div className="footer-contact-icon"><Phone size={16} /></div>
              <span>+91 12345 67890</span>
            </div>
            <div className="contact-item">
              <div className="footer-contact-icon"><MapPin size={16} /></div>
              <span>123, Education Hub, New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            {quickLinks.map(link => (
              <a key={link.title} href={link.href} className="footer-link">{link.title}</a>
            ))}
          </div>
        </div>

        {/* Column 3: Support & Legal */}
        <div className="footer-column">
          <h3 className="footer-title">Support & Legal</h3>
          <div className="footer-links">
            {supportLinks.map(link => (
              <a key={link.title} href={link.href} className="footer-link">{link.title}</a>
            ))}
          </div>
        </div>

        {/* Column 4: Social Links */}
        <div className="footer-column">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-links-list">
            <a href="#" className="social-item">
              <div className="social-icon"><FaInstagram size={18} /></div>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-item">
              <div className="social-icon"><FaFacebook size={18} /></div>
              <span>Facebook</span>
            </a>
            <a href="#" className="social-item">
              <div className="social-icon"><FaTelegram size={18} /></div>
              <span>Telegram</span>
            </a>
            <a href="#" className="social-item">
              <div className="social-icon"><FaTwitter size={18} /></div>
              <span>Twitter (X)</span>
            </a>
            <a href="#" className="social-item">
              <div className="social-icon"><FaYoutube size={18} /></div>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        © 2026 Topper Siksha Kendra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;