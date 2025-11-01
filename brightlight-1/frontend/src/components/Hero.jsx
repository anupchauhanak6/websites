import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')`
        }}
      ></div>
      
      {/* Animated Floating Shapes */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full animate-float blur-xl" 
        style={{ backgroundColor: 'rgba(243, 156, 18, 0.2)' }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full animate-float blur-xl" 
        style={{ backgroundColor: 'rgba(39, 174, 96, 0.2)', animationDelay: '1s' }}
      ></div>
      <div 
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full animate-float blur-xl" 
        style={{ backgroundColor: 'rgba(243, 156, 18, 0.15)', animationDelay: '0.5s' }}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full animate-float blur-xl" 
        style={{ backgroundColor: 'rgba(39, 174, 96, 0.15)', animationDelay: '1.5s' }}
      ></div>

      {/* Solar Panel Icon Decorations */}
      <div className="absolute top-32 right-20 opacity-10 animate-float">
        <i className="fas fa-solar-panel text-white" style={{ fontSize: '8rem' }}></i>
      </div>
      <div 
        className="absolute bottom-32 left-20 opacity-10 animate-float text-secondary" 
        style={{ animationDelay: '0.7s' }}
      >
        <i className="fas fa-sun" style={{ fontSize: '7rem' }}></i>
      </div>

      {/* Main Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Welcome to <span className="text-secondary block md:inline mt-2 md:mt-0">Brightstar Energy</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 animate-fade-in-delay font-semibold">
            Green Energy for a Cleaner Future
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-delay-2 max-w-3xl">
            We are committed to building a cleaner, greener, and energy-efficient future. 
            With our expert team and reliable solar solutions, we help homes, businesses, 
            and industries reduce electricity costs and shift towards sustainable power.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-delay-3">
            <Link 
              to="/services" 
              className="btn btn-primary text-lg px-8 py-4 group"
            >
              <span>Our Services</span>
              <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-secondary text-lg px-8 py-4 group"
            >
              <span>Get in Touch</span>
              <i className="fas fa-envelope ml-2 transition-transform group-hover:scale-110"></i>
            </Link>
          </div>
          
          {/* Contact Info */}
          <div 
            className="flex items-center space-x-4 text-white animate-fade-in-delay-4 rounded-2xl p-6 max-w-md" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 animate-pulse"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <i className="fas fa-phone-alt text-2xl"></i>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Need Help? Call us</p>
              <a 
                href="tel:+919719681561" 
                className="text-xl font-bold transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                +91-9719681561
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-delay-4">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50MW+', label: 'Total Capacity' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center rounded-xl p-4 transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.number}</p>
                <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white cursor-pointer transition-colors" 
             style={{ opacity: 0.7 }}
             onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
             onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;