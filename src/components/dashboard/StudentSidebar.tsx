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
                      className={({ isActive }) => `flex items-start gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                        isActive
                          ? 'bg-blue-50 text-[var(--color-primary)]' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      onClick={() => {
                        if (window.innerWidth < 1024) toggleSidebar();
                      }}
                    >
                      <span className="mt-0.5">{item.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-sm">{item.name}</span>
                        {item.subtext && (
                          <span className="text-[10px] font-medium text-gray-400 mt-0.5">
                            {item.subtext}
                          </span>
                        )}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
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
