import React, { useState } from 'react';
// import UserToggle from './UserToggle'; // अगर login-toggle चाहिए
import { Link } from 'react-router-dom';
const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => setSearchOpen(prev => !prev);

    return (
        <>
            <header className="sticky-header border-btm-black header-1">
                <div className="header-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Logo */}
                            <div className="col-lg-3 col-md-4 col-4">
                                <div className="header-logo">
                                    <Link to="/" className="logo-main">
                                        <img src="assets/img/logo.png" width="50%" loading="lazy" alt="Logo" />
                                    </Link>
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="col-lg-6 d-lg-block d-none">
                                <nav className="site-navigation">
                                    <ul className="main-menu list-unstyled justify-content-center" style={{ fontWeight: "500" }}>
                                        <li className="menu-list-item nav-item has-dropdown active"><Link className="nav-link" to="/">Home</Link></li>
                                        <li className="menu-list-item nav-item has-dropdown"><Link className="nav-link" to="/edius11">Edius 11</Link></li>
                                        <li className="menu-list-item nav-item has-dropdown"><Link className="nav-link" to="/albumsense">Album Sense</Link></li>
                                        <li className="menu-list-item nav-item has-dropdown">
                                            <div className="mega-menu-header">
                                                <Link className="nav-link" to="/">Products</Link>
                                                <span className="open-submenu">
                                                <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop">
                                                <ul className="submenu list-unstyled">
                                                    <li><Link className="nav-link-sub nav-text-sub " to="/albumsense" style={{padding:"8px 30px"}}>Album Sense</Link></li>
                                                    <li><Link className="nav-link-sub nav-text-sub " to="/cutsense" style={{padding:"8px 30px"}}>Cut Sense</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item has-dropdown">
                                            <div className="mega-menu-header">
                                                <Link className="nav-link" to="/">Others</Link>
                                               <span className="open-submenu">
                                                <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop ">
                                                <ul className="submenu list-unstyled">
                                                    <li><Link className="nav-link-sub nav-text-sub" to="/video-editing" style={{padding:"8px 30px"}}>Editing Academy</Link></li>
                                                    <li><Link className="nav-link-sub nav-text-sub" to="/video-editing" style={{padding:"8px 30px"}}>Exhibitions</Link></li>
                                                    <li><Link className="nav-link-sub nav-text-sub" to="/downloads" style={{padding:"8px 30px"}}>Downloads</Link></li>
                                                    <li><Link className="nav-link-sub nav-text-sub" to="/blog" style={{padding:"8px 30px"}}>Our Blogs</Link></li>
                                                    <li><Link className="nav-link-sub nav-text-sub" to="/gallery" style={{padding:"8px 30px"}}>Gallery</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            {/* Action Icons */}
                            <div className="col-lg-3 col-md-8 col-8">
                                <div className="header-action d-flex align-items-center justify-content-end">
                                    <button className="header-action-item header-search" onClick={toggleSearch}>
                                        {/* search SVG */}
                                    </button>
                                    <Link className="header-action-item header-wishlist ms-4 d-none d-lg-block" to="/wishlist">
                                        {/* wishlist SVG */}
                                    </Link>
                                    <Link className="header-action-item header-cart ms-4" to="#drawer-cart" data-bs-toggle="offcanvas">
                                        {/* cart SVG */}
                                    </Link>
                                    <Link className="header-action-item header-hamburger ms-4 d-lg-none" to="#drawer-menu" data-bs-toggle="offcanvas">
                                        {/* hamburger SVG */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Overlay */}
                    {searchOpen && (
                        <div className="search-wrapper">
                            <div className="container">
                                <form className="search-form d-flex align-items-center" onSubmit={e => e.preventDefault()}>
                                    <button type="button" className="search-submit bg-transparent pl-0 text-start" onClick={() => {/* submit logic */ }}>
                                        {/* search icon SVG */}
                                    </button>
                                    <div className="search-input mr-4">
                                        <input type="text" placeholder="Search your products..." autoComplete="off" />
                                    </div>
                                    <button type="button" className="search-close" onClick={toggleSearch}>
                                        {/* close SVG */}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
