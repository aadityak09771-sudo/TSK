import React, { useState } from 'react';
import { StudentSidebar } from '../components/dashboard/StudentSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
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
      <div className="min-h-screen bg-gradient-to-b from-[#fffdfc] to-[#fffaf7]">
      <StudentSidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      <div className="lg:pl-[220px] flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-100 p-4 sticky top-0 z-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-black">S</div>
            <span className="font-black text-gray-900">Siksha Kendra</span>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
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
