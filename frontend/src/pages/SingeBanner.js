import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from 'assets/img/banner/banner-1.jpg';
import banner2 from 'assets/img/banner/banner-2.jpg';
import banner3 from 'assets/img/banner/banner-3.jpg';
import banner4 from 'assets/img/banner/banner-4.jpg';
import banner5 from 'assets/img/banner/banner-5.jpg';

const BannerCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1281,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 602,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const banners = [banner1, banner2, banner3, banner4, banner5];

  return (
    <section className="latest-blog-section mt-100 overflow-hidden home-section">
      <div className="latest-blog-inner">
        <div className="container">
          <div className="article-card-container position-relative">
            <Slider {...settings} className="common-slider">
              {banners.map((src, idx) => (
                <div
                  key={idx}
                  className="article-slick-item"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <img src={src} alt={`Banner ${idx + 1}`} />
                </div>
              ))}
            </Slider>
            <div className="activate-arrows show-arrows-always article-arrows arrows-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
