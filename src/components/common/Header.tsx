import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, ChevronDown, ChevronRight } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useCartStore } from '../../store/useCartStore';
import { Button } from '../ui/Button';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [showAllAcategories, setShowAllAcategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState('School Boards');
  
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const logout = useAuthStore(state => state.logout);
  const openAuthModal = useAuthStore(state => state.openAuthModal);
  const totalCount = useCartStore(state => state.items.reduce((sum, i) => sum + i.quantity, 0));
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/index.html');
  };

  const boardCategories = {
    'School Boards': [
      { name: 'CBSE Arts', path: '/board-cbse' },
      { name: 'CBSE Science', path: '/board-cbse' },
      { name: 'CBSE Commerce', path: '/board-cbse' },
    ]
  };

  return (
    <header className="header sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Brand */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li 
              className="relative"
              onMouseEnter={() => setShowAllAcategories(true)}
              onMouseLeave={() => setShowAllAcategories(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[var(--color-primary)] bg-transparent border-none cursor-pointer py-8">
                All Categories <ChevronDown size={14} className={`transition-transform duration-200 ${showAllAcategories ? 'rotate-180' : ''}`} />
              </button>
              
              {showAllAcategories && (
                <div className="absolute left-0 top-full -mt-2 pt-2 z-50">
                  <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden flex min-w-[500px] h-[300px]">
                    {/* Left Side: Categories */}
                    <div className="w-2/5 bg-gray-50 border-r border-gray-100 p-4">
                      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-2">Categories</h3>
                      <button
                        onMouseEnter={() => setActiveCategory('School Boards')}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                          activeCategory === 'School Boards' 
                            ? 'bg-white text-[var(--color-primary)] shadow-sm' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        School Boards
                        <ChevronRight size={14} className={activeCategory === 'School Boards' ? 'opacity-100' : 'opacity-0'} />
                      </button>
                    </div>

                    {/* Right Side: Options */}
                    <div className="w-3/5 p-6">
                      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-2">Available Boards</h3>
                      <div className="grid gap-2">
                        {boardCategories[activeCategory as keyof typeof boardCategories].map((board) => (
                          <Link
                            key={board.name}
                            to={board.path}
                            className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[var(--color-primary)] transition-all flex items-center justify-between group/item"
                            onClick={() => setShowAllAcategories(false)}
                          >
                            {board.name}
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-[var(--color-primary)] flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <ChevronRight size={12} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link 
                to="/" 
                className={`text-sm font-semibold transition-colors hover:text-[var(--color-primary)] ${isActive('/') ? 'text-[var(--color-primary)]' : 'text-gray-600'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/batches" 
                className={`text-sm font-semibold transition-colors hover:text-[var(--color-primary)] ${isActive('/batches') ? 'text-[var(--color-primary)]' : 'text-gray-600'}`}
              >
                Batches
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`text-sm font-semibold transition-colors hover:text-[var(--color-primary)] ${isActive('/about') ? 'text-[var(--color-primary)]' : 'text-gray-600'}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`text-sm font-semibold transition-colors hover:text-[var(--color-primary)] ${isActive('/contact') ? 'text-[var(--color-primary)]' : 'text-gray-600'}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative p-2 text-gray-600 hover:text-[var(--color-primary)] transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalCount}
                </span>
              </Link>
              <Button type="button" variant="outline" size="sm" onClick={logout}>
                Log Out
              </Button>
            </div>
          ) : (
            <Button type="button" variant="primary" size="sm" onClick={openAuthModal} className="px-6 py-2 rounded-full font-bold">
              Register / Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
