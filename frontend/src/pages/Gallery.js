import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';
import ProductQuickviewModal from '../components/ProductQuickView';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);

  useEffect(() => {
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/gallery');
      console.log('Fetched galleries:', res.data);
      setGalleries(res.data);
    } catch (err) {
      console.error('Failed to load gallery:', err);
    }
  };

  const getImageUrl = (imgPath) => {
    return imgPath?.startsWith('http') ? imgPath : `http://localhost:5001/${imgPath}`;
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
              {galleries && galleries.length > 0 ? (
                galleries.map((gallery, index) => (
                  <div className="col-md-4 mb-3" key={gallery._id}>
                    <div
                      className="gallery-box"
                      onClick={() => setActiveGalleryIndex(index)}
                      data-bs-toggle="modal"
                      data-bs-target="#imageModal"
                    >
                      <div className="front-image">
                        <img
                          src={
                            gallery.imageUrl && gallery.imageUrl.length > 0
                              ? getImageUrl(gallery.imageUrl[0])
                              : "/default.jpg" // fallback image
                          }
                          alt={gallery.title}
                          className="img-fluid rounded"
                          style={{
                            width: "100%",
                            height: "267px",
                            objectFit: "cover"
                          }}
                        />
                        <div className="box-title">{gallery.title}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No galleries available.</p>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Modal for gallery preview */}
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
              onClick={() => setActiveGalleryIndex(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "1em",
                color: "#333",
                cursor: "pointer",
              }}
            ></button>
            <div className="modal-body">
              <div className="row">
                {galleries[activeGalleryIndex]?.imageUrl?.map((img, idx) => (
                  <div className="col-md-4 mb-3" key={idx}>
                    <td>
                      <img
                        src={item.imageUrl ? `http://localhost:5001${item.imageUrl}` : "https://via.placeholder.com/100x100?text=No+Image"}
                        alt="Gallery"
                        width="100"
                        onError={handleImageError}
                      />
                    </td>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollUpButton />
      <DrawerMenu />
      <DrawerCart />
      <ProductQuickviewModal />

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
