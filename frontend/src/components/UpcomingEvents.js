import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const events = [
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'Tech Summit 2025',
    date: 'May 20, 2025',
    location: 'Virtual & In-Person, San Francisco',
  },
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'AI Conference 2025',
    date: 'June 10, 2025',
    location: 'New York City',
  },
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'Web Dev World',
    date: 'July 15, 2025',
    location: 'Online',
  },
  {
    img: 'assets/img/gallery/13.jpg',
    title: 'Startup Fest',
    date: 'August 22, 2025',
    location: 'Bangalore, India',
  },
];

// Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow next-arrow"
    style={{
      position: 'absolute',
      top: '50%',
      right: '-20px',
      transform: 'translateY(-50%)',
      zIndex: 1,
    }}
    onClick={onClick}
  >
    <button
      className="btn d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#00234D',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5%',
      }}
    >
      &gt;
    </button>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow prev-arrow"
    style={{
      position: 'absolute',
      top: '50%',
      left: '-20px',
      transform: 'translateY(-50%)',
      zIndex: 1,
    }}
    onClick={onClick}
  >
    <button
      className="btn d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#00234D',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5%',
      }}
    >
      &lt;
    </button>
  </div>
);

const UpcomingEvents = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1281, settings: { slidesToShow: 2 } },
      { breakpoint: 602, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <style>{`
        .event-slider-container .custom-arrow {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .event-slider-container:hover .custom-arrow {
          opacity: 1;
        }
        .event-slider-container {
          overflow: hidden;
          position: relative;
        }
        .slick-slide > div {
          padding: 0 10px;
          box-sizing: border-box;
        }
        .wide-container {
          max-width: calc(90% - 40px);
          margin: auto;
        }
      `}</style>

      <div className="latest-blog-section mt-100 overflow-hidden home-section pt-5" style={{ height: 'auto' }}>
        <div className="latest-blog-inner">
          <div className="wide-container">
            <div className="section-header text-center mb-4">
              <h2 className="section-heading primary-color">Upcoming Events</h2>
            </div>

            <div className="event-slider-container position-relative">
              <Slider {...settings}>
                {events.map((e, i) => (
                  <div key={i} className="article-slick-item mb-4">
                    <div className="event-card shadow-sm border rounded h-100 overflow-hidden">
                      <img
                        src={e.img}
                        className="event-img w-100"
                        alt={e.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="event-content p-3">
                        <h3 className="event-title">{e.title}</h3>
                        <p className="event-date pt-2 mb-1">
                          <i className="bi bi-calendar-event me-2"></i>
                          {e.date}
                        </p>
                        <p className="event-location mb-3">
                          <i className="bi bi-geo-alt-fill me-2"></i>
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
    </>
  );
};

export default UpcomingEvents;
