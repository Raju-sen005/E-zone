import React, { useState } from 'react';
// import UserToggle from './UserToggle'; // अगर login-toggle चाहिए

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
                                    <a href="/" className="logo-main">
                                        <img src="assets/img/logo.png" width="50%" loading="lazy" alt="Logo" />
                                    </a>
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="col-lg-6 d-lg-block d-none">
                                <nav className="site-navigation">
                                    <ul className="main-menu list-unstyled justify-content-center">
                                        <li className="menu-list-item nav-item has-dropdown active"><a className="nav-link" href="/">Home</a></li>
                                        <li className="menu-list-item nav-item has-dropdown"><a className="nav-link" href="/edius11">Edius 11</a></li>
                                        <li className="menu-list-item nav-item has-dropdown"><a className="nav-link" href="/album-sense">Album Sense</a></li>
                                        <li className="menu-list-item nav-item has-dropdown">
                                            <div className="mega-menu-header">
                                                <a className="nav-link" href="/">Products</a>
                                                <span class="open-submenu">
                                                <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop">
                                                <ul className="submenu list-unstyled">
                                                    <li><a className="nav-link-sub nav-text-sub" href="/album-sense">Album Sense</a></li>
                                                    <li><a className="nav-link-sub nav-text-sub" href="/cut-sense">Cut Sense</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item has-dropdown">
                                            <div className="mega-menu-header">
                                                <a className="nav-link" href="/">Others</a>
                                               <span class="open-submenu">
                                                <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop">
                                                <ul className="submenu list-unstyled">
                                                    <li><a className="nav-link-sub nav-text-sub" href="/editing-academy">Editing Academy</a></li>
                                                    <li><a className="nav-link-sub nav-text-sub" href="/exhibitions">Exhibitions</a></li>
                                                    <li><a className="nav-link-sub nav-text-sub" href="/downloads">Downloads</a></li>
                                                    <li><a className="nav-link-sub nav-text-sub" href="/blog">Our Blogs</a></li>
                                                    <li><a className="nav-link-sub nav-text-sub" href="/gallery">Gallery</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>

                            {/* Action Icons */}
                            <div className="col-lg-3 col-md-8 col-8">
                                <div className="header-action d-flex align-items-center justify-content-end">
                                    <button className="header-action-item header-search" onClick={toggleSearch}>
                                        {/* search SVG */}
                                    </button>
                                    <a className="header-action-item header-wishlist ms-4 d-none d-lg-block" href="/wishlist">
                                        {/* wishlist SVG */}
                                    </a>
                                    <a className="header-action-item header-cart ms-4" href="#drawer-cart" data-bs-toggle="offcanvas">
                                        {/* cart SVG */}
                                    </a>
                                    <a className="header-action-item header-hamburger ms-4 d-lg-none" href="#drawer-menu" data-bs-toggle="offcanvas">
                                        {/* hamburger SVG */}
                                    </a>
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
