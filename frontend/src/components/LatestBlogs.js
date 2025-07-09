import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

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
    <button className="btn d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#00234D',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5%',
      }}>
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
    <button className="btn d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#00234D',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5%',
      }}>
      &lt;
    </button>
  </div>
);

const blogItems = [
  {
    img: 'assets/img/products/1.jpg',
    tag: 'Editing',
    date: '30 December, 2022',
    author: 'Lara Joe',
    title: 'Training Classes',
    link: 'article.html',
  },
  {
    img: 'assets/img/products/2.jpg',
    tag: 'Editing',
    date: '30 December, 2022',
    author: 'Lara Joe',
    title: 'Exhibitions Creation',
    link: 'article.html',
  },
  {
    img: 'assets/img/products/3.jpg',
    tag: 'Editing',
    date: '30 December, 2022',
    author: 'Lara Joe',
    title: 'Organize Event',
    link: 'article.html',
  },
  {
    img: 'assets/img/products/1.jpg',
    tag: 'Editing',
    date: '30 December, 2022',
    author: 'Lara Joe',
    title: 'Training Classes',
    link: 'article.html',
  },
];

const LatestBlogs = () => {
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
        .article-card-container .custom-arrow {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .article-card-container:hover .custom-arrow {
          opacity: 1;
        }
        .article-card-container {
          overflow: hidden;
          position: relative;
        }
        .slick-slide > div {
          padding: 0 10px;
          box-sizing: border-box;
        }
      `}</style>

      <div className="latest-blog-section mt-100 home-section">
        <div className="latest-blog-inner">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-heading primary-color">Latest blogs</h2>
            </div>

            <div className="article-card-container">
              <Slider {...settings}>
                {blogItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="article-card bg-transparent p-0 shadow-none">
                      <Link className="article-card-img-wrapper d-block position-relative" to={item.link}>
                        <img
                          src={item.img}
                          alt="blog-thumb"
                          className="article-card-img rounded"
                          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                        />
                        <span
                          className="article-tag article-tag-absolute rounded"
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            background: "#040457",
                            color: "white",
                            padding: "5px 10px",
                            fontSize: "12px",
                          }}
                        >
                          {item.tag}
                        </span>
                      </Link>
                      <p className="article-card-published text_12 d-flex align-items-center mt-2">
                        <span className="article-date d-flex align-items-center">
                          📅 <span className="ms-2">{item.date}</span>
                        </span>
                        <span className="article-author d-flex align-items-center ms-4">
                          👤 <span className="ms-2">{item.author}</span>
                        </span>
                      </p>
                      <h2 className="article-card-heading heading_18 mt-1">
                        <Link className="heading_18" to={item.link} style={{ textDecoration: "none" }}>
                          {item.title}
                        </Link>
                      </h2>
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

export default LatestBlogs;
