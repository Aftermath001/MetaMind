import React, { useState } from 'react';
import './contact.css';
import Header from '../../components/Header'
import ContactPic from '../../images/laptop-5673901_1920.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import './contact.css'




const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  return (
  <>
  <Header title="Get In Touch" image={ContactPic}>
    Reach Out to Us for your IT Needs.
  </Header>
  <section className="contact">
    <div className="container contact_container">
     <div className="contact_wrapper">
      <a href='mailto:alvinasiachi@gmail.com' target='_blank' rel="noreferrer noopener"><MdEmail/></a>
      <a href='http://m.me/100077330556230' target='_blank' rel="noreferrer noopener"><BsMessenger/></a>
      <a href='http://wa.me/+254797246096' target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp /></a>

     </div>

     <div className="form-container">
      <h1>Contact Form</h1>
      <form id="contact_form" name="contact_form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-col">
            <label>First Name</label>
            <input
              type="text"
              required
              maxLength="50"
              className="form-control"
              id="first_name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label>Last Name</label>
            <input
              type="text"
              required
              maxLength="50"
              className="form-control"
              id="last_name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label>Email address</label>
            <input
              type="email"
              required
              maxLength="50"
              className="form-control"
              id="email_addr"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </div>
          <div className="form-col">
            <label>Phone</label>
            <input
              type="tel"
              required
              maxLength="50"
              className="form-control"
              id="phone_input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
    </div>
  </section>
  </>
  )
}

export default Contact