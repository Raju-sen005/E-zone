import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedCollection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const addToCart = (productName) => {
        console.log(`${productName} added to cart`);
        // You can integrate this with your cart logic
    };

    return (
        <>
            <div className="featured-collection mt-100 overflow-hidden">
                <div className="collection-tab-inner">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="section-heading">Our Products</h2>
                        </div>
                        <div className="row">

                            {/* Product 1 */}
                            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="700">
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <a className="hover-switch" href="#">
                                            <img className="primary-img" src="assets/img/products/grass-valley-edius-11.png" alt="product-img" />
                                        </a>
                                        <div className="product-card-action product-card-action-2">
                                            <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal"
                                                data-product-id="Edius-11"
                                                data-product-name="Edius 11"
                                                data-product-price="1000.00"
                                                data-product-compare-price="1500.00"
                                                data-product-images='["edius-1.jpg","edius-2.jpg","edius-3.jpg","edius-4.jpg","edius-5.jpg","edius-6.jpg"]'
                                                data-product-rating="4"
                                                data-product-rating-count="22">
                                                QUICKVIEW
                                            </a>
                                            <button className="addtocart-btn btn-primary" onClick={() => addToCart('Edius 11')}>ADD TO CART</button>
                                        </div>
                                        <a href="/wishlist" className="wishlist-btn card-wishlist">❤️</a>
                                    </div>
                                    <div className="product-card-details text-center">
                                        <h3 className="product-card-title">
                                            <a href="#" style={{ textDecoration: "none" }}>Edius 11</a>
                                        </h3>
                                        <div className="product-card-price">
                                            <span className="card-price-regular">₹1000</span>
                                            <span className="card-price-compare text-decoration-line-through">₹1500</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Repeat for Product 2 */}
                            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="700">
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <a className="hover-switch" href="#">
                                            <img className="primary-img" src="assets/img/products/insidelogic-album-sense.png" alt="product-img" />
                                        </a>
                                        <div className="product-card-action product-card-action-2">
                                            <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal"
                                                data-product-id="Album-Sense"
                                                data-product-name="Album Sense"
                                                data-product-price="1529.00"
                                                data-product-compare-price="1759.00"
                                                data-product-images='["as-1.png","as-2.jpg","as-3.jpg","as-4.jpg","as-5.jpg","as-6.jpg"]'
                                                data-product-rating="4"
                                                data-product-rating-count="22">
                                                QUICKVIEW
                                            </a>
                                            <button className="addtocart-btn btn-primary" onClick={() => addToCart('Album Sense')}>ADD TO CART</button>
                                        </div>
                                        <a href="/wishlist" className="wishlist-btn card-wishlist">❤️</a>
                                    </div>
                                    <div className="product-card-details text-center">
                                        <h3 className="product-card-title">
                                            <a href="#" style={{ textDecoration: "none" }}>Album Sense</a>
                                        </h3>
                                        <div className="product-card-price">
                                            <span className="card-price-regular">₹1529</span>
                                            <span className="card-price-compare text-decoration-line-through">₹1759</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="700">
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <a className="hover-switch" href="#">
                                            <img className="primary-img" src="assets/img/products/cut.png" alt="product-img" />
                                        </a>
                                        <div className="product-card-action product-card-action-2">
                                            <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal"
                                                data-product-id="Cut-Sense"
                                                data-product-name="Cut Sense"
                                                data-product-price="1529.00"
                                                data-product-compare-price="1759.00"
                                                data-product-images='["as-1.png","as-2.jpg","as-3.jpg","as-4.jpg","as-5.jpg","as-6.jpg","as-7.png","as-8.jpg"]'
                                                data-product-rating="4"
                                                data-product-rating-count="22">
                                                QUICKVIEW
                                            </a>
                                            <button className="addtocart-btn btn-primary" onClick={() => addToCart('Cut Sense')}>ADD TO CART</button>
                                        </div>
                                        <a href="/wishlist" className="wishlist-btn card-wishlist">❤️</a>
                                    </div>
                                    <div className="product-card-details text-center">
                                        <h3 className="product-card-title">
                                            <a href="#" style={{ textDecoration: "none" }}>Gold Projects Edit Zone</a>
                                        </h3>
                                        <div className="product-card-price">
                                            <span className="card-price-regular">₹1529</span>
                                            <span className="card-price-compare text-decoration-line-through">₹1759</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ✅ Bootstrap Quickview Modal */}
            <div className="modal fade" id="quickview-modal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Quick View</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* You can dynamically populate modal content here using state */}
                            <p>This is a sample modal content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedCollection;
