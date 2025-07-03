// UpcomingEvents.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const events = [
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'Tech Summit 2025',
    date: 'May 20, 2025',
    location: 'Virtual & In-Person, San Francisco'
  },
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'Tech Summit 2025',
    date: 'May 20, 2025',
    location: 'Virtual & In-Person, San Francisco'
  },
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'Tech Summit 2025',
    date: 'May 20, 2025',
    location: 'Virtual & In-Person, San Francisco'
  },
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'Tech Summit 2025',
    date: 'May 20, 2025',
    location: 'Virtual & In-Person, San Francisco'
  }
];

const UpcomingEvents = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      { breakpoint: 1281, settings: { slidesToShow: 2 } },
      { breakpoint: 602, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="latest-blog-section mt-100 overflow-hidden home-section pt-5">
      <div className="latest-blog-inner">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-heading primary-color">Upcoming Events</h2>
          </div>
          <div className="position-relative">
            {/* Custom Prev/Next Buttons */}
            <div className="d-flex justify-content-end mb-3">
              <button className="btn btn-secondary me-2" onClick={() => sliderRef.current.slickPrev()}>
                Prev
              </button>
              <button className="btn btn-secondary" onClick={() => sliderRef.current.slickNext()}>
                Next
              </button>
            </div>

            {/* Slider */}
            <Slider ref={sliderRef} {...settings} className="common-slider">
              {events.map((e, i) => (
                <div key={i} className="article-slick-item mb-4">
                  <div className="event-card shadow-sm">
                    <img src={e.img} className="event-img w-100" alt={e.title} />
                    <div className="event-content">
                      <h3 className="event-title pt-3">{e.title}</h3>
                      <p className="event-date pt-3">
                        <span className="icon-wrapper"><i className="bi bi-calendar-event me-2" /></span>
                        {e.date}
                      </p>
                      <p className="event-location pt-2">
                        <span className="icon-wrapper"><i className="bi bi-geo-alt-fill me-2" /></span>
                        {e.location}
                      </p>
                      <button className="register-btn mt-4">Register Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
