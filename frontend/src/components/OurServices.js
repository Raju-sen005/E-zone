import React from 'react';

const services = [
  {
    img: 'assets/img/products/1.jpg',
    title: 'Training Classes',
    link: 'video-editing.html',
    features: ['Video Editing', 'Photo Editing', 'Projects Creations']
  },
  {
    img: 'assets/img/products/2.jpg',
    title: 'EXHIBITIONS',
    link: '#',
    features: ['Photography Workshop', 'Editing Workshop', 'Show In Your City']
  },
  {
    img: 'assets/img/products/3.jpg',
    title: 'Events',
    link: '#',
    features: ['Weddings', 'Album Shoot', 'Promotional Shoot']
  }
];

const OurServices = () => (
  <div className="shop-category mt-100 overflow-hidden">
    <div className="collection-tab-inner mt-0">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-heading primary-color">Our Services</h2>
        </div>
        <div className="shop-category-2 shop-category-inner">
          {services.map((svc, i) => (
            <div
              key={i}
              className="scattered-item"
              
            >
              <div className="scattered-wrapper">
                <div className="scattered-content">
                  <img className="scattered-img" src={svc.img} alt={svc.title} />
                </div>
                <div className="scattered-details">
                  <h2>
                    <a className="scattered-heading primary-color" href={svc.link}>
                      {svc.title}
                    </a>
                  </h2>
                  {svc.features.map((feat, idx) => (
                    <p key={idx} className="text_12 d-block primary-color mt-2">
                      {feat}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OurServices;
