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
    const cardData2 = [
        `
        <div class="title-area mb-40">
            <span class="sub-title style1 text-white">Our Services</span>
            <h5 class="sec-title text-white">
                Simplified hiring solutions for your everyday business needs! Ranging from virtual assistants, business process, web and mobile app services.
            </h5>
        </div>
        <a href="about.html" class="th-btn style5 style-radius">More About Us</a>
        `,
        `
        <div class="title-area mb-40">
            <span class="sub-title style1 text-white">Vision Mission & Values</span>
            <h5 class="sec-title text-white">
                Our mission, vision and values are the core foundation of our success and commitment to excellence.
            </h5>
        </div>
        <a href="about.html" class="th-btn style5 style-radius">More About Us</a>
        `,
        `
        <div class="title-area mb-40">
            <span class="sub-title style1 text-white">Security Measures</span>
            <h5 class="sec-title text-white">
                Our network and security department help protect client data and provide security against common IT risks.
            </h5>
        </div>
        <a href="about.html" class="th-btn style5 style-radius">More About Us</a>
        `,
        
    ];
    const cardData3 = [
        /*`
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img src="assets/img/icon/service_3d_1.png" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        <a href="service-details.html">Web Development</a>
                    </h3>
                    <p class="service-3d_text">
                        Intrinsicly redefine competitive e-business before
                        adaptive potentialiti. Professionally build progressive users with.
                    </p>
                    <a href="service-details.html" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img src="assets/img/icon/service_3d_2.png" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        <a href="service-details.html">UI/UX Design</a>
                    </h3>
                    <p class="service-3d_text">
                        Intrinsicly redefine competitive e-business before
                        adaptive potentialiti. Professionally build progressive users with.
                    </p>
                    <a href="service-details.html" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img src="assets/img/icon/service_3d_3.png" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        <a href="service-details.html">Digital Marketing</a>
                    </h3>
                    <p class="service-3d_text">
                        Intrinsicly redefine competitive e-business before
                        adaptive potentialiti. Professionally build progressive users with.
                    </p>
                    <a href="service-details.html" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img src="assets/img/icon/service_3d_4.png" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        <a href="service-details.html">Business Analysis</a>
                    </h3>
                    <p class="service-3d_text">
                        Intrinsicly redefine competitive e-business before
                        adaptive potentialiti. Professionally build progressive users with.
                    </p>
                    <a href="service-details.html" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,*/
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/csp.avif" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Voice support
                    </h3>
                    <p class="service-3d_text">
                        When you're looking to make your business stand out, voice assistance services add 
                        the missing feature...
                    </p>
                    <a href="/service-voice-support" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/omni.jpg" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Omni Support
                    </h3>
                    <p class="service-3d_text">
                        In German it is "der Kunde ist König" (customer is king) or in Japanese, it is 
                        "okyakusamawakamisamadesu"...
                    </p>
                    <a href="/service-omni-support" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/virtual.jpg" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Virtual Learning
                    </h3>
                    <p class="service-3d_text">
                        In the digital age, doing mundane tasks within the same organization is now rare. 
                        It is difficult to manage all aspects ...
                    </p>
                    <a href="/service-virtual-learning" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/accountandbook.jpg" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Accounting and Book Keeping
                    </h3>
                    <p class="service-3d_text">
                        Finance accounting and bookkeeping services, is extremely important aspect for 
                        any business and certainly requires time..
                    </p>
                    <a href="/service-accounting-and-bookkeeping" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>        
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/e-commerce.avif" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        E Commerce services
                    </h3>
                    <p class="service-3d_text">
                        Maintaining a stable sales volume is the primary goal of an online seller. However, it is 
                        difficult to achieve this unless ...
                    </p>
                    <a href="/service-e-commerce" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>        
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/data-manage.avif" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Data management
                    </h3>
                    <p class="service-3d_text">
                        To be an efficient fuel source for businesses, data must be managed efficiently. Data management 
                        services are...
                    </p>
                    <a href="/service-data-management" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>        
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/website.avif" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Website Design And Development
                    </h3>
                    <p class="service-3d_text">
                        A web design application development company that helps businesses build strong customer
                         profiles and reaches potential...
                    </p>
                    <a href="/service-website-design-development" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>        
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/content.avif" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Content Writing
                    </h3>
                    <p class="service-3d_text">
                        Content writing is all about drafting thoughts and business ideas on a paper. 
                        it is the process of planning, researching, ...
                    </p>
                    <a href="/service-content-writing" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>        
        `,
        `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover; " src="assets/img/icon/service_3d_3.png" alt="Icon">
                </div>
                <div class="service-3d_content">
                    <h3 class="box-title">
                        Digital Marketing
                    </h3>
                    <p class="service-3d_text">
                        Intrinsicly redefine competitive e-business before
                        adaptive potentialiti. Professionally build progressive users with.
                    </p>
                    <a href="/service-digital-marketing" class="th-btn">
                        Read More
                        <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
    ];
    const cardData4 = [
        `
        <div class="swiper-slide">
            <div class="testi-card">
                <div class="testi-card_review">
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                </div>
                <p class="testi-card_text">
                    “Phosfluorescently reinvent prospective metrics
                    before granular schema. Professionally metrics before expedite
                    client-centric methods of empow ment whereas effective solut ion.”
                </p>
                <div class="testi-card_profile">
                    <div class="testi-card_avater">
                        <img src="assets/img/testimonial/testi_1_1.jpg" alt="testimonial">
                    </div>
                    <div class="media-body">
                        <h3 class="testi-card_name">Alex Farnandes</h3>
                        <span class="testi-card_desig">UI/UX Designer</span>
                    </div>
                </div>
                <div class="testi-card_quote">
                    <img src="assets/img/icon/quote_left.svg" alt="quote">
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="testi-card">
                <div class="testi-card_review">
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                </div>
                <p class="testi-card_text">
                    “Dnosflu orescent reinvent prospective metrics before
                    granular schema. Professionally metrics before expedite client-centric
                    methods of empow ment whereas effective coverless.”
                </p>
                <div class="testi-card_profile">
                    <div class="testi-card_avater">
                        <img src="assets/img/testimonial/testi_1_2.jpg" alt="testimonial">
                    </div>
                    <div class="media-body">
                        <h3 class="testi-card_name">Mariana Sonia</h3>
                        <span class="testi-card_desig">CEO at Corola</span>
                    </div>
                </div>
                <div class="testi-card_quote">
                    <img src="assets/img/icon/quote_left.svg" alt="quote">
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="testi-card">
                <div class="testi-card_review">
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                </div>
                <p class="testi-card_text">
                    “The best service reinvent prospective metrics before
                    granular schema. Professionally metrics before expedite client-centric
                    methods of empow ment whereas effective turnings.”
                </p>
                <div class="testi-card_profile">
                    <div class="testi-card_avater">
                        <img src="assets/img/testimonial/testi_1_3.jpg" alt="testimonial">
                    </div>
                    <div class="media-body">
                        <h3 class="testi-card_name">Abraham Khalil</h3>
                        <span class="testi-card_desig">UI/UX Designer</span>
                    </div>
                </div>
                <div class="testi-card_quote">
                    <img src="assets/img/icon/quote_left.svg" alt="quote">
                </div>
            </div>
        </div>
        `,
        `
        <div class="swiper-slide">
            <div class="testi-card">
                <div class="testi-card_review">
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                    <i class="fa-solid fa-star-sharp"></i>
                </div>
                <p class="testi-card_text">
                    “Five star he reinvent prospective metrics before
                    granular schema. Professionally metrics before expedite client-centric
                    methods of empow ment whereas effective gotoning.”
                </p>
                <div class="testi-card_profile">
                    <div class="testi-card_avater">
                        <img src="assets/img/testimonial/testi_1_4.jpg" alt="testimonial">
                    </div>
                    <div class="media-body">
                        <h3 class="testi-card_name">Alexa Jenifer</h3>
                        <span class="testi-card_desig">CEO at Morosto</span>
                    </div>
                </div>
                <div class="testi-card_quote">
                    <img src="assets/img/icon/quote_left.svg" alt="quote">
                </div>
            </div>
        </div>
        `
    ];
    const cardData5 = [
        `<div class="swiper-slide">
            <div class="blog-card">
                <div class="blog-img">
                    <img src="assets/img/blog/blog_1_1.jpg" alt="blog image">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>
                            15 Jan, 2024
                        </a> 
                        <a href="blog.html">
                            <i class="fal fa-comments"></i>
                            2 Comments
                        </a>
                    </div>
                    <h3 class="box-title">
                        <a href="blog-details.html">
                            How digital marketing is different from traditional marketing?
                        </a>
                    </h3>
                    <p class="blog-text">
                        Traditional marketing is considered when marketing activities for an 
                        organization are undertaken in a conventional way such as by television,
                    </p>
                    <div class="blog-bottom"> 
                        <a href="blog-details.html" class="line-btn">
                            Read More
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="blog-card">
                <div class="blog-img">
                    <img src="assets/img/blog/blog_1_1.jpg" alt="blog image">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>
                            15 Jan, 2024
                        </a> 
                        <a href="blog.html">
                            <i class="fal fa-comments"></i>
                            2 Comments
                        </a>
                    </div>
                    <h3 class="box-title">
                        <a href="blog-details.html">
                            How digital marketing helps in business growth?
                        </a>
                    </h3>
                    <p class="blog-text">
                        With the continues changing of working culture globally Digital 
                        marketing has taken place of conventional marketing. With the great 
                        evaluation of modern technology, small and medium 
                    </p>
                    <div class="blog-bottom"> 
                        <a href="blog-details.html" class="line-btn">
                            Read More
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="blog-card">
                <div class="blog-img">
                    <img src="assets/img/blog/blog_1_1.jpg" alt="blog image">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>
                            15 Jan, 2024
                        </a> 
                        <a href="blog.html">
                            <i class="fal fa-comments"></i>
                            2 Comments
                        </a>
                    </div>
                    <h3 class="box-title">
                        <a href="blog-details.html">
                            Top Digital Marketing Strategies for gym
                        </a>
                    </h3>
                    <p class="blog-text">
                        Nowadays, when people do have not much time for their nearest they do 
                        not get enough time for self-care due to hassle in their lives. Due 
                        to this, they face many health-related issues ...
                    </p>
                    <div class="blog-bottom">
                        <a href="blog-details.html" class="line-btn">
                            Read More
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="blog-card">
                <div class="blog-img">
                    <img src="assets/img/blog/blog_1_1.jpg" alt="blog image">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>
                            15 Jan, 2024
                        </a> 
                        <a href="blog.html">
                            <i class="fal fa-comments"></i>
                            2 Comments
                        </a>
                    </div>
                    <h3 class="box-title">
                        <a href="blog-details.html">
                            Top 10 Digital Marketing Strategies for the startups
                        </a>
                    </h3>
                    <p class="blog-text">
                        It is very difficult to persist in the market and settle your startups when 
                        the competition is quite high in every business, as we know due to COVIDE-19, 
                        this time has tuned out to be ... 
                    </p>
                    <div class="blog-bottom">
                        <a href="blog-details.html" class="line-btn">
                            Read More
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="blog-card">
                <div class="blog-img">
                    <img src="assets/img/blog/blog_1_1.jpg" alt="blog image">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>
                            15 Jan, 2024
                        </a> 
                        <a href="blog.html">
                            <i class="fal fa-comments"></i>
                            2 Comments
                        </a>
                    </div>
                    <h3 class="box-title">
                        <a href="blog-details.html">
                            Top  Digital Marketing Strategies for the product launch
                        </a>
                    </h3>
                    <p class="blog-text">
                        We all are always stay awaited for the product launch program as after paying 
                        much attention and hard work the final day comes in life when you are ...
                    </p>
                    <div class="blog-bottom">
                        <a href="blog-details.html" class="line-btn">
                            Read More
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="blog-card">
                <div class="blog-img">
                    <img src="assets/img/blog/blog_1_1.jpg" alt="blog image">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>
                            15 Jan, 2024
                        </a> 
                        <a href="blog.html">
                            <i class="fal fa-comments"></i>
                            2 Comments
                        </a>
                    </div>
                    <h3 class="box-title">
                        <a href="blog-details.html">
                            How does Digital Marketing Help Small Businesses?
                        </a>
                    </h3>
                    <p class="blog-text">
                        It's a fact that good marketing plays a very crucial role in 
                        growing a business, it can enhance your business and give confidence 
                        in continuous success...
                    </p>
                    <div class="blog-bottom">
                        <a href="blog-details.html" class="line-btn">
                            Read More
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `,
        
    ];
    const cardData6 = [
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_1.jpeg" alt="img1" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_2.jpeg" alt="img2" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_3.jpeg" alt="img2" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_4.jpeg" alt="img4" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_5.jpeg" alt="img5" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_6.jpeg" alt="img6" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_7.jpeg" alt="img7" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_8.jpeg" alt="img8" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_9.jpeg" alt="img9" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `,
        `<div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="assets/img/gallery/warr/img_10.jpeg" alt="img10" style="width: 100%; height: 100%; object-fit: cover;">
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
            <div class="position-relative overflow-hidden" style={{ backgroundColor: '#f8f9fa'}}>
                <div class="container th-container5">
                    <div class="about-sec4 position-relative overflow-hidden" style={{ backgroundImage: `url('assets/img/normal/about_4.jpg')` }}data-bg-src="">
                        <div class="about-shape4">
                            <div class="marquee-wrapper">
                                <div class="marquee">
                                    <div class="marquee-group">
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                    </div>
                                    <div aria-hidden="true" class="marquee-group">
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                    </div>
                                </div>
                                <div class="marquee marquee--reverse">
                                    <div class="marquee-group">
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                    </div>
                                    <div aria-hidden="true" class="marquee-group">
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                    </div>
                                </div>
                                <div class="marquee">
                                    <div class="marquee-group">
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                    </div>
                                    <div aria-hidden="true" class="marquee-group">
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                        <div class="text">Adaptability</div>
                                        <div class="text">Creative Innovation</div>
                                        <div class="text">4000+ partners</div>
                                        <div class="text">15M Customer Worldwide</div>
                                        <div class="text">Engagement</div>
                                        <div class="text">Ethical Practices</div>
                                        <div class="text">Communication</div>
                                        <div class="text">Personalization</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">50+ Countries</div>
                                        <div class="text">Expertise</div>
                                        <div class="text">Innovation</div>
                                        <div class="text">Inclusivity</div>
                                        <div class="text">Diversity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="about-area4">
                            <div class="title-area-wrapper">                                
                                <div className="slider-area">
                                    <ProductSlider cardData={cardData2} slidesPerView={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="" id="service-sec">
                <div class="round-container gr-bg3 space">
                    <div class="container">                        
                        <div class="title-area text-center">
                            <span class="sub-title">OUR SERVICES</span>
                            <h2 class="sec-title">We Provide Exclusive Services</h2>
                        </div>
                        <div class="slider-area">
                            <ProductSlider cardData={cardData3} slidesPerView={3} />
                        </div>
                    </div>
                </div>
            </section>
            <div class="">
                <div class="container space">
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-lg-6 mb-30 mb-lg-0">
                            <div class="img-box7">
                                <div class="img1">
                                    <img src="assets/img/normal/why_2_1.png" alt="Why" />
                                </div>
                                <div class="color-animate"></div>
                            </div>
                        </div>
                        <div class="col-lg-6 text-lg-start text-center">
                            <div class="title-area mb-35"><span class="sub-title">WHY CHOOSE US</span>
                                <h2 class="sec-title">Business Process Outsourcing Services</h2>
                            </div>                            
                            <div class="two-column mb-40 list-center">
                                <div class="checklist style2">
                                    <ul>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> Dedicated Staff</li>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> 24/7 Online Support</li>
                                    </ul>
                                </div>
                                <div class="checklist style2">
                                    <ul>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> Flexible Plans</li>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> Zero Sick Days</li>
                                    </ul>
                                </div>
                            </div>
                            <p class="mt-n2 mb-30">
                                If you are a business that is growing having an unexpected or seasonal workflow 
                                doing cost optimization, expanding, planning to take the inhouse team to the next 
                                level or a start-up, we will be happy to become your partners in achieving your 
                                business goals. We can provide you with a dedicated team/staff to manage your 
                                recurring and daily operational activities.
                            </p>
                            <a href="/services" class="th-btn">LEARN MORE<i class="fa-regular fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="shape-mockup" data-bottom="0" data-right="0">
                    <div class="particle-3" id="particle-4"></div>
                </div>
            </div>
            <section class="overflow-hidden space" style={{ backgroundImage: `url('assets/img/bg/contact_bg_1.png')` }} data-bg-src="" data-overlay="overlay1" data-opacity="5">
                <div class="container z-index-common">
                    <div class="row align-items-center">
                        <div class="col-xl-5">
                            <div class="pe-xxl-5 text-xl-start text-center">
                                <div class="title-area mb-35">
                                    <span class="sub-title">                                        
                                        TESTIMONIALS
                                    </span>
                                    <h2 class="sec-title text-white">
                                        Let's Here What Are The Customer 
                                        <span class="text-theme">Saying</span>
                                    </h2>
                                </div>
                                <p class="mt-n2 mb-35 text-white">
                                    Appropriately envisioneer leveraged information through 2.0
                                    communities. Synergistically parallel task inexpensive products whereas 
                                    cross-media ideas.
                                </p>
                                <a href="about.html" class="th-btn style3 shadow-none">
                                    VIEW MORE
                                    <i class="fa-regular fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-7 mt-40 mt-xl-0">
                            <div class="testi-card-area slider-area">                                
                                <div class="testi-thumb-wrap">
                                    <div class="testi-thumb testi-card-tab" data-slider-tab="#testiSlide1">
                                        <div class="tab-btn active">
                                            <img src="assets/img/testimonial/testi_1_1.jpg" alt="Image" />
                                        </div>
                                        <div class="tab-btn">
                                            <img src="assets/img/testimonial/testi_1_2.jpg" alt="Image" />
                                        </div>
                                        <div class="tab-btn">
                                            <img src="assets/img/testimonial/testi_1_3.jpg" alt="Image" />
                                        </div>
                                        <div class="tab-btn">
                                            <img src="assets/img/testimonial/testi_1_4.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-wrapper">
                                    <ProductSlider cardData={cardData4} slidesPerView={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="space" id="contact-sec" style={{ backgroundImage: `url('assets/img/bg/appointment_bg_1.jpg')` }}data-bg-src="">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 pe-xxl-5 mb-40 mb-xl-0">
                            <div class="title-area mb-35 text-xl-start text-center">                                
                                <h2 class="sec-title">
                                    Mobile & Web Application  <br />
                                    <span class="text-theme">Development Services</span>
                                </h2>
                            </div>
                            <div class="contact-feature-wrap mt-n2 mb-30">
                                <div class="contact-feature">
                                    <div class="icon-btn">
                                        <i class="fa-solid fa-laptop-mobile"></i>
                                    </div>
                                    <div class="media-body">
                                        <p class="contact-feature_label">Responsive Software</p>
                                    </div>
                                </div>
                                <div class="contact-feature">
                                    <div class="icon-btn">
                                        <i class="fa-solid fa-shield"></i>
                                    </div>
                                    <div class="media-body">
                                        <p class="contact-feature_label">Security & Data Protection</p>
                                    </div>
                                </div>
                                <div class="contact-feature">
                                    <div class="icon-btn">
                                        <i class="fa-solid fa-headset"></i>
                                    </div>
                                    <div class="media-body">
                                        <p class="contact-feature_label">Support & Maintenance</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-n2 mb-30 text-xl-start text-center">
                                Since the time software, websites and mobile applications became essential to every 
                                business, we have been taking care of development needs. We foresee the potential of 
                                dynamic software solutions and can turn your business idea into reality with our 
                                development services.
                            </p>
                        </div>
                        <div class="col-xl-6 ps-xl-4">
                            <h3 class="h4 mt-n2 mb-30 text-center">Enquiry Now</h3>
                            <form action="https://html.themeholy.com/webteck/demo/mail.php" method="POST" class="appoitment-form ajax-contact">
                                <div class="row">
                                    <div class="form-group col-12">
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Enter Your Name" />
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Enter Your Email" />                                                
                                    </div>                                    
                                    <div class="form-group col-12">
                                        <input type="tel" class="form-control" name="number" id="number" placeholder="Phone Number" />
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" id="message" cols="30" rows="3" class="form-control" placeholder="Write Your Message"></textarea>
                                    </div>
                                    <div class="form-btn col-12">
                                        <button class="th-btn w-100">SEND A MASSAGE</button>
                                    </div>
                                </div>
                                <p class="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section class="position-relative space">
                <div class="th-bg-img" style={{ backgroundImage: `url('assets/img/bg/cta_bg_2.jpg')` }} data-bg-src="">
                    <img src="assets/img/bg/bg_overlay_1.png" alt="overlay" />
                </div>
                <div class="container z-index-common">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-7 col-md-9 text-center">
                            <div class="title-area mb-35">
                                <span class="sub-title" style={{color: '#2c77d8'}}>
                                    CONTACT US
                                </span>
                                <h2 class="sec-title text-white">
                                    Need Any Kind Of IT Solution For 
                                    <span class="fw-normal" style={{color: '#2c77d8'}}> Your Business?</span>
                                </h2>
                            </div>
                            <a href="contact.html" class="th-btn style3">Call Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="overflow-hidden bg-white space" data-overlay="overlay1" data-opacity="2">
                <div class="container th-container5">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="title-area mb-50 text-center text-md-start">
                                <span class="sub-title">
                                    Stories
                                </span>
                                <h2 class="sec-title">Our work that inspired you to work with us</h2>
                            </div>
                            <div class="project-btn">
                                <a href="/gallery" class="th-btn style-border style-radius">View All</a>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="slider-area project-slider4">                                
                                <div class="swiper-wrapper">
                                    <ProductSlider cardData={cardData6} slidesPerView={2} />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-top-right overflow-hidden space" id="blog-sec" style={{ backgroundImage: `url('assets/img/bg/blog_bg_1.png')` }} data-bg-src="" data-overlay="overlay1" data-opacity="1">
                <div class="container">
                    <div class="title-area text-center">
                        <span class="sub-title">
                            LATEST BLOGS
                        </span>
                        <h2 class="sec-title">
                            Get Every Single Update 
                            <span class="text-theme fw-normal"> Blog</span>
                        </h2>
                    </div>
                    <div class="slider-area">
                        <ProductSlider cardData={cardData5} slidesPerView={3} />                        
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Index;