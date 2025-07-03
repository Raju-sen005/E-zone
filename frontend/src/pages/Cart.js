import React, { useEffect, useState } from 'react';

import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Breadcrumb from './Breadcrumb'
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';

const Cart = () => {
      const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const shipping = 0;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    calculateTotals();
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const calculateTotals = () => {
    const sub = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const disc = sub >= 200 ? 0 : 0; // Modify logic for discount if needed
    setSubtotal(sub);
    setDiscount(disc);
  };

  const changeQuantity = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  return (
    <>
      <div className="body-wrapper">
       <AnnouncementBar />
       <Header />
       <Breadcrumb />
        <main id="MainContent" className="content-for-layout">
      <div className="cart-page mt-100">
        <div className="container">
          <div className="cart-page-wrapper">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-12">
                <table className="cart-table w-100">
                  <tbody>
                    {cart.map((item, index) => (
                      <tr className="cart-item" key={index}>
                        <td className="cart-item-media">
                          <div className="mini-img-wrapper">
                            <img className="mini-img" src={item.image} alt="img" />
                          </div>
                        </td>
                        <td className="cart-item-details">
                          <h2 className="product-title">
                            <a href={item.link}>{item.name}</a>
                          </h2>
                          <p className="product-vendor">Edit Zone</p>
                        </td>
                        <td className="cart-item-quantity">
                          <div className="quantity d-flex align-items-center justify-content-between">
                            <button
                              className="qty-btn dec-qty"
                              onClick={() => changeQuantity(index, -1)}
                            >
                              <img src="assets/img/icon/minus.svg" alt="minus" />
                            </button>
                            <input className="qty-input" type="number" value={item.quantity} readOnly />
                            <button
                              className="qty-btn inc-qty"
                              onClick={() => changeQuantity(index, 1)}
                            >
                              <img src="assets/img/icon/plus.svg" alt="plus" />
                            </button>
                          </div>
                          <button
                            className="product-remove mt-2"
                            onClick={() => removeItem(index)}
                          >
                            Remove
                          </button>
                        </td>
                        <td className="cart-item-price text-end">
                          <div className="product-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="col-lg-5 col-md-12 col-12">
                <div className="cart-total-area">
                  <h3 className="cart-total-title d-none d-lg-block mb-0">Cart Totals</h3>
                  <div className="cart-total-box mt-4">
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
                    <div className="subtotal-item total-box">
                      <h4 className="subtotal-title">Total:</h4>
                      <p className="subtotal-value total-value">₹{(subtotal - discount).toFixed(2)}</p>
                    </div>
                    <p className="shipping_text">Shipping & taxes calculated at checkout</p>
                    <div className="d-flex justify-content-center mt-4">
                      <a
                        href="checkout.html"
                        className="position-relative btn-primary text-uppercase"
                      >
                        Proceed to checkout
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
    </>
  )
}

export default Cart
