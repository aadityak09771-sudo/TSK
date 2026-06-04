import React, { useState } from 'react';
import { StudentSidebar } from './StudentSidebar';
import { DashboardHeader } from './DashboardHeader';
import { Menu } from 'lucide-react';

interface StudentDashboardLayoutProps {
  children: React.ReactNode;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const StudentDashboardLayout: React.FC<StudentDashboardLayoutProps> = ({ 
  children, 
  searchQuery, 
  onSearchChange 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
      <div className="min-h-screen bg-gradient-to-b from-[#fffdfc] to-[#fffaf7] overflow-x-hidden">
      <StudentSidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      <div className="lg:pl-[220px] flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-[#eee] p-4 sticky top-0 z-50 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/dashboard'}>
            <img src="/assets/images/logo.png" alt="Logo" className="w-[35px] object-contain" onError={(e) => { e.currentTarget.src = "/assets/images/home/TKS.png" }} />
            <div className="flex flex-col leading-none justify-center">
              <span className="text-[10px] font-bold text-gray-500 mb-0.5">Topper's</span>
              <h2 className="text-[20px] font-[800] text-[#071b4d] leading-none m-0">
                Siksha<span className="text-[#ff6b00]">Kendra</span>
              </h2>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-[#5d6677] hover:bg-[#fff1e7] hover:text-[#ff6b00] rounded-lg transition-colors">
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Sticky Header */}
        <div className="hidden lg:block h-[80px] z-[60]">
          <DashboardHeader 
            searchQuery={searchQuery} 
            onSearchChange={onSearchChange} 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        <main className="flex-grow p-4 md:p-8 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
};
