import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show header after 150px scroll
      if (scrollPosition > 150) {
        setIsVisible(true);
        setIsScrolled(true);
      } else {
        setIsVisible(false);
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isHomePage = location.pathname === '/';

  // Non-home pages par hamesha visible
  const shouldBeVisible = !isHomePage || isVisible;

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        shouldBeVisible
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      } ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-xl' 
          : 'bg-transparent'
      }`}
      style={{
        height: '70px'
      }}
    >
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative group z-50 flex items-center"
          >
            <img 
              src={logo} 
              alt="Brightstar Energy" 
              className="h-11 md:h-12 transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg overflow-hidden group ${
                    isActive
                      ? 'text-white'
                      : 'text-text hover:text-primary'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--color-primary)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(45, 95, 63, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Hover effect underline */}
                  {!isActive && (
                    <span 
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    ></span>
                  )}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md flex items-center space-x-2"
              style={{
                backgroundColor: 'var(--color-secondary)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-secondary-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(243, 156, 18, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <i className="fas fa-paper-plane text-xs"></i>
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none z-50 transition-all"
            style={{
              backgroundColor: isMenuOpen 
                ? 'var(--color-primary)' 
                : 'rgba(45, 95, 63, 0.1)'
            }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'bg-white rotate-45 translate-y-2' 
                    : 'bg-primary'
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'bg-white opacity-0' 
                    : 'bg-primary'
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'bg-white -rotate-45 -translate-y-2' 
                    : 'bg-primary'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute left-0 right-0 top-full overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container py-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <ul className="py-2">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between px-6 py-3.5 text-base font-semibold transition-all duration-300 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-text'
                        }`}
                        style={{
                          backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                          animationDelay: `${index * 0.1}s`
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'rgba(45, 95, 63, 0.05)';
                            e.currentTarget.style.paddingLeft = '2rem';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.paddingLeft = '1.5rem';
                          }
                        }}
                      >
                        <span>{link.label}</span>
                        {isActive && <i className="fas fa-check-circle"></i>}
                      </Link>
                    </li>
                  );
                })}
                
                {/* Mobile CTA */}
                <li className="px-4 pt-3 pb-2">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full px-6 py-3 rounded-xl font-bold text-base text-white transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: 'var(--color-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-secondary-dark)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Get Free Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;