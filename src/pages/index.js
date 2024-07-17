import React from 'react'
import ProductSlider from '../component/ProductSlider';

const Index = () => {
    const cardData = [
        `
        <div class="swiper-slide" style="align-content: center; background-image: url('assets/img/slide/slide1.png'); background-size: cover, cover; background-repeat: no-repeat, no-repeat; background-position: center; height: 550px; width: 100%;">
            <div style="padding-left: 10%;">
                <div style="font-family: 'Roboto', 'Arial'; color: #18336c; font-size: 375%; text-shadow: none;
                    line-height: 1; font-weight: normal; font-style: normal; text-decoration: none; text-align: left;
                    letter-spacing: normal; word-spacing: normal; text-transform: none; font-weight: 700;">
                    WE ARE AVAILABLE <br> ALL TIMES
                </div>
                <div style="padding-top: 10px; font-family: 'Roboto', 'Arial'; color: aliceblue; font-size: 100%;
                    text-shadow: none; line-height: 1; font-weight: normal; font-style: normal; text-decoration: none;
                    text-align: left; letter-spacing: normal; word-spacing: normal; text-transform: none;
                    font-weight: 700;">
                    We are standing with you 24*7 times <br>
                    to bear your burden of projects. <br>
                    Our markting team, customer service team and other <br>
                    staff will assist you in every possible manner.
                </div>
                <div style="padding-top: 10px;">
                    <button style="background-color: #18336c; color: white; padding: 10px 20px; border: none;
                        border-radius: 50px; font-family: 'Roboto', 'Arial', sans-serif; font-size: 16px;
                        cursor: pointer; transition: background-color 0.3s ease;">
                        Contact
                    </button>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide" style="align-content: center; background-image: url('assets/img/slide/slide2.png'); background-size: cover, cover; background-repeat: no-repeat, no-repeat; background-position: center; height: 550px; width: 100%;">
            <div style="padding-left: 10%;">
                <div style="font-family: 'Roboto', 'Arial'; color: #18336c; font-size: 375%; text-shadow: none;
                    line-height: 1; font-weight: normal; font-style: normal; text-decoration: none; text-align: left;
                    letter-spacing: normal; word-spacing: normal; text-transform: none; font-weight: 700;">
                    WE BELIEVE IN <br>  PERFECTION!
                </div>
                <div style="padding-top: 10px; font-family: 'Roboto', 'Arial'; color: aliceblue; font-size: 100%;
                    text-shadow: none; line-height: 1; font-weight: normal; font-style: normal; text-decoration: none;
                    text-align: left; letter-spacing: normal; word-spacing: normal; text-transform: none;
                    font-weight: 700;">
                    Our skilled staff is proficient in <br>
                    numerous processes of business-like, data management, <br>
                    IT solutions, web development, mobile development and many more <br>
                    and determined to time limitations.
                </div>
                <div style="padding-top: 10px;">
                    <button style="background-color: #18336c; color: white; padding: 10px 20px; border: none;
                        border-radius: 50px; font-family: 'Roboto', 'Arial', sans-serif; font-size: 16px;
                        cursor: pointer; transition: background-color 0.3s ease;">
                        Contact
                    </button>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide" style="align-content: center; background-image: url('assets/img/slide/slide3.png'); background-size: cover, cover; background-repeat: no-repeat, no-repeat; background-position: center; height: 550px; width: 100%;">
            <div style="padding-left: 10%;">
                <div style="font-family: 'Roboto', 'Arial'; color: #18336c; font-size: 375%; text-shadow: none;
                    line-height: 1; font-weight: normal; font-style: normal; text-decoration: none; text-align: left;
                    letter-spacing: normal; word-spacing: normal; text-transform: none; font-weight: 700;">
                    OUR WILL IS TO SEE <br>  YOU AT THE TOP
                </div>
                <div style="padding-top: 10px; font-family: 'Roboto', 'Arial'; color: aliceblue; font-size: 100%;
                    text-shadow: none; line-height: 1; font-weight: normal; font-style: normal; text-decoration: none;
                    text-align: left; letter-spacing: normal; word-spacing: normal; text-transform: none;
                    font-weight: 700;">
                    We consider our self being a partner to your <br>
                    Organization when it comes to provide quality job. We equally <br>
                    understand the Individual's value and our best to <br>
                    meet your expectation.
                </div>
                <div style="padding-top: 10px;">
                    <button style="background-color: #18336c; color: white; padding: 10px 20px; border: none;
                        border-radius: 50px; font-family: 'Roboto', 'Arial', sans-serif; font-size: 16px;
                        cursor: pointer; transition: background-color 0.3s ease;">
                        Contact
                    </button>
                </div>
            </div>
        </div>
        `,
        
    ];
    return (
        <>
            <div class="th-hero-wrapper hero-5" id="hero">
                <div class="hero-inner">
                    <div class="th-hero-bg" data-bg-src="assets/img/hero/hero_img_5_1.png"style={{ backgroundImage: `url('assets/img/hero/hero_img_5_1.png')` }}></div>
                    <div class="container th-container5">
                        <div class="hero-style5">
                            <span class="sub-title style1 text-white">We're Leading Startup Agency</span>
                            <h1 class="hero-title text-white">Clear Thinking Makes Bright Future!</h1>
                            <p class="hero-text text-white">
                                Repurpose intuitive total linkage after timely mindshare. Credibly
                                coonate reliable collaboration and idea-sharing after.
                            </p>
                            <div class="btn-group mt-35">
                                <a href="service.html" class="th-btn style6 style-radius">View Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="counter-area-4 overflow-hidden space-bottom">
                <div class="container th-container5">
                    <div class="counter-card4-wrap">
                        <div class="counter-card4">
                            <div class="counter-card4_icon">
                                <img src="assets/img/icon/counter_card_4_1.svg" alt="" />
                            </div>
                            <div class="media-body">
                                <h3 class="box-number"><span class="counter-number">20</span>X</h3>
                                <h6 class="counter-title">Return on investment</h6>
                                <p class="counter-text mb-0">
                                    Return on investment is a financial metric that measures
                                </p>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="counter-card4">
                            <div class="counter-card4_icon">
                                <img src="assets/img/icon/counter_card_4_2.svg" alt="" />
                            </div>
                            <div class="media-body">
                                <h3 class="box-number"><span class="counter-number">150</span>k+</h3>
                                <h6 class="counter-title">Keywords optimization</h6>
                                <p class="counter-text mb-0">
                                    keywords into online content, such as websites, blogs
                                </p>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="counter-card4">
                            <div class="counter-card4_icon">
                                <img src="assets/img/icon/counter_card_4_3.svg" alt="" />
                            </div>
                            <div class="media-body">
                                <h3 class="box-number"><span class="counter-number">10,000</span>+</h3>
                                <h6 class="counter-title">Successful campaigns</h6>
                                <p class="counter-text mb-0">
                                    Successful campaigns leverage strategic planning goals
                                </p>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>
                </div>
            </div>
            {/* <div className="slider-area">
                <ProductSlider cardData={cardData} slidesPerView={1} />
            </div> */}
            <div class="th-hero-wrapper hero-3" id="hero">
                <div class="hero-img">
                    <img src="assets/img/hero/hero_img_3_1.png" alt="Hero Image" />
                    <div class="shape-blur"></div>
                </div>
                <div class="hero-img-phone">
                    <img src="assets/img/hero/hero_img_3_phone.png" alt="Hero Image" />
                    <div class="shape-blur"></div>
                </div>
                <div class="container">
                    <div class="hero-style3">
                        <span class="hero-subtitle">WELCOME TO</span>
                        <h1 class="hero-title">Warrgyiz Morsch</h1>
                        <p class="hero-text">
                            Your number one source for all the outsourcing services. We're dedicated to providing you the very best of technical and non-technical services, with an emphasis on meeting the deadline, satisfactory service and 24*7 services. <br />
                            Founded in 2017, Warrgyizmorsch has come its way from its beginnings. When we first started out, our passion for our clients to flourish their business. <br />
                            We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <div class="btn-group">
                            <a href="/about" class="th-btn">
                                ABOUT US
                                <i class="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                            <div class="call-btn">
                                <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" class="play-btn popup-video">
                                    <i class="fas fa-play"></i>
                                </a>
                                <div class="media-body">
                                    <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" class="btn-title popup-video">Watch Our Story</a> 
                                    <span class="btn-text">Subscribe Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-social">
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.twitter.com/">Twitter</a> 
                    <a href="https://www.instagram.com/">Instagram</a> 
                    <a href="https://www.linkedin.com/">Linkedin</a>
                </div>
                <div class="hero-shape1">
                    <img src="assets/img/hero/hero_shape_3_1.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default Index;