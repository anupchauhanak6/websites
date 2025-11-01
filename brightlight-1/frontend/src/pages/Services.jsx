import React from 'react';
import PageHeader from '../components/PageHeader';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: 'fa-solar-panel',
      title: 'Solar System Installation',
      items: [
        'Rooftop Solar Installation',
        'Ground Mounted Systems',
        'On-Grid Solar Solutions',
        'Off-Grid Solar Solutions',
        'Hybrid Solar Systems'
      ],
      description: 'Complete solar power system design and installation for residential, commercial, and industrial applications.'
    },
    {
      id: 2,
      icon: 'fa-wrench',
      title: 'Operation & Maintenance',
      items: [
        'Preventive Maintenance',
        'Curative Maintenance',
        'Solar Panel Cleaning',
        'Performance Monitoring',
        'System Troubleshooting'
      ],
      description: 'Regular maintenance and cleaning services to ensure optimal performance and longevity of your solar systems.'
    },
    {
      id: 3,
      icon: 'fa-box',
      title: 'Solar Product Supply',
      brands: ['Luminous', 'Adani', 'Waaree', 'UTL Solar', 'Havells'],
      description: 'High-quality solar panels, inverters, batteries, and mounting structures from trusted brands.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive solar energy solutions tailored to your needs"
      />

      <section className="py-20 bg-background-light">
        <div className="container">
          <div className="space-y-12">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)'}
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div className="flex flex-col items-center text-center md:border-r border-gray-200">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                      style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                    >
                      <i className={`fas ${service.icon} text-4xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                  
                  <div className="md:col-span-2">
                    {service.items && (
                      <ul className="space-y-3 mb-6">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <i className="fas fa-check text-accent"></i>
                            <span className="text-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {service.brands && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {service.brands.map((brand, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-lg font-medium transition-all cursor-pointer"
                            style={{ 
                              backgroundColor: 'rgba(45, 95, 63, 0.1)',
                              color: 'var(--color-primary)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(45, 95, 63, 0.1)';
                              e.currentTarget.style.color = 'var(--color-primary)';
                            }}
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-text-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;