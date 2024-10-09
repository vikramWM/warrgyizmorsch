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
                        <li><a href="/about-us">About Us</a></li>
                        <li className={`menu-item-has-children th-item-has-children ${openSubMenu === 1 ? 'th-active' : ''}`}>
                            <a href="#" onClick={() => toggleSubMenu(1)}>
                                Services<span className="th-mean-expand"></span>
                            </a>
                            <ul className={`sub-menu th-submenu ${openSubMenu === 1 ? 'th-open' : ''}`} style={{ display: openSubMenu === 1 ? 'block' : 'none' }}>
                                <li><a href="/services">All Services</a></li>
                                <li><a href="/accounting-bookkeeping-services-uk">Accounting & Bookkeeping Services</a></li>
                                <li><a href="/content-writing-service">Content Writing Services</a></li>
                                <li><a href="/data-management-services">Data Management Services</a></li>
                                <li><a href="/e-commerce-services">E Commerce Services</a></li>
                                {/* <li><a href="/omni-support">Omni Support Services</a></li> */}
                                <li><a href="/virtual-learning-services">Virtual Learning Services</a></li>
                                {/* <li><a href="/call-preference-service">Voice Support Services</a></li> */}
                                <li><a href="/website-design-development">Web Design & Development Services</a></li>
                                <li><a href="/digital-marketing-services">Digital Marketing Services</a></li>
                            </ul>
                        </li>
                        {/* <li><a href="/career">Career</a></li> */}
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <header className="th-header header-layout4" style={{ position: 'relative', backgroundColor: '#18336c'}}>
            <div className="header-top" style={{ background: 'white'}}>
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                        <div className="col-auto d-none d-lg-block">
                            <div className="header-links">
                                <ul>
                                    <li><i className="fas fa-phone"></i><a href="tel:+442030533844">+44 2030533844</a></li>
                                    <li><i className="fas fa-phone"></i><a href="tel:+918693085077">+91 8693085077</a></li>
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
            <div className="sticky-wrapper" style={{ background: ''}}>
                <div className="menu-area p-0">
                    <div className="container th-container5">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo">
                                    <a className="icon-masking" href="/">
                                        {/* <span data-mask-src="assets/img/logo-white.svg" className="mask-icon"></span> */}
                                        <img src="assets/img/warrgyizmorsch-logo.png" alt="warrgyizmorsch" style={{ height: '50px', width: 'auto', background: 'none'}} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-auto">
                                <nav className="main-menu style2 d-none d-lg-inline-block">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about-us">About Us</a></li>
                                        <li className="menu-item-has-children">
                                            <a href="/services">Services</a>
                                            <ul className="sub-menu">
                                                <li><a href="/accounting-bookkeeping-services-uk">Accounting & Bookkeeping Services</a></li>
                                                <li><a href="/content-writing-service">Content Writing Services</a></li>
                                                <li><a href="/data-management-services">Data Management Services</a></li>
                                                <li><a href="/e-commerce-services">E Commerce Services</a></li>
                                                {/* <li><a href="/omni-support">Omni Support Services</a></li> */}
                                                <li><a href="/virtual-learning-services">Virtual Learning Services</a></li>
                                                {/* <li><a href="/call-preference-service">Voice Support Services</a></li> */}
                                                <li><a href="/website-design-development">Web Design & Development Services</a></li>
                                                <li><a href="/digital-marketing-services">Digital Marketing Services</a></li>
                                            </ul>
                                        </li>
                                        {/* <li><a href="/career">Career</a></li> */}
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact-us">Contact Us</a></li>
                                        <li><a href="/gallery">Gallery</a></li>                                        
                                    </ul>
                                </nav>
                                <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={toggleMenu}>
                                    <i className="far fa-bars"></i>
                                </button>
                            </div>
                            <div className="col-auto d-none d-lg-inline-block">
                                <div className="header-button">
                                    <a href="/contact-us" className="th-btn style6 style-radius" style={{ padding: '10px 20px'}}>Get Started</a>
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