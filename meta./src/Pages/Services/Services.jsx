import React from 'react';
import '../Home/home.css'; 
import Carousel from '../../components/Carousel';

const ServicesPage = () => {
  const services = [
    { title: 'Web Development', description: 'Creating responsive and functional websites.' },
    { title: 'Mobile App Development', description: 'Building cross-platform mobile applications.' },
    { title: 'Cloud Solutions', description: 'Offering scalable cloud infrastructure services.' },
    { title: 'AI and Machine Learning', description: 'Providing AI-powered solutions for businesses.' },
    { title: 'Cybersecurity', description: 'Ensuring data protection with top-notch security solutions.' },
    { title: 'Cybersecurity', description: 'Ensuring data protection with top-notch security solutions.' },
  ];

  return (
    <div className="services-page">
      {/* Services Section */}
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Carousel for Projects */}
      <div className="projects-carousel">
        <h2>Our Previous Projects</h2>
          <Carousel />
      </div>
    </div>
  );
};

export default ServicesPage;
