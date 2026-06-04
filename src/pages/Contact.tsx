import React from 'react';
import { Mail, Phone, MapPin, Send, User, BookOpen, GraduationCap, Target, MessageSquare } from 'lucide-react';

interface ContactProps {
  isDashboard?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDashboard = false }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
  };

  return (
    <div className={`w-full bg-transparent ${isDashboard ? '' : 'px-4 sm:px-6 lg:px-8 py-8 lg:py-12'}`}>
      <div className="max-w-[1200px] mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 bg-white rounded-[32px] p-6 sm:p-10 relative overflow-hidden shadow-sm border border-gray-100">
          
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-[250px] h-[180px] bg-[#ff6b00]/10 rounded-br-[120px] pointer-events-none" />
          
          {/* Top Right Decorative Dots */}
          <div 
            className="absolute top-10 right-10 w-24 h-24 opacity-20 pointer-events-none hidden md:block" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b00 2px, transparent 0)', 
              backgroundSize: '16px 16px' 
            }} 
          />

          {/* Left Column: Contact Info */}
          <div className="relative z-10 flex flex-col">
            <h1 className="text-[38px] lg:text-[56px] font-[800] text-[#0a2458] leading-tight">
              Get in <span className="text-[#ff6b00]">Touch</span>
            </h1>
            <div className="w-[70px] h-[4px] bg-[#ff6b00] rounded-full mt-2.5" />
            
            <p className="text-[17px] leading-[1.8] text-slate-500 mt-5 mb-10 pr-0 lg:pr-8">
              Have questions about our courses, pricing, or your academic journey? Our expert team is ready to help you out.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a href="mailto:support@sikshakendra.com" className="flex items-center gap-5 p-3 -ml-3 rounded-2xl hover:bg-[#fff4ec]/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="w-16 h-16 bg-[#fff4ec] group-hover:bg-[#ff6b00] rounded-[18px] flex items-center justify-center text-[#ff6b00] group-hover:text-white shrink-0 transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Email Us</span>
                  <h4 className="text-lg font-bold text-[#0a2458] group-hover:text-[#ff6b00] transition-colors duration-300">support@sikshakendra.com</h4>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919876543210" className="flex items-center gap-5 p-3 -ml-3 rounded-2xl hover:bg-[#fff4ec]/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="w-16 h-16 bg-[#fff4ec] group-hover:bg-[#ff6b00] rounded-[18px] flex items-center justify-center text-[#ff6b00] group-hover:text-white shrink-0 transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Call Us</span>
                  <h4 className="text-lg font-bold text-[#0a2458] group-hover:text-[#ff6b00] transition-colors duration-300">+91 98765 43210</h4>
                </div>
              </a>

              {/* Location */}
              <a href="https://maps.google.com/?q=Sector+62,+Noida,+India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-3 -ml-3 rounded-2xl hover:bg-[#fff4ec]/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="w-16 h-16 bg-[#fff4ec] group-hover:bg-[#ff6b00] rounded-[18px] flex items-center justify-center text-[#ff6b00] group-hover:text-white shrink-0 transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Our Center</span>
                  <h4 className="text-lg font-bold text-[#0a2458] group-hover:text-[#ff6b00] transition-colors duration-300">Sector 62, Noida, India</h4>
                </div>
              </a>
            </div>

            {/* Quote Card */}
            <div className="mt-[30px] bg-[#fff4ec] rounded-[24px] p-7 italic text-[#ff6b00] font-medium leading-relaxed relative">
              "We strive to respond to all inquiries within 24 hours. Your academic journey is our priority."
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative z-10 flex items-center">
            <form onSubmit={handleSubmit} className="w-full bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col gap-4 sm:gap-5">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative">
                  <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#ff6b00] pointer-events-none">
                    <User size={20} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    className="w-full h-[58px] border border-[#e8e8e8] rounded-[14px] pl-[48px] pr-[18px] bg-white focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 outline-none transition-all text-gray-700" 
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#ff6b00] pointer-events-none">
                    <Phone size={20} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    className="w-full h-[58px] border border-[#e8e8e8] rounded-[14px] pl-[48px] pr-[18px] bg-white focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 outline-none transition-all text-gray-700" 
                  />
                </div>
              </div>

              {/* Row 2: Board & Class */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative">
                  <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#ff6b00] pointer-events-none">
                    <BookOpen size={20} />
                  </div>
                  <select 
                    required
                    className="w-full h-[58px] border border-[#e8e8e8] rounded-[14px] pl-[48px] pr-[18px] bg-white focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 outline-none transition-all text-gray-500 cursor-pointer appearance-none"
                  >
                    <option value="" disabled selected hidden>Select Board</option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE</option>
                    <option value="state">State Board</option>
                  </select>
                </div>
                
                <div className="relative">
                  <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#ff6b00] pointer-events-none">
                    <GraduationCap size={20} />
                  </div>
                  <select 
                    required
                    className="w-full h-[58px] border border-[#e8e8e8] rounded-[14px] pl-[48px] pr-[18px] bg-white focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 outline-none transition-all text-gray-500 cursor-pointer appearance-none"
                  >
                    <option value="" disabled selected hidden>Select Class</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="dropper">Dropper</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Course */}
              <div className="relative">
                <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#ff6b00] pointer-events-none">
                  <Target size={20} />
                </div>
                <select 
                  required
                  className="w-full h-[58px] border border-[#e8e8e8] rounded-[14px] pl-[48px] pr-[18px] bg-white focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 outline-none transition-all text-gray-500 cursor-pointer appearance-none"
                >
                  <option value="" disabled selected hidden>Select Interested Course</option>
                  <option value="jee">JEE Main & Advanced</option>
                  <option value="neet">NEET UG</option>
                  <option value="cuet">CUET Test Series</option>
                  <option value="foundation">Foundation (9th & 10th)</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div className="relative">
                <div className="absolute left-[18px] top-[18px] text-[#ff6b00] pointer-events-none">
                  <MessageSquare size={20} />
                </div>
                <textarea 
                  placeholder="Write your message here..." 
                  required
                  className="w-full min-h-[130px] resize-none pt-[18px] pl-[48px] pr-[18px] border border-[#e8e8e8] rounded-[14px] bg-white focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 outline-none transition-all text-gray-700"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full h-[60px] mt-2 bg-[#ff6b00] text-white rounded-[14px] font-[700] hover:bg-[#e55d00] hover:-translate-y-[2px] shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 text-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
