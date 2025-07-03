import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    review:
      "“ I am purchasing furniture from Bisum since the last 6 years. I love their prompt service and so far I have faced no complaints with their furniture.”",
    name: "Floyd Miles",
    role: "Executive, Hypebeast",
    img: "assets/img/testimonial/john.jpg",
    stars: 5
  },
  // (Add more testimonial objects here as needed)
];

const TestimonialSection = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false
  };

  return (
    <div className="testimonial-section mt-100 overflow-hidden home-section">
      <div className="testimonial-inner">
        <div className="container">
          <div className="row">
            {/* Header Column */}
            <div
              className="col-lg-5 col-md-12 col-12"
              
            >
              <div className="section-header">
                <h2 className="section-heading primary-color">What customer say</h2>
                <p className="section-subheading">
                  The services provided by the officials was smooth and satisfactory.
                  Products and goods delivered were up to satisfaction.
                </p>
              </div>
            </div>

            {/* Carousel Column */}
            <div
              className="col-lg-6 offset-lg-1 col-md-12 col-12"
              
            >
              <div className="testimonial-container position-relative">
                <Slider {...settings} className="testimonial-slideshow common-slider">
                  {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-item">
                      <div className="testimonial-icon-wrap d-flex align-items-center">
                        <div className="testimonial-icon-quote">
                          {/* SVG quote icon */}
                          <svg width="40" height="29" viewBox="0 0 40 29" fill="none">
                            <path
                              d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                              fill="#00234D"
                            />
                          </svg>
                        </div>
                        <div className="testimonial-icon-star d-flex align-items-center ms-3">
                          {[...Array(t.stars)].map((_, idx) => (
                            <img key={idx} src="assets/img/icon/star.png" alt="star" />
                          ))}
                        </div>
                      </div>
                      <p className="testimonial-review my-4 text_16">{t.review}</p>
                      <div className="testimonial-reviewer d-flex align-items-center">
                        <div className="reviewer-img">
                          <img src={t.img} alt={t.name} />
                        </div>
                        <div className="reviewer-info ms-4">
                          <h4 className="reviewer-name heading_18 mb-2 primary-color">{t.name}</h4>
                          <p className="reviewer-desig text_14 m-0">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* Custom arrows placeholder — React Slick handles arrows */}
                <div className="activate-arrows show-arrows-always article-arrows arrows-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
