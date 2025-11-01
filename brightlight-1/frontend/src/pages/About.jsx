import React from 'react';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <>
      <PageHeader 
        title="About Brightstar Energy" 
        subtitle="Building a cleaner, greener, and energy-efficient future"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-lg text-text-light leading-relaxed">
              Brightstar Energy is a renewable energy company specializing in solar power solutions. 
              Our mission is to deliver cost-effective, reliable, and eco-friendly solar systems 
              tailored to customer needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'fa-bullseye', 
                title: 'Our Mission', 
                desc: 'To provide sustainable, reliable, and affordable solar energy solutions that contribute to a cleaner environment and energy independence.' 
              },
              { 
                icon: 'fa-eye', 
                title: 'Our Vision', 
                desc: "To be India's leading renewable energy provider, making clean energy accessible to every home, business, and industry." 
              },
              { 
                icon: 'fa-heart', 
                title: 'Our Values', 
                desc: 'Excellence, integrity, sustainability, and customer satisfaction drive everything we do.' 
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transition-all animate-slide-up"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(45, 95, 63, 0.05), rgba(39, 174, 96, 0.05))',
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <i className={`fas ${item.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">What We Do</h2>
          <p className="text-lg text-center text-text-light mb-12">We provide end-to-end services including:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'System design and engineering',
              'Procurement of quality solar components',
              'Installation & commissioning',
              'After-sales service and maintenance',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
              >
                <i className="fas fa-check-circle text-2xl text-accent"></i>
                <span className="text-text font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;