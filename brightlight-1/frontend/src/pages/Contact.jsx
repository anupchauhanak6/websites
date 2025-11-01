import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        subject: '', 
        message: '' 
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Our Office',
      content: '3rd Floor, Bhimsingh Tower\nSurajpur, Greater Noida\nUttar Pradesh – 201306'
    },
    {
      icon: 'fa-phone',
      title: 'Phone Number',
      content: '+91-9719681561',
      href: 'tel:+919719681561'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Address',
      content: 'energy.brightstar2000@gmail.com',
      href: 'mailto:energy.brightstar2000@gmail.com'
    },
    {
      icon: 'fa-clock',
      title: 'Business Hours',
      content: 'Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our solar experts"
      />

      <section className="py-20 bg-background-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                  style={{
                    opacity: isSubmitting ? 0.5 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transition-all flex items-start space-x-4"
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)'}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <i className={`fas ${info.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-text-light transition-colors"
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-text-light whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;