import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <>
  <div className="custom-arrow prev-arrow" onClick={onClick} >
    <button className="btn btn-blue d-flex align-items-center justify-content-center" style={{
      width: "10%",
      height: " 100%",
      position: "relative",
      left: "-13%",
      top: "-140px",
      backgroundColor: "#00234D",
      color: "#fff",
    }}>
      &lt;
    </button>
  </div>
  </>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick} >
    <button className="btn d-flex align-items-center justify-content-center" style={{
      width: "10%",
      height: " 100%",
      position: "relative",
      left: "100%",
      top: "120px",
      backgroundColor: "#00234D",
      color: "#fff",
    }}>
      &gt;
    </button>
  </div>
);

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const testimonials = [
    {
      text: '“ I am purchasing furniture from Bisum since the last 6 years. I love their prompt service and so far I have faced no complaints with their furniture.”',
      name: 'Floyd Miles',
      designation: 'Executive, Hypebeast',
      image: 'assets/img/testimonial/john.jpg',
    },
    {
      text: '“ Their products are extremely durable and stylish. Customer support is responsive and reliable.”',
      name: 'Jenny Wilson',
      designation: 'Interior Designer',
      image: 'assets/img/testimonial/john.jpg',
    },
    {
      text: '“ Quick delivery and beautiful furniture collection. I always recommend them to my clients.”',
      name: 'Ravi Sharma',
      designation: 'Architect, DesignCo',
      image: 'assets/img/testimonial/john.jpg',
    },
  ];

  return (
    
    <div className="testimonial-section mt-100 overflow-hidden home-section">
      <div className="testimonial-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12" data-aos="fade-up" data-aos-duration="700">
              <div className="section-header">
                <h2 className="section-heading primary-color">What customer say</h2>
                <p className="section-subheading">
                  The services provided by the officials was smooth and satisfactory. Products and
                  goods delivered were up to satisfaction.
                </p>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 col-md-12 col-12" data-aos="fade-up" data-aos-duration="700">
              <div className="testimonial-slider-wrapper">
                <Slider {...settings} className="testimonial-slideshow btn-bg-black">
                  {testimonials.map((item, index) => (
                    <div className="testimonial-item" key={index}>
                      <div className="testimonial-icon-wrap d-flex align-items-center">
                        <div className="testimonial-icon-quote">
                          <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z" fill="#00234D" />
                          </svg>
                        </div>
                        <div className="testimonial-icon-star d-flex align-items-center ms-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <img key={i} src="assets/img/icon/star.png" alt="star" />
                          ))}
                        </div>
                      </div>
                      <p className="testimonial-review my-4 text_16">{item.text}</p>
                      <div className="testimonial-reviewer d-flex align-items-center">
                        <div className="reviewer-img">
                          <img src={item.image} alt="reviewer" />
                        </div>
                        <div className="reviewer-info ms-4">
                          <h4 className="reviewer-name heading_18 mb-2 primary-color">{item.name}</h4>
                          <p className="reviewer-desig text_14 m-0">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
