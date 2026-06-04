import React from 'react';
import { MentorshipBanner } from '../components/common/MentorshipBanner';
import { Target, Binoculars, Lightbulb, Book, Brain, Zap, CheckCircle2, TrendingUp } from 'lucide-react';

interface AboutProps {
  isDashboard?: boolean;
}

export const About: React.FC<AboutProps> = ({ isDashboard = false }) => {
    return (
    <div className={`w-full bg-transparent ${isDashboard ? '' : 'px-4 sm:px-6 lg:px-8 py-8 lg:py-12'}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="relative bg-[#fffaf6] rounded-[30px] p-6 lg:p-[50px] overflow-hidden border border-orange-50/50 shadow-sm">
        {/* Decorative Background Elements */}
        <div 
          className="absolute top-[30px] right-[30px] w-24 h-24 opacity-20 pointer-events-none hidden lg:block" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b00 2px, transparent 0)', backgroundSize: '16px 16px' }} 
        />
        <div 
          className="absolute bottom-[30px] left-[30px] w-32 h-32 opacity-20 pointer-events-none hidden lg:block" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b00 2px, transparent 0)', backgroundSize: '16px 16px' }} 
        />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#ff6b00]/5 rounded-full blur-[50px] pointer-events-none" />

        {/* Header Section */}
        <div className="relative z-10 flex flex-col items-center text-center mt-4">
          
          {/* Floating Icons (Animated & Hidden on mobile for neatness) */}
          <div className="hidden lg:flex absolute top-4 left-10 w-16 h-16 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] items-center justify-center text-[#ff6b00] animate-[bounce_3s_ease-in-out_infinite]">
            <Target size={28} />
          </div>
          <div className="hidden lg:flex absolute top-0 right-32 w-16 h-16 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] items-center justify-center text-[#ff6b00] animate-[bounce_3.5s_ease-in-out_infinite]">
            <Lightbulb size={28} />
          </div>
          <div className="hidden lg:flex absolute top-32 left-32 w-12 h-12 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] items-center justify-center text-[#ff6b00] animate-[bounce_4s_ease-in-out_infinite]">
            <Book size={20} />
          </div>

          <div className="inline-flex bg-[#ff6b00] text-white px-7 py-2.5 rounded-full text-[13px] font-[700] uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20">
            ABOUT
          </div>
          <h1 className="text-[38px] lg:text-[58px] font-[800] text-[#0a2458] mt-6 mb-4 leading-tight">
            Topper's <span className="text-[#ff6b00]">Siksha Kendra</span>
          </h1>
          <p className="text-[#64748b] text-[18px] max-w-2xl mx-auto leading-relaxed">
            Empowering students with concept-driven learning, practical applications, and consistent practice to achieve ultimate academic excellence.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 bg-white rounded-[30px] p-6 lg:p-[40px] mt-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-50">
          
          {/* Mission Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start py-8 border-b border-[#f1f1f1]">
            <div className="w-16 h-16 shrink-0 bg-[#fff8f2] rounded-[20px] flex items-center justify-center text-[#ff6b00]">
              <Target size={32} />
            </div>
            <div>
              <h3 className="text-2xl lg:text-[32px] font-[700] text-[#0a2458] mb-4">Our Mission</h3>
              <p className="text-[#64748b] leading-[1.8] text-[16px]">
                Our mission is to create a dynamic learning environment that transcends traditional education. We aim to nurture intellectual curiosity, equip students with robust academic foundations, and foster problem-solving skills that guarantee success in both board exams and highly competitive arenas.
              </p>
            </div>
          </div>

          {/* What Makes Us Different Section */}
          <div className="py-10 border-b border-[#f1f1f1]">
            <h3 className="text-2xl lg:text-[32px] font-[700] text-[#0a2458] mb-8 text-center md:text-left">What Makes Us Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[18px]">
              {[
                { icon: <Brain size={24} />, title: "Concept-first Teaching", desc: "We focus on the 'Why' and 'How' before the 'What'." },
                { icon: <Zap size={24} />, title: "Real-life Application", desc: "Connecting textbook theories to real-world scenarios." },
                { icon: <CheckCircle2 size={24} />, title: "Psychology Based", desc: "Adapting methods to match cognitive learning styles." },
                { icon: <TrendingUp size={24} />, title: "Consistent Practice", desc: "Rigorous test series and daily practice problems." }
              ].map((feature, idx) => (
                <div key={idx} className="group bg-[#fff8f2] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_15px_35px_rgba(255,107,0,0.15)] cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#ff6b00] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-[700] text-[#0a2458] mb-2 leading-tight">{feature.title}</h4>
                  <p className="text-[#64748b] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start pt-10">
            <div className="w-16 h-16 shrink-0 bg-[#fff8f2] rounded-[20px] flex items-center justify-center text-[#ff6b00]">
              <Binoculars size={32} />
            </div>
            <div>
              <h3 className="text-2xl lg:text-[32px] font-[700] text-[#0a2458] mb-4">Our Vision</h3>
              <p className="text-[#64748b] leading-[1.8] text-[16px]">
                We envision a future where every student has the clarity, confidence, and competence to achieve their dream careers. Topper's Siksha Kendra strives to be the cornerstone of educational excellence, shaping the leaders, innovators, and thinkers of tomorrow.
              </p>
            </div>
          </div>

        </div>
      </div>
      </div>
      
      {!isDashboard && (
        <div className="mt-12 max-w-[1200px] mx-auto">
          <MentorshipBanner />
        </div>
      )}
    </div>
  );
};