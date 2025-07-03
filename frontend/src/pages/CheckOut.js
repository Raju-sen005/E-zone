import React, { useState, useEffect } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Breadcrumb from './Breadcrumb';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';

const CheckOut = () => {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const shipping = 0;
  const discount = 0;

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedItems);

    let calculatedSubtotal = 0;
    savedItems.forEach(item => {
      calculatedSubtotal += item.price * item.quantity;
    });

    setSubtotal(calculatedSubtotal);
  }, []);

  const total = subtotal + shipping - discount;

  const handleProceedToShipping = async () => {
    setLoading(true);

    const payload = {
      name: 'Rajendra Jangid',
      mobileNumber: '6378852898',
      amount: total
    };

    try {
      const response = await fetch('https://editzone.onrender.com/phonepay/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.url) {
        window.location.href = result.url;
      } else {
        alert('Payment gateway initialization failed.');
        setLoading(false);
      }
    } catch (error) {
      console.error('API Error:', error);
      alert('Something went wrong while connecting to the payment gateway.');
      setLoading(false);
    }
  };

  return (
    <div className="body-wrapper">
      <AnnouncementBar />
      <Header />
      <Breadcrumb />
      <main id="MainContent" className="content-for-layout">
        <div className="checkout-page mt-100">
          <div className="container">
            <div className="checkout-page-wrapper">
              <div className="row">
                <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                  <div className="section-header mb-3">
                    <h2 className="section-heading">Check out</h2>
                  </div>

                  <div className="checkout-progress overflow-hidden">
                    <ol className="checkout-bar px-0">
                      <li className="progress-step step-done"><a href="cart.html">Cart</a></li>
                      <li className="progress-step step-active"><a href="checkout.html">Your Details</a></li>
                      <li className="progress-step step-todo"><a href="checkout.html">Shipping</a></li>
                      <li className="progress-step step-todo"><a href="checkout.html">Payment</a></li>
                      <li className="progress-step step-todo"><a href="checkout.html">Review</a></li>
                    </ol>
                  </div>

                  <div className="shipping-address-area">
                    <h2 className="shipping-address-heading pb-1">Shipping address</h2>
                    <div className="shipping-address-form-wrapper">
                      <form action="#" className="shipping-address-form common-form">
                        <div className="row">
                          {["First name", "Last name", "Email address", "Phone number", "Company", "Country", "City", "Zip code", "Address 1", "Address 2"].map((label, i) => (
                            <div key={i} className="col-lg-6 col-md-12 col-12">
                              <fieldset>
                                <label className="label">{label}</label>
                                <input type="text" />
                              </fieldset>
                            </div>
                          ))}
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="shipping-address-area billing-area">
                    <h2 className="shipping-address-heading pb-1">Billing address</h2>
                    <div className="form-checkbox d-flex align-items-center mt-4">
                      <input className="form-check-input mt-0" type="checkbox" />
                      <label className="form-check-label ms-2">
                        Same as shipping address
                      </label>
                    </div>
                  </div>

                  <div className="shipping-address-area billing-area">
                    <div className="minicart-btn-area d-flex align-items-center justify-content-between flex-wrap">
                      <a href="cart.html" className="checkout-page-btn minicart-btn btn-secondary">BACK TO CART</a>
                      <button
                        className="checkout-page-btn minicart-btn btn-primary"
                        onClick={handleProceedToShipping}
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'PROCEED TO SHIPPING'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-12 col-12">
                  <div className="cart-total-area checkout-summary-area">
                    <h3 className="d-none d-lg-block mb-0 text-center heading_24 mb-4">Order summary</h3>
                    {cartItems.map((item, index) => (
                      <div key={index} className="minicart-item d-flex">
                        <div className="mini-img-wrapper">
                          <img className="mini-img" src={item.image} alt={item.name} />
                        </div>
                        <div className="product-info">
                          <h2 className="product-title">
                            <a href={item.link}>{item.name}</a>
                          </h2>
                          <p className="product-vendor">₹{item.price} x {item.quantity}</p>
                        </div>
                      </div>
                    ))}

                    <div className="cart-total-box mt-4 bg-transparent p-0">
                      <div className="subtotal-item subtotal-box">
                        <h4 className="subtotal-title">Subtotals:</h4>
                        <p className="subtotal-value">₹{subtotal.toFixed(2)}</p>
                      </div>
                      <div className="subtotal-item shipping-box">
                        <h4 className="subtotal-title">Shipping:</h4>
                        <p className="subtotal-value">₹{shipping.toFixed(2)}</p>
                      </div>
                      <div className="subtotal-item discount-box">
                        <h4 className="subtotal-title">Discount:</h4>
                        <p className="subtotal-value">₹{discount.toFixed(2)}</p>
                      </div>
                      <hr />
                      <div className="subtotal-item discount-box">
                        <h4 className="subtotal-title">Total:</h4>
                        <p className="subtotal-value">₹{total.toFixed(2)}</p>
                      </div>

                      <div className="mt-4 checkout-promo-code">
                        <input className="input-promo-code" type="text" placeholder="Promo code" />
                        <a href="checkout.html" className="btn-apply-code position-relative btn-secondary text-uppercase mt-3">
                          Apply Promo Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollUpButton />
      <DrawerMenu />
      <DrawerCart />
    </div>
  );
};

export default CheckOut;
