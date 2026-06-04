import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Shield, 
  Database, 
  Lock, 
  Users, 
  Mail, 
  CalendarDays,
  Server,
  SlidersHorizontal
} from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Wrapper */}
        <div className="relative p-6 lg:p-8 rounded-[32px] bg-[#fffaf6] overflow-hidden border border-[#f3e5d8] shadow-sm">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#ff6b00]/5 rounded-full blur-[60px] pointer-events-none" />
          <div 
            className="absolute top-[30px] right-[30px] w-32 h-32 opacity-[0.15] pointer-events-none hidden md:block" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b00 2px, transparent 0)', 
              backgroundSize: '16px 16px' 
            }} 
          />

          {/* Page Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-[32px] lg:text-[42px] font-[800] text-[#0a2458] leading-tight">
                Privacy <span className="text-[#ff6b00]">Policy</span>
              </h1>
              <div className="flex items-center gap-2 text-[#64748b] mt-2">
                <CalendarDays size={16} />
                <span className="text-xs">Last updated: <span className="text-[#ff6b00] font-[700]">January 1, 2026</span></span>
              </div>
            </div>
            
            {/* Shield Illustration */}
            <div className="hidden md:flex w-[80px] h-[80px] shrink-0 items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 rounded-full border-[4px] border-white shadow-sm">
              <ShieldCheck size={40} className="text-[#ff6b00]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Top Hero Privacy Card */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 p-5 mt-6 bg-white rounded-[20px] border-l-[4px] border-l-[#ff6b00] border border-transparent shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,107,0,0.12)] hover:border-[#ff6b00]/20 transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-[#fff7f1] rounded-[14px] flex items-center justify-center text-[#ff6b00]">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-lg font-[800] text-[#0a2458] mb-1">We Value Your Privacy</h3>
              <p className="text-[#64748b] text-[13px] leading-relaxed">
                At Topper's Siksha Kendra, protecting your personal data is our top priority. We ensure your information is secure, handled responsibly, and only used to enhance your academic experience.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            
            {/* Row 1 */}
            <div className="flex gap-4 p-4 bg-white rounded-[16px] border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,107,0,0.12)] hover:border-[#ff6b00]/20 transition-all duration-300 h-full">
              <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-orange-100 text-[#ff6b00]">
                <Database size={20} />
              </div>
              <div>
                <h4 className="text-base font-[800] text-[#0a2458] mb-1">Data Collection</h4>
                <p className="text-[#64748b] text-[12px] leading-relaxed">We collect the information you provide during account creation, course enrollment, or support contact (name, email, board, class).</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-[16px] border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,107,0,0.12)] hover:border-[#ff6b00]/20 transition-all duration-300 h-full">
              <h4 className="text-sm font-[800] text-[#0a2458] mb-2 flex items-center gap-2"><Database size={16} className="text-[#ff6b00]" /> What We Collect</h4>
              <ul className="space-y-1.5 text-[12px] text-[#64748b] font-medium grid grid-cols-2">
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" /> Name & Contact</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" /> Grade & Course</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" /> Usage Data</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" /> Performance</li>
              </ul>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4 p-4 bg-white rounded-[16px] border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(34,197,94,0.15)] hover:border-green-500/20 transition-all duration-300 h-full">
              <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-green-100 text-green-600">
                <Server size={20} />
              </div>
              <div>
                <h4 className="text-base font-[800] text-[#0a2458] mb-1">Data Usage</h4>
                <p className="text-[#64748b] text-[12px] leading-relaxed">Your data is strictly used to provide, personalize, and improve our services, tailoring course recommendations to you.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-[16px] border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(34,197,94,0.15)] hover:border-green-500/20 transition-all duration-300 h-full">
              <h4 className="text-sm font-[800] text-[#0a2458] mb-2 flex items-center gap-2"><Lock size={16} className="text-green-500" /> How We Protect</h4>
              <ul className="space-y-1.5 text-[12px] text-[#64748b] font-medium grid grid-cols-2">
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Encrypted Storage</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Secure Servers</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Access Controls</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Routine Audits</li>
              </ul>
            </div>

            {/* Row 3 */}
            <div className="flex gap-4 p-4 bg-white rounded-[16px] border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(168,85,247,0.15)] hover:border-purple-500/20 transition-all duration-300 h-full">
              <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-purple-100 text-purple-600">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-base font-[800] text-[#0a2458] mb-1">User Rights</h4>
                <p className="text-[#64748b] text-[12px] leading-relaxed">You have complete control to access, modify, or permanently delete your account information at any time via settings.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-[16px] border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(168,85,247,0.15)] hover:border-purple-500/20 transition-all duration-300 h-full">
              <h4 className="text-sm font-[800] text-[#0a2458] mb-2 flex items-center gap-2"><SlidersHorizontal size={16} className="text-purple-500" /> Your Control</h4>
              <ul className="space-y-1.5 text-[12px] text-[#64748b] font-medium grid grid-cols-2">
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Access Data</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Update Info</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Delete Account</li>
                <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Opt-out Emails</li>
              </ul>
            </div>

          </div>

          {/* Contact Banner */}
          <div className="relative z-10 mt-6 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-5 bg-[#fff7f1] rounded-[20px] border border-[#ffeadd] hover:shadow-[0_10px_25px_rgba(255,107,0,0.08)] hover:-translate-y-1 transition-all duration-300 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-[14px] bg-white flex items-center justify-center text-[#ff6b00] shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-base font-[800] text-[#0a2458] mb-0.5">Have Questions?</h3>
                <p className="text-[#64748b] text-[13px]">Contact our data protection team anytime.</p>
              </div>
            </div>
            
            <Link 
              to="/dashboard/contact" 
              className="w-full sm:w-auto bg-[#ff6b00] text-white px-6 py-2.5 rounded-[12px] text-sm font-[700] hover:bg-[#e55f00] transition-colors whitespace-nowrap shadow-md shadow-orange-500/20 text-center"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};