import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const [openSubMenu, setOpenSubMenu] = useState(null);
    const toggleSubMenu = (index) => {
        if (openSubMenu === index) {
            setOpenSubMenu(null);
        } else {
            setOpenSubMenu(index);
        }
    };
  return (
    <>
        <div className={`th-menu-wrapper ${isMenuOpen ? 'th-body-visible' : ''}`}>
            <div className="th-menu-area text-center">
                <button className="th-menu-toggle" onClick={closeMenu}>
                    <i className="fal fa-times"></i>
                </button>
                <div className="mobile-logo">
                    <a href="/">
                        <img src="assets/img/warrgyizmorsch-logo2.png" alt="warrgyizmorsch" style={{ height: '100px', width: 'auto'}}/>
                    </a>
                </div>
                <div className="th-mobile-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li className={`menu-item-has-children th-item-has-children ${openSubMenu === 1 ? 'th-active' : ''}`}>
                            <a href="#" onClick={() => toggleSubMenu(1)}>
                                Services<span className="th-mean-expand"></span>
                            </a>
                            <ul className={`sub-menu th-submenu ${openSubMenu === 1 ? 'th-open' : ''}`} style={{ display: openSubMenu === 1 ? 'block' : 'none' }}>
                                <li><a href="/services">All Services</a></li>
                                <li><a href="/service-accounting-and-bookkeeping-services">Accounting & Bookkeeping Services</a></li>
                                <li><a href="/service-content-writing">Content Writing Services</a></li>
                                <li><a href="/service-data-management">Data Management Services</a></li>
                                <li><a href="/">E Commerce Services</a></li>
                                <li><a href="/service-omni-support">Omni Support Services</a></li>
                                <li><a href="/service-virtual-learning">Virtual Learning Services</a></li>
                                <li><a href="/">Voice Support Services</a></li>
                                <li><a href="/service-website-design-development">Web Design & Development Services</a></li>
                                <li><a href="/">Digital Marketing Services</a></li>
                            </ul>
                        </li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <header class="th-header header-layout4 header-absolute">
            <div className="header-top" style={{ background: 'white'}}>
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                        <div className="col-auto d-none d-lg-block">
                            <div className="header-links">
                                <ul>
                                    <li><i className="fas fa-phone"></i><a href="tel:+442030533844">+44 2030533844</a></li>
                                    <li><i className="fas fa-phone"></i><a href="tel:+919257874994">+91 9257874994</a></li>
                                    <li><i className="fas fa-envelope"></i><a href="mailto:info@warrgyizmorsch.com">info@warrgyizmorsch.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="header-social"><span className="social-title">Follow Us On : </span>
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sticky-wrapper" style={{ background: ''}}>
                <div class="menu-area p-0">
                    <div class="container th-container5">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-auto">
                                <div class="header-logo">
                                    <a class="icon-masking" href="/">
                                        {/* <span data-mask-src="assets/img/logo-white.svg" class="mask-icon"></span> */}
                                        <img src="assets/img/warrgyizmorsch-logo.png" alt="warrgyizmorsch" style={{ height: '50px', width: 'auto', background: 'none'}} />
                                    </a>
                                </div>
                            </div>
                            <div class="col-auto">
                                <nav class="main-menu style2 d-none d-lg-inline-block">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li class="menu-item-has-children">
                                            <a href="/services">Services</a>
                                            <ul class="sub-menu">
                                                <li><a href="/service-accounting-and-bookkeeping-services">Accounting & Bookkeeping Services</a></li>
                                                <li><a href="/service-content-writing">Content Writing Services</a></li>
                                                <li><a href="/service-data-management">Data Management Services</a></li>
                                                <li><a href="/">E Commerce Services</a></li>
                                                <li><a href="/service-omni-support">Omni Support Services</a></li>
                                                <li><a href="/service-virtual-learning">Virtual Learning Services</a></li>
                                                <li><a href="/">Voice Support Services</a></li>
                                                <li><a href="/service-website-design-development">Web Design & Development Services</a></li>
                                                <li><a href="/">Digital Marketing Services</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/career">Career</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                        <li><a href="/gallery">Gallery</a></li>                                        
                                    </ul>
                                </nav>
                                <button type="button" class="th-menu-toggle d-block d-lg-none" onClick={toggleMenu}>
                                    <i class="far fa-bars"></i>
                                </button>
                            </div>
                            <div class="col-auto d-none d-lg-inline-block">
                                <div class="header-button">
                                    <a href="/contact" class="th-btn style6 style-radius" style={{ padding: '10px 20px'}}>Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header;