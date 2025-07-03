import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = formData;

    if (!firstName.trim()) {
      alert("First name is required");
      return;
    }
    if (!lastName.trim()) {
      alert("Last name is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await fetch("https://editzone.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstName, lastName, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account Created Successfully");
        navigate("/login"); // Redirect to login page
      } else {
        alert("Signup Failed: " + data.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong");
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
                <svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <g opacity="0.4">
                    <path
                      d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z"
                      fill="#000"
                    />
                  </g>
                </svg>
              </li>
              <li>Register</li>
            </ul>
          </div>
        </div>

        {/* Register Form */}
        <main id="MainContent" className="content-for-layout">
          <div className="login-page mt-100">
            <div className="container">
              <form onSubmit={handleSubmit} className="login-form common-form mx-auto">
                <div className="section-header mb-3">
                  <h2 className="section-heading text-center">Register</h2>
                </div>
                <div className="row">
                  <div className="col-12">
                    <fieldset>
                      <label className="label">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <label className="label">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <label className="label">Email address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-12 mt-3">
                    <button type="submit" className="btn-primary d-block mt-3 btn-signin">CREATE</button>
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

export default Register;
