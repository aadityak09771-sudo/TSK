import React from 'react';
import { Search, ChevronDown, Download, Bell, UserCircle, Menu } from 'lucide-react';

interface DashboardHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  toggleSidebar: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  searchQuery, 
  onSearchChange,
  toggleSidebar 
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100 h-20 shadow-sm">
      <div className="px-4 md:px-8 h-full flex items-center justify-between gap-4 md:gap-8">
        {/* Left: Hamburger & Logo & Class Dropdown */}
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center text-white font-black text-xl">S</div>
            <span className="text-xl font-black text-gray-900 tracking-tight hidden sm:block">Siksha Kendra</span>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors group">
            <span className="text-sm font-black text-gray-700">11th - IIT JEE</span>
            <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
          </div>
        </div>

        {/* Center: Search */}
        <div className="flex-grow max-w-2xl relative group hidden md:block">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary)] transition-colors">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for courses, targets..." 
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 pl-11 pr-4 text-sm font-bold outline-none focus:bg-white focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-500/5 transition-all"
          />
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden xl:flex items-center gap-2 text-xs font-black text-gray-600 hover:text-[var(--color-primary)] px-4 py-2 transition-colors">
            <Download size={18} />
            Download App
          </button>
          
          <div className="w-px h-6 bg-gray-200 hidden md:block mx-2"></div>

          <button className="p-2 text-gray-400 hover:text-[var(--color-primary)] relative">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Hi, Student</p>
              <p className="text-xs font-black text-gray-900">My Profile</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all shadow-sm">
              <UserCircle size={26} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
