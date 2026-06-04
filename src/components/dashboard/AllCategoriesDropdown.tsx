import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, GraduationCap, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';

const CLASSES = [
  { id: '9', name: 'CBSE Class 9th', path: '/category?class=9' },
  { id: '10', name: 'CBSE Class 10th', path: '/category?class=10' },
  { id: '11', name: 'CBSE Class 11th', path: '/category?class=11' },
  { id: '12', name: 'CBSE Class 12th', path: '/category?class=12' },
];

export const AllCategoriesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close on mobile/tablet
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      className="relative group" 
      ref={dropdownRef}
      onMouseEnter={() => window.innerWidth >= 1024 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-[#f3e5d8] rounded-xl text-[#0a2458] font-[700] hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#fffaf6] transition-all duration-300"
      >
        <LayoutGrid size={20} className="text-[#ff6b00]" />
        <span>All Categories</span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ff6b00]' : ''}`} />
      </button>

      {/* Dropdown Container */}
      <div 
        className={`
          absolute top-full left-0 mt-3 w-full min-w-[280px] lg:w-[750px] max-w-[90vw] bg-white rounded-[24px] border border-[#f3e5d8] shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-50 overflow-hidden flex flex-col lg:flex-row transition-all duration-[250ms] ease-out origin-top-left
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-[10px] invisible'}
        `}
      >
        
        {/* Left Panel (25%) */}
        <div className="w-full lg:w-[30%] bg-[#fffaf6] p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#f3e5d8]">
          <h3 className="flex items-center gap-2.5 text-[#0a2458] font-[800] text-lg mb-6">
            <LayoutGrid size={20} className="text-[#ff6b00]" />
            Categories
          </h3>
          
          <div className="bg-[#fff1e7] rounded-[20px] p-4 border border-[#ff6b00]/20 hover:bg-[#ffe5d3] transition-colors flex items-center gap-4 group/cat cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-[14px] bg-white flex items-center justify-center text-[#ff6b00] shadow-sm group-hover/cat:scale-110 transition-transform duration-300 shrink-0">
              <GraduationCap size={24} />
            </div>
            <span className="font-[800] text-[#ff6b00] text-[15px]">Choose Class</span>
          </div>
        </div>

        {/* Right Panel (75%) */}
        <div className="w-full lg:w-[70%] p-6 lg:p-8 bg-white">
          <h3 className="text-[#0a2458] font-[800] text-lg mb-6 flex items-center gap-2.5">
            <BookOpen size={20} className="text-[#ff6b00]" />
            Available Classes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CLASSES.map((cls) => (
              <Link 
                key={cls.id} 
                to={cls.path} 
                className="group/card flex items-center gap-4 p-2 pr-4 h-[72px] rounded-[16px] bg-white border border-[#f3e5d8] hover:border-[#ff6b00] hover:-translate-y-[4px] hover:shadow-[0_15px_30px_rgba(255,107,0,0.12)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-b from-[#ff8a33] to-[#ff6b00] flex items-center justify-center text-white font-[800] text-xl shrink-0 shadow-sm group-hover/card:shadow-md transition-shadow">
                  {cls.id}
                </div>
                <div className="flex-1 font-[800] text-[15px] text-[#0a2458] group-hover/card:text-[#ff6b00] transition-colors">
                  {cls.name}
                </div>
                <ChevronRight size={20} className="text-[#64748b] group-hover/card:text-[#ff6b00] group-hover/card:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};