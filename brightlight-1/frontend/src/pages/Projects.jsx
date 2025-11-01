import React from 'react';
import PageHeader from '../components/PageHeader';

const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: 'fa-road',
      title: 'Agra-Lucknow Expressway',
      capacity: '693 KWP',
      description: 'Large-scale solar installation for the Agra-Lucknow Expressway project.',
      type: 'Infrastructure'
    },
    {
      id: 2,
      icon: 'fa-train',
      title: 'Howrah Railway Station, Kolkata',
      capacity: '400 KWP',
      description: "Solar power system installation at one of India's busiest railway stations.",
      type: 'Government'
    },
    {
      id: 3,
      icon: 'fa-university',
      title: 'College of Engineering & Technology, Bhubaneswar',
      capacity: '215 KWP',
      description: 'Campus-wide solar installation for educational institution.',
      type: 'Educational'
    },
    {
      id: 4,
      icon: 'fa-building',
      title: 'DRDO Laboratory, Hyderabad',
      capacity: '180 KWP',
      description: 'High-security solar installation for defense research facility.',
      type: 'Government'
    },
    {
      id: 5,
      icon: 'fa-industry',
      title: 'Manufacturing Plant, Pune',
      capacity: '500 KWP',
      description: 'Industrial solar power system for manufacturing operations.',
      type: 'Industrial'
    },
    {
      id: 6,
      icon: 'fa-hospital',
      title: 'Medical College, Lucknow',
      capacity: '300 KWP',
      description: 'Reliable solar power for critical healthcare facility.',
      type: 'Healthcare'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Completed Projects" 
        subtitle="Delivering excellence across India"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projects & Clients</h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              We have successfully completed solar installations for various government, institutional, and private clients across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-xl shadow-lg overflow-hidden group animate-slide-up transition-all"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(45, 95, 63, 0.05))',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)'}
              >
                <div 
                  className="p-8 flex items-center justify-center transition-transform"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <i className={`fas ${project.icon} text-white`} style={{ fontSize: '6rem' }}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <div className="flex items-center space-x-2 text-accent mb-3">
                    <i className="fas fa-bolt"></i>
                    <span className="font-semibold text-lg">{project.capacity}</span>
                  </div>
                  <p className="text-text-light mb-4 leading-relaxed">{project.description}</p>
                  <span 
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: 'rgba(45, 95, 63, 0.1)',
                      color: 'var(--color-primary)'
                    }}
                  >
                    <i className="fas fa-tag"></i>
                    <span>{project.type}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;