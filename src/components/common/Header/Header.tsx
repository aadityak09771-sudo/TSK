import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { useAuthStore } from '../../../store/useAuthStore';
import { Button } from '../../ui/Button';
import { Spinner } from '../../ui/Spinner/Spinner';
import { Logo } from '../Logo';
import './Header.css'

export const Header: React.FC = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('school-boards');
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const openAuthModal = useAuthStore(state => state.openAuthModal);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/index.html');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    //TODO: complete the API integration and move it to another file
    const fetchAllCategories = async () => {
      setIsLoading(true);
      // Mock API call simulation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const data = [
        {
          id: "school-boards",
          label: "School Boards",
          sectionTitle: "Available Boards",
          options: [
            { id: "cbse-arts", name: "CBSE Arts", path: "/category?board=cbse-arts" },
            { id: "cbse-science", name: "CBSE Science", path: "/category?board=cbse-science" },
            { id: "cbse-commerce", name: "CBSE Commerce", path: "/category?board=cbse-commerce" },
          ],
        },
      ];
      
      setCategories(data);
      setIsLoading(false);
    };
    
    fetchAllCategories();
  }, []);

  return (
    <header className="header-public">
      <div className="container header-content">
        {/* Brand & All Categories */}
        <div className="header-logo-container">
          <Logo />
        </div>

        {/* Center/Main Navigation (Desktop) */}
        <nav className="main-nav">
          <ul className="nav-list">
            <li 
                className="category-list-item"
                onMouseEnter={() => setShowAllCategories(true)}
                onMouseLeave={() => setShowAllCategories(false)}
              >
                <button className="all-categories-button">
                  All Categories <ChevronDown size={16} className={`all-categories-chevron ${showAllCategories ? 'rotate-180' : ''} `} />
                </button>
                
                {showAllCategories && (
                  <div className="all-categories-dropdown-wrapper">
                    <div className="dropdown-menu">
                      {isLoading ? (
                        <Spinner text="Loading categories..." className="w-full h-full" />
                      ) : categories.length > 0 ? (
                        <>
                          {/* Left Side: Categories */}
                          <div className="dropdown-sidebar">
                            <h3 className="dropdown-title">Categories</h3>
                            {categories.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActiveCategory(category.id)}
                                className={`dropdown-item ${
                                  activeCategory === category.id 
                                    ? 'bg-white text-[var(--color-primary)] shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                              >
                                {category.label}
                                <ChevronRight size={14} className={activeCategory === category.id ? 'opacity-100' : 'opacity-0'} />
                              </button>
                            ))}
                          </div>

                          {/* Right Side: Options */}
                          <div className="dropdown-options-container">
                            <h3 className="dropdown-title">
                              {categories.find(category => category.id === activeCategory)?.sectionTitle}
                            </h3>
                            <div className="options-grid">
                              {categories.find(category => category.id === activeCategory)?.options.map((option: any) => (
                                <Link
                                  key={option.id}
                                  to={option.path}
                                  className="dropdown-link"
                                  onClick={() => setShowAllCategories(false)}
                                >
                                  {option.name}
                                  <div className="dropdown-link-icon">
                                    <ChevronRight size={12} />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                )}
              </li>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${
                  isActive('/') ? 'nav-link-active' : 'nav-link-inactive'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="active-indicator" />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${
                  isActive('/about') ? 'nav-link-active' : 'nav-link-inactive'
                }`}
              >
                About Us
                {isActive('/about') && (
                  <span className="active-indicator" />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${
                  isActive('/contact') ? 'nav-link-active' : 'nav-link-inactive'
                }`}
              >
                Contact Us
                {isActive('/contact') && (
                  <span className="active-indicator" />
                )}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
            <Button type="button" variant="primary" size="sm" onClick={openAuthModal} className="auth-button">
                Login / Register
            </Button>
            <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} />
      
      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <Logo />
          <button className="close-menu" onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <div className="mobile-nav-item-collapsible">
                <button 
                  className="mobile-nav-link collapsible-trigger"
                  onClick={() => setShowAllCategories(!showAllCategories)}
                >
                  All Categories <ChevronDown size={16} className={showAllCategories ? 'rotate-180' : ''} />
                </button>
                {showAllCategories && (
                  <div className="mobile-categories-content">
                    {isLoading ? (
                      <Spinner text="Loading..." className="p-4" />
                    ) : (
                      categories.map(category => (
                        <div key={category.id} className="mobile-category-group">
                          <h4 className="mobile-category-title">{category.label}</h4>
                          <div className="mobile-category-options">
                            {category.options.map((option: any) => (
                              <Link 
                                key={option.id} 
                                to={option.path} 
                                className="mobile-category-link"
                                onClick={toggleMenu}
                              >
                                {option.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
          
          <div className="mobile-sidebar-actions">
            <Button type="button" variant="primary" size="lg" onClick={() => { openAuthModal(); toggleMenu(); }} className="w-full">
                Login / Register
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );

};
