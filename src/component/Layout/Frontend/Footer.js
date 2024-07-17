import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="footer-wrapper footer-layout2" data-bg-src="assets/img/bg/footer_bg_1.jpg">
                <div class="widget-area">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-md-6 col-xxl-3 col-xl-3">
                                <div class="widget footer-widget">
                                    <div class="th-widget-about">
                                        <div class="about-logo">
                                            <h4>ABOUT US</h4>
                                        </div>
                                        <p class="about-text">
                                            Welcome to Warrgyizmorsch , your number one source for all the outsourcing services. 
                                            We're dedicated to providing you the very best of technical and non technical services,
                                            with an emphasis on meeting the deadline, satisfactory service and 24*7 services.
                                        </p>
                                        <div class="th-social">
                                            <a href="https://www.facebook.com/">
                                                <i class="fab fa-facebook-f"></i>
                                            </a> <a href="https://www.twitter.com/">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="https://www.whatsapp.com/">
                                                <i class="fab fa-whatsapp"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-auto">
                                <div class="widget widget_nav_menu footer-widget">
                                    <h3 class="widget_title">Quick Links</h3>
                                    <div class="menu-all-pages-container">
                                        <ul class="menu">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="/services">Services</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-auto">
                                <div class="widget widget_nav_menu footer-widget">
                                    <h3 class="widget_title">Short Links</h3>
                                    <div class="menu-all-pages-container">
                                        <ul class="menu">
                                            <li><a href="/">Blogs</a></li>
                                            <li><a href="/">Digital Marketing Pricing</a></li>
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Terms & Conditions</a></li>
                                            <li><a href="/">Cancellation Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="widget footer-widget">
                                    <h3 class="widget_title" style={{ maxWidth: '-webkit-fill-available'}}>Get in touch!</h3>
                                    <div class="th-widget-contact" style={{ maxWidth: '-webkit-fill-available'}}>
                                        <div class="contact-feature">
                                            <div class="icon-btn"><i class="fa-solid fa-location-dot"></i></div>
                                            <div class="media-body">
                                                <p class="contact-feature_label">office location</p>
                                                <a href="https://www.google.com/maps" class="contact-feature_link">Warrgyizmorsch private limited,27 krishna vihar Behind mds school old rto Pratap nagar Udaipur,  Rajasthan</a>
                                            </div>
                                        </div>
                                        <div class="contact-feature">
                                            <div class="icon-btn"><i class="fa-solid fa-location-dot"></i></div>
                                            <div class="media-body">
                                                <p class="contact-feature_label">office location</p>
                                                <a href="https://www.google.com/maps" class="contact-feature_link">first floor, Bilt mansions, suite 114, 4-16 Deptford Bridge, London SE8 4HH, United Kingdom</a>
                                            </div>
                                        </div>
                                        <div class="contact-feature">
                                            <div class="icon-btn"><i class="fa-solid fa-phone"></i></div>
                                            <div class="media-body">
                                                <p class="contact-feature_label">Phone Number</p>
                                                <a href="tel:+442030533844" class="contact-feature_link">+44 2030533844</a>
                                            </div>
                                        </div>
                                        <div class="contact-feature">
                                            <div class="icon-btn"><i class="fa-solid fa-envelope"></i></div>
                                            <div class="media-body">
                                                <p class="contact-feature_label">Email address</p>
                                                <a href="mailto:info@warrgyizmorsch.com" class="contact-feature_link">info@warrgyizmorsch.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-wrap bg-theme">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-lg-12">
                                <p class="copyright-text text-center">
                                    Copyright <i class="fal fa-copyright"></i> 2021 
                                    <a href="https://warrgyizmorsch.com"> Warrgyizmorsch</a>
                                    . All Rights Reserved.
                                </p>
                            </div>
                            {/* <div class="col-lg-6 text-end d-none d-lg-block">
                                <div class="footer-links">
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