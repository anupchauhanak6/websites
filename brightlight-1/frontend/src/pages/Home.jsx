import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Brightstar Energy?</h2>
            <p className="section-subtitle">Delivering excellence in solar energy solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: 'fa-leaf', 
                title: 'Eco-Friendly', 
                desc: '100% renewable energy solutions for a sustainable future',
                gradient: 'linear-gradient(135deg, #27ae60, #2ecc71)'
              },
              { 
                icon: 'fa-money-bill-wave', 
                title: 'Cost-Effective', 
                desc: 'Reduce electricity costs with our efficient solar systems',
                gradient: 'linear-gradient(135deg, #f39c12, #f1c40f)'
              },
              { 
                icon: 'fa-certificate', 
                title: 'Certified', 
                desc: 'Government-approved installations with quality assurance',
                gradient: 'linear-gradient(135deg, #3498db, #5dade2)'
              },
              { 
                icon: 'fa-users', 
                title: 'Expert Team', 
                desc: 'Experienced professionals dedicated to your energy needs',
                gradient: 'linear-gradient(135deg, #9b59b6, #bb8fce)'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg transition-all animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all"
                  style={{ background: feature.gradient }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <i className={`fas ${feature.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-text-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Solar Energy Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Solar Energy?</h2>
            <p className="section-subtitle">The benefits of switching to solar power</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-bolt',
                title: 'Energy Independence',
                desc: 'Generate your own electricity and reduce dependence on the grid'
              },
              {
                icon: 'fa-chart-line',
                title: 'Increase Property Value',
                desc: 'Solar installations can increase your property value significantly'
              },
              {
                icon: 'fa-shield-alt',
                title: 'Low Maintenance',
                desc: 'Solar panels require minimal maintenance and have long warranties'
              },
              {
                icon: 'fa-piggy-bank',
                title: 'Government Subsidies',
                desc: 'Benefit from various government schemes and tax incentives'
              },
              {
                icon: 'fa-cloud-sun',
                title: 'Clean Energy',
                desc: 'Reduce carbon footprint and contribute to a cleaner environment'
              },
              {
                icon: 'fa-infinity',
                title: 'Sustainable Solution',
                desc: 'Solar energy is renewable and will never run out'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl animate-slide-up transition-all"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(248, 249, 250, 1), rgba(255, 255, 255, 1))',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <i className={`fas ${benefit.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-text-light text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'var(--gradient-primary)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div 
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full animate-float" 
            style={{ backgroundColor: 'var(--color-secondary)', animationDelay: '1s' }}
          ></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Go Solar?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in-delay">
              Join thousands of satisfied customers who have made the switch to clean, renewable energy. 
              Get a free consultation and quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <a 
                href="tel:+919719681561"
                className="btn text-lg px-8 py-4 transition-all"
                style={{ 
                  backgroundColor: 'white', 
                  color: 'var(--color-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
              >
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </a>
              <Link 
                to="/contact"
                className="btn border-2 border-white text-white text-lg px-8 py-4 transition-all"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <i className="fas fa-envelope mr-2"></i>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;