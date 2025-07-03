import React, { useEffect } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';
import ProductQuickviewModal from '../components/ProductQuickviewModal';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css';

const Gallery = () => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Toolbar: {
                display: ["zoom", "slideshow", "fullscreen", "download", "thumbs", "close"],
            },
            Thumbs: { autoStart: false },
            Navigation: true,
        });

        const boxes = document.querySelectorAll(".gallery-box");
        const popups = document.querySelectorAll(".popup");

        boxes.forEach((box, index) => {
            box.addEventListener("click", () => {
                popups[index].classList.add("active");
            });
        });

        popups.forEach((popup) => {
            const closeBtn = popup.querySelector(".popup-close");

            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    popup.classList.remove("active");
                });
            }

            popup.addEventListener("click", (e) => {
                if (e.target === popup) {
                    popup.classList.remove("active");
                }
            });
        });

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                popups.forEach((popup) => popup.classList.remove("active"));
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className="body-wrapper">
            <AnnouncementBar />
            <Header />
            <main id="MainContent" className="content-for-layout">
                {/* <!-- breadcrumb start --> */}
                <div className="breadcrumb">
                    <div className="container">
                        <ul className="list-unstyled d-flex align-items-center m-0">
                            <li><a href="index.html">Home</a></li>
                            <li>
                                <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path
                                            d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z"
                                            fill="#000" />
                                    </g>
                                </svg>
                            </li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- breadcrumb end --> */}


                <section className="pt-5 mt-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="gallery-box">
                                    <div className="front-image">
                                        <img src="assets/img/products/1.jpg" alt="Edit Zone Classes" />
                                    </div>
                                    <div className="box-title">Edit Zone Classes</div>
                                </div>
                                <div className="popup">
                                    <div className="popup-content">
                                        <div className="popup-close">×</div>
                                        <div className="inner-images">
                                            <a data-fancybox="gallery-1" href="assets/img/products/1.jpg">
                                                <img src="assets/img/products/1.jpg" alt="Product 1" />
                                            </a>
                                            <a data-fancybox="gallery-1" href="assets/img/products/2.jpg">
                                                <img src="assets/img/products/2.jpg" alt="Product 2" />
                                            </a>
                                            <a data-fancybox="gallery-1" href="assets/img/products/3.jpg">
                                                <img src="assets/img/products/3.jpg" alt="Product 3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3">
                                <div className="gallery-box">
                                    <div className="front-image">
                                        <img src="assets/img/gallery/1.jpg" alt="Beach Collection" />
                                    </div>
                                    <div className="box-title">Edit Zone</div>
                                </div>
                                <div className="popup">
                                    <div className="popup-content">
                                        <div className="popup-close">×</div>
                                        <div className="inner-images">
                                            <a data-fancybox="gallery-2" href="assets/img/gallery/1.jpg">
                                                <img src="assets/img/gallery/1.jpg" alt="Castle" />
                                            </a>
                                            <a data-fancybox="gallery-2" href="assets/img/gallery/2.jpg">
                                                <img src="assets/img/gallery/2.jpg" alt="Sample" />
                                            </a>
                                            <a data-fancybox="gallery-2" href="assets/img/gallery/3.jpg">
                                                <img src="assets/img/gallery/3.jpg" alt="Lady" />
                                            </a>
                                            <a data-fancybox="gallery-2" href="assets/img/gallery/4.jpg">
                                                <img src="assets/img/gallery/4.jpg" alt="Coffee" />
                                            </a>
                                            <a data-fancybox="gallery-2" href="assets/img/gallery/5.jpg">
                                                <img src="assets/img/gallery/5.jpg" alt="Dog" />
                                            </a>

                                            <a data-fancybox="gallery-2" href="assets/img/gallery/5.jpg">
                                                <img src="assets/img/gallery/6.jpg" alt="Dog" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3">
                                <div className="gallery-box">
                                    <div className="front-image">
                                        <img src="assets/img/gallery/7.jpg" alt="Beach Collection" />
                                    </div>
                                    <div className="box-title">Edit zone gold projects</div>
                                </div>
                                <div className="popup">
                                    <div className="popup-content">
                                        <div className="popup-close">×</div>
                                        <div className="inner-images">
                                            <a data-fancybox="gallery-3" href="assets/img/gallery/7.jpg">
                                                <img src="assets/img/gallery/7.jpg" alt="Castle" />
                                            </a>
                                            <a data-fancybox="gallery-3" href="assets/img/gallery/8.jpg">
                                                <img src="assets/img/gallery/8.jpg" alt="Sample" />
                                            </a>
                                            <a data-fancybox="gallery-3" href="assets/img/gallery/9.jpg">
                                                <img src="assets/img/gallery/9.jpg" alt="Lady" />
                                            </a>
                                            <a data-fancybox="gallery-3" href="assets/img/gallery/10.jpg">
                                                <img src="assets/img/gallery/10.jpg" alt="Coffee" />
                                            </a>
                                            <a data-fancybox="gallery-3" href="assets/img/gallery/11.jpg">
                                                <img src="assets/img/gallery/11.jpg" alt="Dog" />
                                            </a>

                                            <a data-fancybox="gallery-3" href="assets/img/gallery/12.jpg">
                                                <img src="assets/img/gallery/12.jpg" alt="Dog" />
                                            </a>

                                            <a data-fancybox="gallery-3" href="assets/img/gallery/13.jpg">
                                                <img src="assets/img/gallery/13.jpg" alt="Dog" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <ScrollUpButton />
            <DrawerMenu />
            <DrawerCart />
            <ProductQuickviewModal />
        </div>
    );
};

export default Gallery;
