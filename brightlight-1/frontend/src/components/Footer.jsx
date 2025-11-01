import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Brightstar Energy</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the way in renewable energy solutions. Building a cleaner, greener future together.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com/brightstar_energy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://facebook.com/brightstar_energy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="mailto:energy.brightstar2000@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 text-sm transition-all hover:text-primary-light">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <i className="fas fa-map-marker-alt mt-1" style={{ color: 'var(--color-primary-light)' }}></i>
                <span>3rd Floor, Bhimsingh Tower<br />Surajpur, Greater Noida, UP – 201306</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <i className="fas fa-phone" style={{ color: 'var(--color-primary-light)' }}></i>
                <a href="tel:+919719681561" className="text-gray-300 transition-all hover:text-primary-light">
                  +91-9719681561
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <i className="fas fa-envelope" style={{ color: 'var(--color-primary-light)' }}></i>
                <a href="mailto:energy.brightstar2000@gmail.com" className="text-gray-300 transition-all hover:text-primary-light">
                  energy.brightstar2000@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="text-gray-400 text-sm">
            &copy; 2025 Brightstar Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;