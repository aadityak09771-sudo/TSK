import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useAuthStore } from '../../../store/useAuthStore';
import { Button } from '../../ui/Button';
import { Logo } from '../Logo';
import { Spinner } from '../../ui/Spinner/Spinner';
import './Header.css'

export const Header: React.FC = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState('school-boards');
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const openAuthModal = useAuthStore(state => state.openAuthModal);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/index.html');
  };

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
            { id: "cbse-arts", name: "CBSE Arts", path: "/board-cbse" },
            { id: "cbse-science", name: "CBSE Science", path: "/board-cbse" },
            { id: "cbse-commerce", name: "CBSE Commerce", path: "/board-cbse" },
          ],
        },
        {
          id: "competitive-exams",
          label: "Competitive Exams",
          sectionTitle: "Available Exams",
          options: [
            { id: "jee", name: "JEE", path: "/jee" },
            { id: "neet", name: "NEET", path: "/neet" },
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

          {/* Navigation */}
          {/* <nav className="header-nav">
            <ul className="all-categories-list">
              <li 
                className="category-list-item"
                onMouseEnter={() => setShowAllCategories(true)}
                onMouseLeave={() => setShowAllCategories(false)}
              >
                <button className="all-categories-button">
                  All Categories <ChevronDown size={6} className={`all-categories-chevron ${showAllCategories ? 'rotate-180' : ''} `} />
                </button>
                
                {showAllCategories && (
                  <div className="all-categories-dropdown-wrapper">
                    <div className="dropdown-menu">
                      {isLoading ? (
                        <Spinner text="Loading categories..." className="w-full h-full" />
                      ) : categories.length > 0 ? (
                        <>
                         
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
            </ul>
          </nav> */}
        </div>

        {/* Center/Main Navigation */}
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
        </div>
      </div>
    </header>
  );

};
