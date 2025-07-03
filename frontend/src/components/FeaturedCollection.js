import React from 'react';

const products = [
  {
    id: "Edius-11",
    name: "Edius 11",
    img: "assets/img/products/grass-valley-edius-11.png",
    price: 1000,
    comparePrice: 1500
  },
  {
    id: "Album-Sense",
    name: "Album Sense",
    img: "assets/img/products/insidelogic-album-sense.png",
    price: 1529,
    comparePrice: 1759
  },
  {
    id: "Cut-Sense",
    name: "Cut Sense",
    img: "assets/img/products/cut.png",
    price: 1529,
    comparePrice: 1759
  }
];

const FeaturedCollection = ({ addToCart, openQuickview }) => (
  <div className="featured-collection mt-100 overflow-hidden">
    <div className="collection-tab-inner">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-heading">Our Products</h2>
        </div>
        <div className="row">
          {products.map((p, idx) => (
            <div key={p.id} className="col-lg-4 col-md-6 col-12" >
              <div className="product-card">
                <div className="product-card-img">
                  <a className="hover-switch" href="/">
                    <img className="primary-img" src={p.img} alt="product-img" />
                  </a>
                  <div className="product-card-action product-card-action-2">
                    <button
                      className="quickview-btn btn-primary"
                      onClick={() => openQuickview(p)}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview-modal"
                    >
                      QUICKVIEW
                    </button>
                    <button
                      className="addtocart-btn btn-primary"
                      onClick={() => addToCart(p.name)}
                      type="button"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <a href="wishlist.html" className="wishlist-btn card-wishlist">
                    {/* SVG heart icon */}
                  </a>
                </div>
                <div className="product-card-details text-center">
                  <h3 className="product-card-title"><a href="/">{p.name}</a></h3>
                  <div className="product-card-price">
                    <span className="card-price-regular">₹{p.price}</span>
                    <span className="card-price-compare text-decoration-line-through">₹{p.comparePrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedCollection;
