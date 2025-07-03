import React, { useState } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Breadcrumb from './Breadcrumb';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://editzone.onrender.com/api/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="body-wrapper">
      <AnnouncementBar />
      <Header />
      <Breadcrumb />
      <main id="MainContent" className="content-for-layout">
        <div className="contact-page">
          <div className="contact-box mt-100">
            <div className="contact-box-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="contact-item">
                      <div className="contact-icon">
                        {/* SVG here */}
                      </div>
                      <div className="contact-details">
                        <h2 className="contact-title">Mail Address</h2>
                        <a className="contact-info" href="mailto:support@editzone.in">support@editzone.in</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="contact-item">
                      <div className="contact-icon">
                        {/* SVG here */}
                      </div>
                      <div className="contact-details">
                        <h2 className="contact-title">Office Location</h2>
                        <p className="contact-info">Hall No.- 1, Rama Kripa (Ruchika) Complex, Kisan Marg, Tonk Road, Jaipur, Rajasthan – 302015 (India)</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="contact-item">
                      <div className="contact-icon">
                        {/* SVG here */}
                      </div>
                      <div className="contact-details">
                        <h2 className="contact-title">Phone Number</h2>
                        <a className="contact-info" href="tel:+919214269668">(+91) – 92142-69668</a>
                        <a className="contact-info" href="tel:+919983417104">(+91) – 99834-17104</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section mt-100">
            <div className="container">
              <div className="contact-form-area">
                <div className="section-header mb-4">
                  <h2 className="section-heading">Drop us a line</h2>
                  <p className="section-subheading">We would like to hear from you.</p>
                </div>

                <div className="contact-form--wrapper">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="text" name="name" placeholder="Full name" required value={formData.name} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="email" name="email" placeholder="Email Address*" required value={formData.email} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="text" name="subject" placeholder="Type a subject" value={formData.subject} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-12">
                        <fieldset>
                          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                        </fieldset>
                      </div>
                      <div className="col-md-12 col-12">
                        <fieldset>
                          <textarea name="message" cols="20" rows="6" placeholder="Write your message here*" required value={formData.message} onChange={handleChange}></textarea>
                        </fieldset>
                        <button type="submit" className="position-relative review-submit-btn contact-submit-btn">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollUpButton />
      <DrawerMenu />
      <DrawerCart />
    </div>
  );
};

export default Contact;
