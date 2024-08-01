import React from 'react';

const About = () => {
    return (
        <>
            
            <div className="th-hero-wrapper hero-1" id="hero">
                <div className="hero-img tilt-active">
                    <img src="assets/img/hero/hero_img_1_1.png" alt="Hero Image" />
                </div>
                <div className="container">
                    <div className="hero-style1">
                        <span className="hero-subtitle">About</span>
                        <h1 className="hero-title">Warrgyiz Morsch</h1>
                        <p className="hero-text">
                            Welcome to Warrgyizmorsch , your number one source for all the outsourcing services. 
                            We're dedicated to providing you the very best of technical and non-technical services, 
                            with an emphasis on meeting the deadline, satisfactory service and 24*7 services. <br />
                            Founded in 2017, Warrgyizmorsch has come its way from its beginnings. When we first 
                            started out, our passion for our clients ["to keep you first] drove our clients to 
                            flourish their business. <br />
                            We hope you enjoy our services as much as we enjoy offering them to you. 
                            If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <div className="btn-group">
                            <a href="/contact-us" className="th-btn">
                                CONTACT US
                                <i className="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                            <div className="call-btn">
                                <a href="javascript:void(0);" className="play-btn popup-video">
                                    <i className="fas fa-play"></i>
                                </a>
                                <div className="media-body">
                                    <a href="javascript:void(0);" className="btn-title popup-video">
                                        Watch Our Story
                                    </a> 
                                    <span className="btn-text">Subscribe Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape1"><img src="assets/img/hero/hero_shape_1_1.svg" alt="shape" /></div>
                <div className="hero-shape2"><img src="assets/img/hero/hero_shape_1_2.svg" alt="shape" /></div>
                <div className="hero-shape3"><img src="assets/img/hero/hero_shape_1_3.svg" alt="shape" /></div>
            </div>
            <section className="about-sec-v4 space-bottom">
                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="feature-card h-100">
                                <div className="shape-icon">
                                    <img src="assets/img/icon/feature_card_1.png" alt="icon" />
                                </div>
                                <h3 className="box-title">Our Mission</h3>
                                <p className="feature-card_text">
                                    Help our clients to grow their businesses by providing cost-effective and world-class 
                                    best business solutions in London, process outsourcing through a collaborative effort 
                                    between employees, suppliers and partners. our work. Especially. The quality of the 
                                    work is not only limited to capacity but also exceeds the expectations of customers.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="feature-card h-100">
                                <div className="shape-icon">
                                    <img src="assets/img/icon/feature_card_2.png" alt="icon" />
                                </div>
                                <h3 className="box-title">Our Vision</h3>
                                <p className="feature-card_text">
                                    Our vision is to be remained a world-class, diversified and socially responsible business 
                                    development company that provides high quality, value-added services to our clients.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="feature-card h-100">
                                <div className="shape-icon">
                                    <img src="assets/img/icon/feature_card_3.png" alt="icon" />
                                </div>
                                <h3 className="box-title">Our Value</h3>
                                <p className="feature-card_text">
                                    We believe in transparency at work & our clients. We ensure hassle free delivery within 
                                    the stipulated time frame. Our teams work for your business with a project manager's 
                                    supervision. We are committed to delivering high-quality services. We work tirelessly 
                                    for our clients to ensure they earn abounding profits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;