// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-100 overflow-hidden footer-style-2">
      <div className="footer-top bg-5">
        <div className="container">
          <div className="footer-widget-wrapper">
            <div className="row justify-content-between">
              {[
                {
                  title: 'About',
                  links: [
                    { label: 'About us', href: 'about-us.html' },
                    { label: 'Training Classes', href: 'video-editing.html' },
                    { label: 'Exhibitions', href: 'video-editing.html' },
                    { label: 'Blog', href: 'blog.html' }
                  ]
                },
                {
                  title: 'Product',
                  links: [
                    { label: 'Edius 11', href: 'edius11.html' },
                    { label: 'Album Sense', href: 'album-sense.html' },
                    { label: 'Cut Sense', href: 'cut-sense.html' }
                  ]
                },
                {
                  title: 'Help',
                  links: [
                    { label: 'FAQ', href: 'faq.html' },
                    { label: 'Contact', href: 'contact.html' },
                    { label: 'Download', href: 'download.html' }
                  ]
                }
              ].map((section, idx) => (
                <div className="col-xl-2 col-lg-2 col-md-6 col-12 footer-widget" key={idx}>
                  <div className="footer-widget-inner">
                    <h4 className="footer-heading d-flex align-items-center justify-content-between">
                      <span>{section.title}</span>
                      <span className="d-md-none">
                        {/* dropdown icon */}
                        <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="#00234D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </h4>
                    <ul className="footer-menu list-unstyled mb-0 d-md-block">
                      {section.links.map((link, i) => (
                        <li className="footer-menu-item" key={i}>
                          <a href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col-xl-4 col-lg-5 col-md-6 col-12 footer-widget">
                <div className="footer-widget-inner">
                  <h4 className="footer-logo">
                    <a href="/"><img src="assets/img/logo.png" alt="Logo" /></a>
                  </h4>
                  <div className="footer-newsletter">
                    <p className="footer-text mb-3">Stay up to date with all the news.</p>
                    <div className="newsletter-wrapper">
                      <form action="#" className="footer-newsletter-form d-flex align-items-center">
                        <input className="footer-newsletter-input bg-transparent" type="email" placeholder="Your e-mail" autoComplete="off"/>
                        <button className="footer-newsletter-btn" type="submit">SIGN UP</button>
                      </form>
                    </div>
                    <div className="footer-social-wrapper">
                      <ul className="footer-social list-unstyled d-flex align-items-center flex-wrap mb-0">
                        {/* Repeat for each social icon */}
                        {['twitter','facebook','instagram','tiktok','youtube'].map((platform, i) => (
                          <li className="footer-social-item" key={i}>
                            <a href="/">
                              <svg className={`icon icon-${platform}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                                {/* Insert platform-specific path here */}
                              </svg>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-5">
        <div className="container">
          <div className="footer-bottom-inner d-flex flex-wrap justify-content-md-between justify-content-center align-items-center">
            <ul className="footer-bottom-menu list-unstyled d-flex flex-wrap align-items-center mb-0">
              <li className="footer-menu-item"><a href="privacy-policy.html">Privacy policy</a></li>
              <li className="footer-menu-item"><a href="terms-condition.html">Terms & Conditions</a></li>
            </ul>
            <p className="copyright footer-text">©<span className="current-year">{new Date().getFullYear()}</span> Edit Zone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;