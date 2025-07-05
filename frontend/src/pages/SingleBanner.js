import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ Correct banner image paths (from public folder)
const banners = [
  "/assets/img/banner/banner-1.jpg",
  "/assets/img/banner/banner-2.jpg",
  "/assets/img/banner/banner-3.jpg",
  "/assets/img/banner/banner-4.jpg",
  "/assets/img/banner/banner-5.jpg",
];

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
