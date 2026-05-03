import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useAuthStore } from '../../../store/useAuthStore';
import { Button } from '../../ui/Button';
import { Logo } from '../Logo';
import './Header.css'

export const Header: React.FC = () => {
  const [showAllAcategories, setShowAllAcategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState('School Boards');
  
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const logout = useAuthStore(state => state.logout);
  const openAuthModal = useAuthStore(state => state.openAuthModal);
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
    <header className="header-public">
      <div className="container header-content">
        {/* Brand & All Categories */}
        <div className="header-logo-container">
          <Logo />

          {/* Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="all-categories-list">
              <li 
                className="relative py-2"
                onMouseEnter={() => setShowAllAcategories(true)}
                onMouseLeave={() => setShowAllAcategories(false)}
              >
                <button className="all-categories-button">
                  All Categories <ChevronDown size={14} className={`all-categories-chevron ${showAllAcategories ? 'rotate-180' : ''} `} />
                </button>
                
                {showAllAcategories && (
                  <div className="all-categories-dropdown-wrapper">
                    <div className="dropdown-menu">
                      {/* Left Side: Categories */}
                      <div className="dropdown-sidebar">
                        <h3 className="dropdown-title">Categories</h3>
                        <button
                          onMouseEnter={() => setActiveCategory('School Boards')}
                          className={`dropdown-item ${
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
                        <h3 className="dropdown-title">Available Boards</h3>
                        <div className="grid gap-2">
                          {boardCategories[activeCategory as keyof typeof boardCategories].map((board) => (
                            <Link
                              key={board.name}
                              to={board.path}
                              className="dropdown-link"
                              onClick={() => setShowAllAcategories(false)}
                            >
                              {board.name}
                              <div className="dropdown-link-icon">
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
            </ul>
          </nav>
        </div>

        {/* Center/Main Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-10 list-none m-0 p-0">
            <li>
              <Link 
                to="/" 
                className={`text-[13px] font-bold transition-all relative py-1 hover:text-[var(--color-primary)] ${
                  isActive('/') ? 'text-[var(--color-primary)]' : 'text-gray-600'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full" />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className={`text-[13px] font-bold transition-all relative py-1 hover:text-[var(--color-primary)] ${
                  isActive('/courses') ? 'text-[var(--color-primary)]' : 'text-gray-600'
                }`}
              >
                Courses
                {isActive('/courses') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full" />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`text-[13px] font-bold transition-all relative py-1 hover:text-[var(--color-primary)] ${
                  isActive('/about') ? 'text-[var(--color-primary)]' : 'text-gray-600'
                }`}
              >
                About Us
                {isActive('/about') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full" />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`text-[13px] font-bold transition-all relative py-1 hover:text-[var(--color-primary)] ${
                  isActive('/contact') ? 'text-[var(--color-primary)]' : 'text-gray-600'
                }`}
              >
                Contact Us
                {isActive('/contact') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full" />
                )}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <div className="flex items-center gap-6">
              <Link to="/dashboard" className="text-[13px] font-bold text-gray-700 hover:text-[var(--color-primary)] transition-colors">
                My Dashboard
              </Link>
              <Button type="button" variant="outline" size="sm" onClick={logout} className="text-xs font-bold px-5">
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Button type="button" variant="primary" size="sm" onClick={openAuthModal} className="px-6 py-2.5 rounded-full font-bold text-xs">
                Login / Register
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );

};
