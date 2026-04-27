import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Gamepad, 
  Library, 
  Zap, 
  Trophy, 
  GraduationCap, 
  MapPin, 
  ShoppingBag, 
  HelpCircle,
  X,
  LayoutDashboard,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

interface StudentSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarSection {
  title: string;
  items: {
    name: string;
    icon: React.ReactNode;
    path: string;
    isActive?: boolean;
  }[];
}

export const StudentSidebar: React.FC<StudentSidebarProps> = ({ isOpen, toggleSidebar }) => {
  const logout = useAuthStore(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    if (window.innerWidth < 1024) toggleSidebar();
  };
  
  const sections: SidebarSection[] = [
// ... (keep sections as they are)
    {
      title: 'Learn Online',
      items: [
        { name: 'Study', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
        { name: 'Practice', icon: <Gamepad size={20} />, path: '/practice' },
        { name: 'Library', icon: <Library size={20} />, path: '/library' },
      ]
    },
    {
      title: 'Study Packs',
      items: [
        { name: 'Batches', icon: <BookOpen size={20} />, path: '/batches', isActive: true },
        { name: 'Power Batch', icon: <Zap size={20} />, path: '/power-batch' },
        { name: 'Test Series', icon: <Trophy size={20} />, path: '/test-series' },
        { name: 'Scholarship', icon: <GraduationCap size={20} />, path: '/scholarship' },
      ]
    },
    {
      title: 'Offline',
      items: [
        { name: 'Centres', icon: <MapPin size={20} />, path: '/centres' },
      ]
    },
    {
      title: 'Explore',
      items: [
        { name: 'Store', icon: <ShoppingBag size={20} />, path: '/store' },
        { name: 'Help & Support', icon: <HelpCircle size={20} />, path: '/support' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[110] lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-20 left-0 bottom-0 bg-white border-r border-gray-100 z-[120] w-72 transition-transform duration-300 transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto no-scrollbar shadow-sm lg:shadow-none`}>
        <div className="flex flex-col h-full p-6">
          {/* Mobile Close Button */}
          <div className="lg:hidden flex justify-end mb-4">
            <button onClick={toggleSidebar} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
              <X size={24} />
            </button>
          </div>

          <nav className="flex-grow space-y-8 pt-2">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                        (isActive || (item.isActive && window.location.pathname === '/'))
                          ? 'bg-blue-50 text-[var(--color-primary)]' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      onClick={() => {
                        if (window.innerWidth < 1024) toggleSidebar();
                      }}
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-xs font-bold text-gray-500 mb-2">Need Help?</p>
              <p className="text-[10px] text-gray-400 leading-relaxed mb-3">Check our support center for any queries regarding your courses.</p>
              <button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                Visit Help Center
              </button>
            </div>

            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut size={20} />
              <span className="text-sm">Log Out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
