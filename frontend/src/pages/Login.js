import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // from react-router-dom

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return alert('Email is required');
    }
    if (!emailRegex.test(email)) {
      return alert('Please enter a valid email address');
    }
    if (!password) {
      return alert('Password is required');
    }

    try {
      const res = await fetch("https://editzone.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("userData", JSON.stringify(data?.user || {}));
        alert("Login successful");
        navigate("/"); // or use window.location.href = '/'
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="body-wrapper">
        <AnnouncementBar />
        <Header />

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul className="list-unstyled d-flex align-items-center m-0">
              <li><a href="/">Home</a></li>
              <li>
                <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64">
                  <g opacity="0.4">
                    <path d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z" fill="#000" />
                  </g>
                </svg>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>

        {/* Login Form */}
        <main id="MainContent" className="content-for-layout">
          <div className="login-page mt-100">
            <div className="container">
              <form onSubmit={handleSubmit} className="login-form common-form mx-auto">
                <div className="section-header mb-3">
                  <h2 className="section-heading text-center">Login</h2>
                </div>
                <div className="row">
                  <div className="col-12">
                    <fieldset>
                      <label className="label">Email address</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <label className="label">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12 mt-3">
                    <a href="/forget-password" className="text_14 d-block">Forgot your password?</a>
                    <button type="submit" className="btn-primary d-block mt-4 btn-signin">SIGN IN</button>
                    <a href="/register" className="btn-secondary mt-2 btn-signin">CREATE AN ACCOUNT</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>

        <Footer />
        <ScrollUpButton />
        <DrawerMenu />
        <DrawerCart />
      </div>
    </>
  );
};

export default Login;
