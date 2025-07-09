// Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import DrawerMenu from '../components/DrawerMenu';
import DrawerCart from '../components/DrawerCart';
import { Link } from 'react-router-dom';

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
  
    // validation
    if (!firstName.trim()) return alert("First name is required");
    if (!lastName.trim()) return alert("Last name is required");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert("Please enter a valid email");
    if (password.length < 6) return alert("Password must be at least 6 characters");
  
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstName, lastName, email, password })
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Registration successful!");
        navigate("/login"); // redirect to login
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Register Error:", error);
      alert("Failed to connect to server");
    }
  };
  
  return (
    <>
      <div className="body-wrapper">
        <AnnouncementBar />
        <Header />

        <div className="breadcrumb">
          <div className="container">
            <ul className="list-unstyled d-flex align-items-center m-0">
              <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
              <li><svg className="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64"><g opacity="0.4"><path d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z" fill="#000" /></g></svg></li>
              <li>Register</li>
            </ul>
          </div>
        </div>

        <main id="MainContent" className="content-for-layout">
          <div className="login-page mt-100">
            <div className="container">
              <form onSubmit={handleSubmit} className="login-form common-form mx-auto">
                <div className="section-header mb-3">
                  <h2 className="section-heading text-center">Register</h2>
                </div>
                <div className="row">
                  {['firstName', 'lastName', 'email', 'password'].map(field => (
                    <div className="col-12" key={field}>
                      <fieldset>
                        <label className="label">{field === 'firstName' ? 'First Name' : field === 'lastName' ? 'Last Name' : field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <input
                          type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          required
                        />
                      </fieldset>
                    </div>
                  ))}
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
