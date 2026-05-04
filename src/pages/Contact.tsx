import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <section className="py-5">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Card */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 underline decoration-[var(--color-primary)] decoration-4 underline-offset-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:support@sikshakendra.com" className="text-xl font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                      support@sikshakendra.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <a href="tel:+919876543210" className="text-xl font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                      +91 9876 543 210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Our Center</p>
                    <p className="text-lg text-gray-700 font-medium">
                      Sector 62, Noida,<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 italic text-gray-600">
              "We strive to respond to all inquiries within 24 hours. Your academic journey is our priority."
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white p-10 pt-5 rounded-[40px] shadow-2xl shadow-blue-500/5 border border-gray-100">
            {/* <h3 className="text-2xl font-bold mb-8">Send a Message</h3> */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone</label>
                  <input type="tel" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Course of Interest</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none">
                  <option>Class 12th Board Mastery Course</option>
                  <option>Class 11th Foundation Course</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none min-h-[150px]" placeholder="How can we help you?"></textarea>
              </div>
              <Button variant="solid" className="w-full py-5 text-base uppercase tracking-widest">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
