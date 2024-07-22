import React from 'react';

const About = () => {
    return (
        <>
            {/* <div className="breadcumb-wrapper" style={{
                    backgroundImage: `url("assets/img/bg/breadcumb-bg.jpg")`,
                    backgroundPosition: 'center'
                }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">About Us</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div> */}            
            <div style={{ height: '108px', backgroundColor: '#18336c'}}></div>
            {/* <div className="" style={{
                    backgroundImage: `url("assets/img/bg/bg.jpg")`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '400px'
                }}>
                <div className="container" style={{paddingTop: '208px'}}>
                    <div className="" style={{ textAlign: 'center'}}>
                        <h1 className="breadcumb-title">About Us</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div class="th-hero-wrapper hero-1" id="hero">
                <div class="hero-img tilt-active">
                    <img src="assets/img/hero/hero_img_1_1.png" alt="Hero Image" />
                </div>
                <div class="container">
                    <div class="hero-style1">
                        <span class="hero-subtitle">About</span>
                        <h1 class="hero-title">Warrgyiz Morsch</h1>
                        <p class="hero-text">
                            Welcome to Warrgyizmorsch , your number one source for all the outsourcing services. 
                            We're dedicated to providing you the very best of technical and non-technical services, 
                            with an emphasis on meeting the deadline, satisfactory service and 24*7 services. <br />
                            Founded in 2017, Warrgyizmorsch has come its way from its beginnings. When we first 
                            started out, our passion for our clients ["to keep you first] drove our clients to 
                            flourish their business. <br />
                            We hope you enjoy our services as much as we enjoy offering them to you. 
                            If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <div class="btn-group">
                            <a href="/contact" class="th-btn">
                                CONTACT US
                                <i class="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                            <div class="call-btn">
                                <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" class="play-btn popup-video">
                                    <i class="fas fa-play"></i>
                                </a>
                                <div class="media-body">
                                    <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" class="btn-title popup-video">
                                        Watch Our Story
                                    </a> 
                                    <span class="btn-text">Subscribe Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-shape1"><img src="assets/img/hero/hero_shape_1_1.svg" alt="shape" /></div>
                <div class="hero-shape2"><img src="assets/img/hero/hero_shape_1_2.svg" alt="shape" /></div>
                <div class="hero-shape3"><img src="assets/img/hero/hero_shape_1_3.svg" alt="shape" /></div>
            </div>
            <section class="about-sec-v4 space-bottom">
                <div class="container">
                    <div class="row gy-4 justify-content-center">
                        <div class="col-xl-4 col-md-6">
                            <div class="feature-card h-100">
                                <div class="shape-icon">
                                    <img src="assets/img/icon/feature_card_1.png" alt="icon" />
                                </div>
                                <h3 class="box-title">Our Mission</h3>
                                <p class="feature-card_text">
                                    Help our clients to grow their businesses by providing cost-effective and world-class 
                                    best business solutions in London, process outsourcing through a collaborative effort 
                                    between employees, suppliers and partners. our work. Especially. The quality of the 
                                    work is not only limited to capacity but also exceeds the expectations of customers.
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="feature-card h-100">
                                <div class="shape-icon">
                                    <img src="assets/img/icon/feature_card_2.png" alt="icon" />
                                </div>
                                <h3 class="box-title">Our Vision</h3>
                                <p class="feature-card_text">
                                    Our vision is to be remained a world-class, diversified and socially responsible business 
                                    development company that provides high quality, value-added services to our clients.
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="feature-card h-100">
                                <div class="shape-icon">
                                    <img src="assets/img/icon/feature_card_3.png" alt="icon" />
                                </div>
                                <h3 class="box-title">Our Value</h3>
                                <p class="feature-card_text">
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