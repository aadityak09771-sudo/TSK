import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Library, 
  ShoppingBag, 
  X,
  LayoutDashboard,
  LogOut,
  Coins,
  MessageCircle,
  Info,
  ShieldCheck,
  Store
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

interface StudentSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  subtext?: string;
  isActive?: boolean;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
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
    {
      title: 'Learn Online',
      items: [
        { name: 'My Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
        { name: 'Library', icon: <Library size={20} />, path: '/library' },
        { name: 'My Purchases', icon: <ShoppingBag size={20} />, path: '/my-purchases' },
      ]
    },
    {
      title: 'Study Packs',
      items: [
        { name: 'Our Courses', icon: <Store size={20} />, path: '/dashboard/courses' },
      ]
    },
    {
      title: 'Support & Info',
      items: [
        { 
          name: 'Contact us', 
          icon: <MessageCircle size={20} />, 
          path: '/dashboard/contact',
          subtext: 'My issues'
        },
        { name: 'About us', icon: <Info size={20} />, path: '/dashboard/about' },
        { name: 'Privacy Policy', icon: <ShieldCheck size={20} />, path: '/dashboard/privacy' },
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
      <aside className={`fixed top-[80px] left-0 bottom-0 bg-[#f7f7f9] border-r border-[#eee] z-[120] w-[220px] transition-transform duration-300 transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto no-scrollbar shadow-sm lg:shadow-none`}>
        <div className="flex flex-col h-full p-4">
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
                      className={({ isActive }) => `flex items-center gap-3 px-4 h-[48px] rounded-[14px] mb-[12px] font-[600] transition-colors ${
                        isActive
                          ? 'bg-[#ffe7d7] text-[#ff7a21]' 
                          : 'bg-[#e8e8ec] text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                      onClick={() => {
                        if (window.innerWidth < 1024) toggleSidebar();
                      }}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="text-sm truncate">{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 h-[48px] rounded-[14px] font-[600] bg-[#e8e8ec] text-red-500 hover:bg-red-50 transition-all"
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
