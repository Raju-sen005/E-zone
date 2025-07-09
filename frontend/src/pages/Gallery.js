import React, { useState } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';
import ProductQuickviewModal from '../components/ProductQuickView';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const galleries = {
    1: {
      title: 'Edit Zone Classes',
      images: [
        'assets/img/products/1.jpg',
        'assets/img/products/2.jpg',
        'assets/img/products/3.jpg',
      ],
    },
    2: {
      title: 'Edit Zone',
      images: [
        'assets/img/gallery/1.jpg',
        'assets/img/gallery/2.jpg',
        'assets/img/gallery/3.jpg',
        'assets/img/gallery/4.jpg',
        'assets/img/gallery/5.jpg',
        'assets/img/gallery/6.jpg',
      ],
    },
    3: {
      title: 'Edit Zone Gold Projects',
      images: [
        'assets/img/gallery/7.jpg',
        'assets/img/gallery/8.jpg',
        'assets/img/gallery/9.jpg',
        'assets/img/gallery/10.jpg',
        'assets/img/gallery/11.jpg',
        'assets/img/gallery/12.jpg',
        'assets/img/gallery/13.jpg',
      ],
    },
  };

  return (
    <div className="body-wrapper">
      <AnnouncementBar />
      <Header />

      <main id="MainContent" className="content-for-layout">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul className="list-unstyled d-flex align-items-center m-0">
              <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
              <li>
                <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g opacity="0.4">
                    <path d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z" fill="#000" />
                  </g>
                </svg>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="pt-5 mt-2">
          <div className="container">
            <div className="row">
              {Object.entries(galleries).map(([key, gallery]) => (
                <div className="col-md-4 mb-3" key={key}>
                  <div
                    className="gallery-box"
                    onClick={() => setActiveGallery(key)}
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal"
                  >
                    <div className="front-image">
                      <img src={gallery.images[0]} alt={gallery.title} className="img-fluid rounded" style={{ width: "100%", height: "267px", objectFit: "cover" }} />
                      <div className="box-title">{gallery.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Bootstrap Modal (auto-resize) */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-3">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setActiveGallery(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "1em",
                color: "#333",
                cursor: "pointer",
                userSelect: "none",
                padding: "5px"
              }}
            ></button>
            <div className="modal-body">
              <div className="row">
                {galleries[activeGallery]?.images.map((img, idx) => (
                  <div className="col-md-4 mb-3" key={idx}>
                    <img
                      src={img}
                      alt={`gallery-${idx}`}
                      className="img-fluid rounded shadow-sm"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer & Extras */}
      <Footer />
      <ScrollUpButton />
      <DrawerMenu />
      <DrawerCart />
      <ProductQuickviewModal />

      {/* Custom Styles */}
      <style>{`
        .gallery-box {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .gallery-box:hover {
          transform: scale(1.03);
        }
        .gallery-box .box-title {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          background: rgba(0,0,0,0.6);
          color: #fff;
          padding: 10px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .gallery-box:hover .box-title {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
