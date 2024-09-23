import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer-wrapper footer-layout2" data-bg-src="assets/img/bg/footer_bg_1.jpg">
                <div className="widget-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xxl-3 col-xl-3">
                                <div className="widget footer-widget">
                                    <div className="th-widget-about">
                                        <div className="about-logo">
                                            <h4>ABOUT US</h4>
                                        </div>
                                        <p className="about-text">
                                            Welcome to Warrgyizmorsch , your number one source for all the outsourcing services. 
                                            We're dedicated to providing you the very best of technical and non technical services,
                                            with an emphasis on meeting the deadline, satisfactory service and 24*7 services.
                                        </p>
                                        <div className="th-social">
                                            <a href="https://www.facebook.com/">
                                                <i className="fab fa-facebook-f"></i>
                                            </a> <a href="https://www.twitter.com/">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="https://www.whatsapp.com/">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about-us">About Us</a></li>
                                            <li><a href="/services">Services</a></li>
                                            <li><a href="/contact-us">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Short Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a href="/blog">Blogs</a></li>
                                            <li><a href="/digital-marketing-pricing">Digital Marketing Pricing</a></li>
                                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                                            <li><a href="/terms-conditions">Terms & Conditions</a></li>
                                            <li><a href="/cancellation-policy">Cancellation Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title" style={{ maxWidth: '-webkit-fill-available'}}>Get in touch!</h3>
                                    <div className="th-widget-contact" style={{ maxWidth: '-webkit-fill-available'}}>
                                        <div className="contact-feature">
                                            <div className="icon-btn"><i className="fa-solid fa-location-dot"></i></div>
                                            <div className="media-body">
                                                <p className="contact-feature_label">office location</p>
                                                <a href="https://www.google.com/maps" className="contact-feature_link" style={{ overflowWrap: 'anywhere'}}>Warrgyizmorsch private limited, 410,  4th floor, Ashoka palace, Shobhagpura, Udaipur, Rajasthan</a>
                                            </div>
                                        </div>
                                        <div className="contact-feature">
                                            <div className="icon-btn"><i className="fa-solid fa-location-dot"></i></div>
                                            <div className="media-body">
                                                <p className="contact-feature_label">office location</p>
                                                <a href="https://www.google.com/maps" className="contact-feature_link" style={{ overflowWrap: 'anywhere'}}>First floor, Bilt mansions, suite 114, 4-16 Deptford Bridge, London SE8 4HH, United Kingdom</a>
                                            </div>
                                        </div>
                                        <div className="contact-feature">
                                            <div className="icon-btn"><i className="fa-solid fa-phone"></i></div>
                                            <div className="media-body">
                                                <p className="contact-feature_label">Phone Number</p>
                                                <a href="tel:+918693085077" className="contact-feature_link" style={{ overflowWrap: 'anywhere'}}>+91 8693085077</a>
                                            </div>
                                        </div>
                                        <div className="contact-feature">
                                            <div className="icon-btn"><i className="fa-solid fa-envelope"></i></div>
                                            <div className="media-body">
                                                <p className="contact-feature_label">Email address</p>
                                                <a href="mailto:info@warrgyizmorsch.com" className="contact-feature_link" style={{ overflowWrap: 'anywhere'}}>info@warrgyizmorsch.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap bg-theme">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-12">
                                <p className="copyright-text text-center">
                                    Copyright <i className="fal fa-copyright"></i> 2021 
                                    <a href="https://warrgyizmorsch.com"> Warrgyizmorsch</a>
                                    . All Rights Reserved.
                                </p>
                            </div>
                            {/* <div className="col-lg-6 text-end d-none d-lg-block">
                                <div className="footer-links">
                                    <ul>
                                        <li><a href="about.html">Terms & Condition</a></li>
                                        <li><a href="about.html">Careers</a></li>
                                        <li><a href="about.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;