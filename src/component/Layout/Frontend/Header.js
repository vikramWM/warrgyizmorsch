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
                    <a href="index.html">
                        <img src="assets/img/logo.svg" alt="Webteck" />
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
                                <li><a href="/services">Services</a></li>
                                <li><a href="service-details.html">Services Details</a></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children th-item-has-children ${openSubMenu === 2 ? 'th-active' : ''}`}>
                            <a href="#" onClick={() => toggleSubMenu(2)}>
                                Pages<span className="th-mean-expand"></span>
                            </a>
                            <ul className={`sub-menu th-submenu ${openSubMenu === 2 ? 'th-open' : ''}`} style={{ display: openSubMenu === 2 ? 'block' : 'none' }}>
                                <li className={`menu-item-has-children th-item-has-children ${openSubMenu === 3 ? 'th-active' : ''}`}>
                                    <a href="#" onClick={() => toggleSubMenu(3)}>
                                        Shop<span className="th-mean-expand"></span>
                                    </a>
                                    <ul className={`sub-menu th-submenu ${openSubMenu === 3 ? 'th-open' : ''}`} style={{ display: openSubMenu === 3 ? 'block' : 'none' }}>
                                        <li><a href="shop.html">Shop</a></li>
                                        <li><a href="shop-details.html">Shop Details</a></li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                    </ul>
                                </li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="team-details.html">Team Details</a></li>
                                <li><a href="project.html">Project</a></li>
                                <li><a href="project-details.html">Project Details</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="faq.html">Faq Page</a></li>
                                <li><a href="error.html">Error Page</a></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children th-item-has-children ${openSubMenu === 4 ? 'th-active' : ''}`}>
                            <a href="#" onClick={() => toggleSubMenu(4)}>
                                Blog<span className="th-mean-expand"></span>
                            </a>
                            <ul className={`sub-menu th-submenu ${openSubMenu === 4 ? 'th-open' : ''}`} style={{ display: openSubMenu === 4 ? 'block' : 'none' }}>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <header class="th-header header-layout4 header-absolute" style={{ position: 'sticky'}}>
            <div className="header-top pb-2" style={{ background: '#3d005b'}}>
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                        <div className="col-auto d-none d-lg-block">
                            <div className="header-links">
                                <ul>
                                    <li><i className="fas fa-phone"></i><a href="tel:+1539873657">+91 92578 74994</a></li>
                                    <li><i className="fas fa-phone"></i><a href="tel:+1539873657">+91 92578 74994</a></li>
                                    <li><i className="fas fa-envelope"></i><a href="mailto:info@creativeandinnovative.com">info@creativeandinnovative.com</a></li>
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
            <div class="sticky-wrapper" style={{ background: '#7e2eb2'}}>
                <div class="menu-area">
                    <div class="container th-container5">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-auto">
                                <div class="header-logo">
                                    <a class="icon-masking" href="index.html">
                                        {/* <span data-mask-src="assets/img/logo-white.svg" class="mask-icon"></span> */}
                                        <img src="assets/img/logo-white.svg" alt="Webteck" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-auto">
                                <nav class="main-menu style2 d-none d-lg-inline-block">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li class="menu-item-has-children">
                                            <a href="#">Services</a>
                                            <ul class="sub-menu">
                                                <li><a href="service.html">Services</a></li>
                                                <li><a href="service-details.html">Services Details</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#">Pages</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item-has-children">
                                                    <a href="#">Shop</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="shop.html">Shop</a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                        <li><a href="cart.html">Cart Page</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="project.html">Project</a></li>
                                                <li><a href="project-details.html">Project Details</a></li>
                                                <li><a href="gallery.html">Gallery</a></li>
                                                <li><a href="pricing.html">Pricing</a></li>
                                                <li><a href="faq.html">Faq Page</a></li>
                                                <li><a href="error.html">Error Page</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#">Blog</a>
                                            <ul class="sub-menu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                                <button type="button" class="th-menu-toggle d-block d-lg-none" onClick={toggleMenu}>
                                    <i class="far fa-bars"></i>
                                </button>
                            </div>
                            <div class="col-auto d-none d-lg-inline-block">
                                <div class="header-button">
                                    <a href="contact.html" class="th-btn style6 style-radius">Get Started</a>
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