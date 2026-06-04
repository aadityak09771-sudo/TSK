import React from 'react';
import { X, LogOut, Info, GraduationCap, BookOpen, ShieldCheck, Lock } from 'lucide-react';

interface LogoutModalProps {
  onClose: () => void;
  onLogout: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ onClose, onLogout }) => {
  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <style>{`
        @keyframes popup {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popup { animation: popup .3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        /* Custom Illustration CSS */
        .logout-illustration {
          position: relative;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          margin-bottom: 24px;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .door {
          width: 90px;
          height: 130px;
          background: linear-gradient(180deg, #ff8a33, #ff6b00);
          border-radius: 8px 8px 0 0;
          position: relative;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(255, 107, 0, 0.3);
          border: 4px solid white;
          border-bottom: none;
        }

        .door-knob {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          position: absolute;
          right: 12px;
          top: 60px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .illust-grad-cap {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-30%) rotate(15deg);
          z-index: 20;
          color: #0a2458;
          fill: white;
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.12));
        }

        .illust-book {
          position: absolute;
          bottom: 20px;
          left: 20%;
          color: #0a2458;
          background: white;
          padding: 10px;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          transform: rotate(-10deg);
          z-index: 15;
        }

        .illust-logout {
          position: absolute;
          bottom: 30px;
          right: 18%;
          color: #ff6b00;
          background: white;
          padding: 12px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(255, 107, 0, 0.15);
          z-index: 15;
          animation: floatRight 2s ease-in-out infinite;
        }

        .illust-shield {
          position: absolute;
          top: 20px;
          right: 15%;
          color: #cbd5e1;
          transform: rotate(15deg);
          opacity: 0.5;
        }

        .illust-lock {
          position: absolute;
          top: 40px;
          left: 15%;
          color: #cbd5e1;
          transform: rotate(-15deg);
          opacity: 0.5;
        }

        .illust-plant {
          position: absolute;
          bottom: 20px;
          left: 6%;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 5;
        }

        .plant-leaves {
          display: flex;
          margin-bottom: -6px;
          z-index: 2;
        }

        .leaf-left {
          width: 14px;
          height: 22px;
          background: #4ade80;
          border-radius: 20px 0 20px 0;
          transform: rotate(-45deg) translateX(4px);
        }

        .leaf-right {
          width: 14px;
          height: 22px;
          background: #22c55e;
          border-radius: 0 20px 0 20px;
          transform: rotate(45deg) translateX(-4px);
        }

        .plant-pot {
          width: 32px;
          height: 32px;
          background: #fff4eb;
          border: 2px solid #f3e5d8;
          border-radius: 4px 4px 10px 10px;
        }

        .illust-dots-1 {
          position: absolute;
          top: 20px;
          left: 20%;
          width: 60px;
          height: 60px;
          opacity: 0.3;
          background-image: radial-gradient(circle at 2px 2px, #ff6b00 2px, transparent 0);
          background-size: 12px 12px;
        }

        .illust-dots-2 {
          position: absolute;
          top: 40px;
          right: 10%;
          width: 80px;
          height: 80px;
          opacity: 0.2;
          background-image: radial-gradient(circle at 2px 2px, #0a2458 2px, transparent 0);
          background-size: 16px 16px;
        }

        .illust-curve {
          position: absolute;
          top: 45%;
          left: -10%;
          width: 120%;
          height: 60px;
          border-top: 3px dashed #f3e5d8;
          border-radius: 50%;
          z-index: 1;
        }

        .illust-floor {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20px;
          background: #f8fafc;
          border-top: 2px solid #f1f5f9;
          z-index: 1;
        }

        @keyframes floatRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
      `}</style>
      
      <div className="relative w-[480px] max-w-full bg-white rounded-[32px] p-6 md:p-8 shadow-2xl animate-popup text-center border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors"
        >
          <X size={20} />
        </button>

        <div className="logout-illustration">
          <div className="illust-dots-1"></div>
          <div className="illust-dots-2"></div>
          <div className="illust-curve"></div>
          <div className="illust-floor"></div>

          <div className="illust-plant">
            <div className="plant-leaves">
              <div className="leaf-left"></div>
              <div className="leaf-right"></div>
            </div>
            <div className="plant-pot"></div>
          </div>

          <ShieldCheck size={36} className="illust-shield" strokeWidth={2} />
          <Lock size={28} className="illust-lock" strokeWidth={2} />

          <div className="door">
            <div className="w-[50px] h-[70px] bg-white/20 absolute top-4 left-1/2 -translate-x-1/2 rounded-[4px] border border-white/30"></div>
            <div className="door-knob"></div>
          </div>

          <GraduationCap size={70} className="illust-grad-cap" />
          <BookOpen size={46} className="illust-book" />
          <LogOut size={48} className="illust-logout" strokeWidth={2.5} />
        </div>

        <h2 className="text-3xl font-[800] text-[#0a2458] leading-tight mb-2">
          Leaving so <span className="text-[#ff6b00]">soon?</span>
        </h2>

        <p className="text-[#64748b] text-[15px] max-w-[320px] mx-auto leading-relaxed">
          Are you sure you want to log out? You can always log back in to continue your learning journey.
        </p>

        <div className="mt-8 text-left border border-orange-100 bg-[#fff9f5] rounded-[20px] p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-white p-1.5 rounded-full shadow-sm shrink-0 text-[#ff6b00]">
               <Info size={16} />
            </div>
            <span className="text-[13px] text-[#0a2458] font-[600] mt-0.5 leading-relaxed">Your courses and progress are safely saved.</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-white p-1.5 rounded-full shadow-sm shrink-0 text-[#ff6b00]">
               <Info size={16} />
            </div>
            <span className="text-[13px] text-[#0a2458] font-[600] mt-0.5 leading-relaxed">No data will be lost after logging out.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button 
            onClick={onClose}
            className="flex-1 h-12 border-2 border-gray-200 bg-white text-gray-600 rounded-[14px] font-[700] hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onLogout}
            className="flex-1 h-12 bg-[#ff6b00] text-white rounded-[14px] font-[700] hover:bg-[#e65f00] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
          >
            <LogOut size={18} />
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};