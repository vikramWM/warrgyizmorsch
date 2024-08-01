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
    
// AboutSlider-start-------------------------------
    const aboutSlider = [
        {
        title: "Our Services",
        description: "Simplified hiring solutions for your everyday business needs! Ranging from virtual assistants, business process, web and mobile app services.",
        link: "/services",
        btnText: "Explore More"
        },
        {
        title: "Vision Mission & Values",
        description: "Our mission, vision and values are the core foundation of our success and commitment to excellence.",
        link: "/about-us",
        btnText: "Explore More"
        },
        {
        title: "Security Measures",
        description: "Our network and security department help protect client data and provide security against common IT risks.",
        link: "/about-us",
        btnText: "Explore More"
        }
    ];
  

    const generateCardHTMLForAboutSlider = (cardContent) => {

        const title = cardContent.title;
        const description = cardContent.description;
    
        return `      
            <div class="title-area mb-40">
                <span class="sub-title style1 text-white">${title}</span>
                <h5 class="sec-title text-white">${description}</h5>
            </div>
            <a href="${cardContent.link}" class="th-btn style5 style-radius">${cardContent.btnText}</a>
        `;
    };
  
    const generateSliderHTMLForAboutSlider = (data) => {
        return data.map(generateCardHTMLForAboutSlider);
    };

    const cardHTMLDataForAboutSlider = generateSliderHTMLForAboutSlider(aboutSlider);
// AboutSlider-end-------------------------------

  
// ServiceSlider-start-------------------------------
    const serviceCardData = [
        {
          imgSrc: "assets/img/icon/csp.avif",
          title: "Voice Support",
          description: "When you're looking to make your business stand out, voice assistance services add the missing feature...",
          link: "/call-preference-service",
        },
        {
          imgSrc: "assets/img/icon/omni.jpg",
          title: "Omni Support",
          description: "In German it is 'der Kunde ist König' (customer is king) or in Japanese, it is 'okyakusama wa kamisama desu'...",
          link: "/omni-support",
        },
        {
          imgSrc: "assets/img/icon/virtual.jpg",
          title: "Virtual Learning",
          description: "In the digital age, doing mundane tasks within the same organization is now rare. It is difficult to manage all aspects...",
          link: "/virtual-learning-services",
        },
        {
          imgSrc: "assets/img/icon/accountandbook.jpg",
          title: "Accounting and Book Keeping",
          description: "Finance accounting and bookkeeping services, is extremely important aspect for any business and certainly requires time...",
          link: "/accounting-bookkeeping-services-uk",
        },
        {
          imgSrc: "assets/img/icon/e-commerce.avif",
          title: "E Commerce services",
          description: "Maintaining a stable sales volume is the primary goal of an online seller. However, it is difficult to achieve this unless...",
          link: "/e-commerce-services",
        },
        {
          imgSrc: "assets/img/icon/data-manage.avif",
          title: "Data management",
          description: "To be an efficient fuel source for businesses, data must be managed efficiently. Data management services are...",
          link: "/data-management-services",
        },
        {
          imgSrc: "assets/img/icon/website.avif",
          title: "Website Design And Development",
          description: "A web design application development company that helps businesses build strong customer profiles and reaches potential...",
          link: "/website-design-development",
        },
        {
          imgSrc: "assets/img/icon/content.avif",
          title: "Content Writing",
          description: "Content writing is all about drafting thoughts and business ideas on paper. It is the process of planning, researching, ...",
          link: "/content-writing-service",
        },
        {
          imgSrc: "assets/img/icon/service_3d_3.png",
          title: "Digital Marketing",
          description: "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users with...",
          link: "/digital-marketing-services",
        }
    ];
      
    const generateCardHTML = (cardContent) => {
    
        const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
        };
    
        const title = truncateText(cardContent.title, 16); 
        const description = truncateText(cardContent.description, 100); 
    
        return `
        <div class="swiper-slide">
            <div class="service-3d">
                <div class="service-3d_icon">
                    <img style="width: auto; height: 150px; object-fit: cover;" src="${cardContent.imgSrc}" alt="${cardContent.title} Icon">
                </div>
                <div class="service-3d_content">
                    <h3 style="" class="box-title">${title}</h3>
                    <p style="max-height: 80px; overflow: hidden;" class="service-3d_text">${description}</p>
                    <a href="${cardContent.link}" class="th-btn">
                    Read More
                    <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
        `;
    };
      
    const generateSliderHTML = (data) => {
        return data.map(generateCardHTML);
    };
    
    const cardHTMLDataForService = generateSliderHTML(serviceCardData);
      
// ServiceSlider-end-------------------------------

// TestimonialSlider-start-------------------------------

    const cardData4 = [
        {
        reviewStars: 5,
        text: "Phosfluorescently reinvent prospective metrics before granular schema. Professionally metrics before expedite client-centric methods of empow ment whereas effective solut ion.",
        avatarSrc: "assets/img/testimonial/testi_1_1.jpg",
        name: "Alex Farnandes",
        designation: "UI/UX Designer",
        quoteIconSrc: "assets/img/icon/quote_left.svg"
        },
        {
        reviewStars: 5,
        text: "Dnosflu orescent reinvent prospective metrics before granular schema. Professionally metrics before expedite client-centric methods of empow ment whereas effective coverless.",
        avatarSrc: "assets/img/testimonial/testi_1_2.jpg",
        name: "Mariana Sonia",
        designation: "CEO at Corola",
        quoteIconSrc: "assets/img/icon/quote_left.svg"
        },
        {
        reviewStars: 5,
        text: "The best service reinvent prospective metrics before granular schema. Professionally metrics before expedite client-centric methods of empow ment whereas effective turnings.",
        avatarSrc: "assets/img/testimonial/testi_1_3.jpg",
        name: "Abraham Khalil",
        designation: "UI/UX Designer",
        quoteIconSrc: "assets/img/icon/quote_left.svg"
        },
        {
        reviewStars: 5,
        text: "Five star he reinvent prospective metrics before granular schema. Professionally metrics before expedite client-centric methods of empow ment whereas effective gotoning.",
        avatarSrc: "assets/img/testimonial/testi_1_4.jpg",
        name: "Alexa Jenifer",
        designation: "CEO at Morosto",
        quoteIconSrc: "assets/img/icon/quote_left.svg"
        }
    ];
  
  
    const generateTestimonialCardHTML = (cardContent) => {
        const truncateText = (text, length) => {
            return text.length > length ? text.substring(0, length) + '...' : text;
        };
        const cardContentText = truncateText(cardContent.text, 150); 
        const cardContentName = truncateText(cardContent.name, 20); 
        const cardContentDesignation = truncateText(cardContent.designation, 20);
        const stars = Array(cardContent.reviewStars).fill('<i class="fa-solid fa-star-sharp"></i>').join('');
    
        return `
        <div class="swiper-slide">
            <div class="testi-card">
                <div class="testi-card_review">
                    ${stars}
                </div>
                <p class="testi-card_text">
                    "${cardContentText}"
                </p>
                <div class="testi-card_profile">
                    <div class="testi-card_avater">
                    <img src="${cardContent.avatarSrc}" alt="testimonial">
                    </div>
                    <div class="media-body">
                    <h3 class="testi-card_name">${cardContentName}</h3>
                    <span class="testi-card_desig">${cardContentDesignation}</span>
                    </div>
                </div>
                <div class="testi-card_quote">
                    <img src="${cardContent.quoteIconSrc}" alt="quote">
                </div>
            </div>
        </div>
        `;
    };
  
    const generateTestimonialSliderHTML = (data) => {
        return data.map(generateTestimonialCardHTML);
    };
    
    const cardHTMLDataForTestimonials = generateTestimonialSliderHTML(cardData4);
    
  
// TestimonialSlider-end-------------------------------
          
//blog-start

    const blogDataList = [
        {
            imageSrc: "assets/img/blog/blog_1.jpg",
            altText: "blog image",
            date: "15 Jan, 2024",
            comments: 2,
            title: "How digital marketing is different from traditional marketing?",
            description: "Traditional marketing is considered when marketing activities for an organization are undertaken in a conventional way such as by television.",
            blogLink: "/how-digital-marketing-is-different-from-traditional-marketing"
        },
        {
            imageSrc: "assets/img/blog/blog_2.jpg",
            altText: "blog image",
            date: "15 Jan, 2024",
            comments: 2,
            title: "How digital marketing helps in business growth?",
            description: "With the continuous changing of working culture globally, Digital marketing has taken the place of conventional marketing. With the great evolution of modern technology, small and medium businesses...",
            blogLink: "/how-digital-marketing-helps-in-business-growth"
        },
        {
            imageSrc: "assets/img/blog/blog_3.jpg",
            altText: "blog image",
            date: "15 Jan, 2024",
            comments: 2,
            title: "Top Digital Marketing Strategies for gym",
            description: "Nowadays, when people do not have much time for themselves due to the hustle in their lives, they face many health-related issues...",
            blogLink: "/top-digital-marketing-strategies-for-gym"
        },
        {
            imageSrc: "assets/img/blog/blog_4.jpg",
            altText: "blog image",
            date: "15 Jan, 2024",
            comments: 2,
            title: "Top 10 Digital Marketing Strategies for the startups",
            description: "It is very difficult to persist in the market and establish your startups when competition is quite high in every business...",
            blogLink: "/top-10-digital-marketing-strategies-for-the-startups"
        },
        {
            imageSrc: "assets/img/blog/blog_5.jpg",
            altText: "blog image",
            date: "15 Jan, 2024",
            comments: 2,
            title: "Top Digital Marketing Strategies for product launch",
            description: "We all eagerly await product launch programs. After putting in much attention and hard work, the final day arrives...",
            blogLink: "/top-digital-marketing-strategies-for-the-product-launch"
        },
        {
            imageSrc: "assets/img/blog/blog_6.jpg",
            altText: "blog image",
            date: "15 Jan, 2024",
            comments: 2,
            title: "How does Digital Marketing Help Small Businesses?",
            description: "It's a fact that good marketing plays a crucial role in growing a business. It can enhance your business and boost confidence...",
            blogLink: "/how-does-digital-marketing-help-small-businesses"
        }
    ];
    // Function to truncate text with ellipsis
    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    const generateBlogCardHTML = (blogData) => {
        // Define default text lengths
        let titleLength = 35;
        let descLength = 105;

        // Adjust text lengths based on window width
        if (window.innerWidth < 265) {
            titleLength = 20;
            descLength = 50;
        } else if (window.innerWidth > 265 && window.innerWidth < 355) {
            titleLength = 20;
            descLength = 75;
        } else if (window.innerWidth > 355 && window.innerWidth < 387) {
            titleLength = 25;
            descLength = 85;
        } else if (window.innerWidth > 387 && window.innerWidth < 450) {
            titleLength = 20;
            descLength = 90;
        }else if (window.innerWidth > 450 && window.innerWidth < 768) {
            titleLength = 25;
            descLength = 90;
        }else if (window.innerWidth > 768 && window.innerWidth < 1300) {
            titleLength = 30;
            descLength = 100;
        }
        const title = truncateText(blogData.title, titleLength);
        const description = truncateText(blogData.description, descLength);

        return `
        <div class="swiper-slide">
            <div class="blog-card">
                <div class="blog-img">
                    <img style="width: 100%; height: 200px; object-fit: cover;" src="${blogData.imageSrc}" alt="${blogData.altText}">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <a href="javascript:void(0);">
                            <i class="fal fa-calendar-days"></i>
                            ${blogData.date}
                        </a>
                        <a href="javascript:void(0);">
                            <i class="fal fa-comments"></i>
                            ${blogData.comments} Comments
                        </a>
                    </div>
                    <h3 class="box-title">
                        <a href="${blogData.blogLink}">
                            ${title}
                        </a>
                    </h3>
                    <p class="blog-text">
                        ${description}
                    </p>
                    <div class="blog-bottom">
                        <a href="${blogData.blogLink}" class="line-btn">
                            Read More
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    const generateBlogSliderHTML = (blogDataList) => {
        return blogDataList.map(generateBlogCardHTML);
    };

    const blogHTMLData = generateBlogSliderHTML(blogDataList);

//blog-end

// gallery-start
    const generateProjectCardHTML = (imageSrc) => {
        return `
        <div class="swiper-slide">
            <div class="project-box">
                <div class="project-img" style="width: 100%; height: 300px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                    <img src="${imageSrc}" alt="project image" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        `;
    };

    const projectImages = [
        "assets/img/gallery/warr/img_1.jpeg",
        "assets/img/gallery/warr/img_2.jpeg",
        "assets/img/gallery/warr/img_3.jpeg",
        "assets/img/gallery/warr/img_4.jpeg",
        "assets/img/gallery/warr/img_5.jpeg",
        "assets/img/gallery/warr/img_6.jpeg",
        "assets/img/gallery/warr/img_7.jpeg",
        "assets/img/gallery/warr/img_8.jpeg",
        "assets/img/gallery/warr/img_9.jpeg",
        "assets/img/gallery/warr/img_10.jpeg"
    ];

    const generateProjectSliderHTML = (images) => {
        return images.map(generateProjectCardHTML);
    };

    const galleryHTMLData = generateProjectSliderHTML(projectImages);


//gallery-end
    
    return (
        <>
            <div className="th-hero-wrapper hero-5" id="hero">
                <div className="hero-inner">
                    <div className="th-hero-bg" data-bg-src="assets/img/hero/hero_img_5_1.png"style={{ backgroundImage: `url('assets/img/hero/hero_img_5_1.png')` }}></div>
                    <div className="container th-container5">
                        <div className="hero-style5">
                            <span className="sub-title style1 text-white">We're Leading Startup Agency</span>
                            <h1 className="hero-title text-white">Clear Thinking Makes Bright Future!</h1>
                            <p className="hero-text text-white">
                                Repurpose intuitive total linkage after timely mindshare. Credibly
                                coonate reliable collaboration and idea-sharing after.
                            </p>
                            <div className="btn-group mt-35">
                                <a href="/services" className="th-btn style6 style-radius">View Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-area-4 overflow-hidden space-bottom">
                <div className="container th-container5">
                    <div className="counter-card4-wrap">
                        <div className="counter-card4">
                            <div className="counter-card4_icon">
                                <img src="assets/img/icon/counter_card_4_1.svg" alt="" />
                            </div>
                            <div className="media-body">
                                <h3 className="box-number"><span className="counter-number">20</span>X</h3>
                                <h6 className="counter-title">Return on investment</h6>
                                <p className="counter-text mb-0">
                                    Return on investment is a financial metric that measures
                                </p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card4">
                            <div className="counter-card4_icon">
                                <img src="assets/img/icon/counter_card_4_2.svg" alt="" />
                            </div>
                            <div className="media-body">
                                <h3 className="box-number"><span className="counter-number">150</span>k+</h3>
                                <h6 className="counter-title">Keywords optimization</h6>
                                <p className="counter-text mb-0">
                                    keywords into online content, such as websites, blogs
                                </p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card4">
                            <div className="counter-card4_icon">
                                <img src="assets/img/icon/counter_card_4_3.svg" alt="" />
                            </div>
                            <div className="media-body">
                                <h3 className="box-number"><span className="counter-number">10,000</span>+</h3>
                                <h6 className="counter-title">Successful campaigns</h6>
                                <p className="counter-text mb-0">
                                    Successful campaigns leverage strategic planning goals
                                </p>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
            {/* <div className="slider-area">
                <ProductSlider cardData={cardData} slidesPerView={1} />
            </div> */}
            <div className="th-hero-wrapper hero-3" id="hero">
                <div className="hero-img">
                    <img src="assets/img/hero/hero_img_3_1.png" alt="Hero Image" />
                    <div className="shape-blur"></div>
                </div>
                <div className="hero-img-phone">
                    <img src="assets/img/hero/hero_img_3_phone.png" alt="Hero Image" />
                    <div className="shape-blur"></div>
                </div>
                <div className="container">
                    <div className="hero-style3">
                        <span className="hero-subtitle">WELCOME TO</span>
                        <h1 className="hero-title">Warrgyiz Morsch</h1>
                        <p className="hero-text">
                            Your number one source for all the outsourcing services. We're dedicated to providing you the very best of technical and non-technical services, with an emphasis on meeting the deadline, satisfactory service and 24*7 services. <br />
                            Founded in 2017, Warrgyizmorsch has come its way from its beginnings. When we first started out, our passion for our clients to flourish their business. <br />
                            We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <div className="btn-group">
                            <a href="/about-us" className="th-btn">
                                ABOUT US
                                <i className="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                            <div className="call-btn">
                                <a href="javascript:void(0);" className="play-btn popup-video">
                                    <i className="fas fa-play"></i>
                                </a>
                                <div className="media-body">
                                    <a href="javascript:void(0);" className="btn-title popup-video">Watch Our Story</a> 
                                    <span className="btn-text">Subscribe Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-social">
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.twitter.com/">Twitter</a> 
                    <a href="https://www.instagram.com/">Instagram</a> 
                    <a href="https://www.linkedin.com/">Linkedin</a>
                </div>
                <div className="hero-shape1">
                    <img src="assets/img/hero/hero_shape_3_1.png" alt="shape" />
                </div>
            </div>
            <div className="position-relative overflow-hidden" style={{ backgroundColor: '#f8f9fa'}}>
                <div className="container th-container5">
                    <div className="about-sec4 position-relative overflow-hidden" style={{ backgroundImage: `url('assets/img/normal/about_4.jpg')` }}data-bg-src="">
                        <div className="about-shape4" style={{ borderRadius:'0px'}}>
                            <div className="marquee-wrapper">
                                <div className="marquee">
                                    <div className="marquee-group">
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                    </div>
                                    <div aria-hidden="true" className="marquee-group">
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                    </div>
                                </div>
                                <div className="marquee marquee--reverse">
                                    <div className="marquee-group">
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                    </div>
                                    <div aria-hidden="true" className="marquee-group">
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                    </div>
                                </div>
                                <div className="marquee">
                                    <div className="marquee-group">
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                    </div>
                                    <div aria-hidden="true" className="marquee-group">
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                        <div className="text">Adaptability</div>
                                        <div className="text">Creative Innovation</div>
                                        <div className="text">4000+ partners</div>
                                        <div className="text">15M Customer Worldwide</div>
                                        <div className="text">Engagement</div>
                                        <div className="text">Ethical Practices</div>
                                        <div className="text">Communication</div>
                                        <div className="text">Personalization</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">50+ Countries</div>
                                        <div className="text">Expertise</div>
                                        <div className="text">Innovation</div>
                                        <div className="text">Inclusivity</div>
                                        <div className="text">Diversity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-area4">
                            <div className="title-area-wrapper">                                
                                <div className="slider-area p-4">
                                    <ProductSlider cardData={cardHTMLDataForAboutSlider} slidesPerView={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="gr-bg3" id="service-sec">
                <div className="round-container space">
                    <div className="container">                        
                        <div className="title-area text-center">
                            <span className="sub-title">OUR SERVICES</span>
                            <h2 className="sec-title">We Provide Exclusive Services</h2>
                        </div>
                        <div className="slider-area">
                            <ProductSlider cardData={cardHTMLDataForService} slidesPerView={3} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="">
                <div className="container space">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6 mb-30 mb-lg-0">
                            <div className="img-box7">
                                <div className="img1">
                                    <img src="assets/img/normal/why_2_1.png" alt="Why" />
                                </div>
                                <div className="color-animate"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-start text-center">
                            <div className="title-area mb-35"><span className="sub-title">WHY CHOOSE US</span>
                                <h2 className="sec-title">Business Process Outsourcing Services</h2>
                            </div>                            
                            <div className="two-column mb-40 list-center">
                                <div className="checklist style2">
                                    <ul>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> Dedicated Staff</li>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> 24/7 Online Support</li>
                                    </ul>
                                </div>
                                <div className="checklist style2">
                                    <ul>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> Flexible Plans</li>
                                        <li><img src="assets/img/icon/check_1.png" alt="icon" /> Zero Sick Days</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-n2 mb-30">
                                If you are a business that is growing having an unexpected or seasonal workflow 
                                doing cost optimization, expanding, planning to take the inhouse team to the next 
                                level or a start-up, we will be happy to become your partners in achieving your 
                                business goals. We can provide you with a dedicated team/staff to manage your 
                                recurring and daily operational activities.
                            </p>
                            <a href="/services" className="th-btn">LEARN MORE<i className="fa-regular fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="shape-mockup" data-bottom="0" data-right="0">
                    <div className="particle-3" id="particle-4"></div>
                </div>
            </div>
            <section className="overflow-hidden space" style={{ backgroundImage: `url('assets/img/bg/contact_bg_1.png')` }} data-bg-src="" data-overlay="overlay1" data-opacity="5">
                <div className="container z-index-common">
                    <div className="row align-items-center">
                        <div className="col-xl-5">
                            <div className="pe-xxl-5 text-xl-start text-center">
                                <div className="title-area mb-35">
                                    <span className="sub-title">                                        
                                        TESTIMONIALS
                                    </span>
                                    <h2 className="sec-title text-white">
                                        Let's Here What Are The Customer 
                                        <span className="text-theme">Saying</span>
                                    </h2>
                                </div>
                                <p className="mt-n2 mb-35 text-white">
                                    Appropriately envisioneer leveraged information through 2.0
                                    communities. Synergistically parallel task inexpensive products whereas 
                                    cross-media ideas.
                                </p>
                                <a href="/about-us" className="th-btn style3 shadow-none">
                                    VIEW MORE
                                    <i className="fa-regular fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-7 mt-40 mt-xl-0">
                            <div className="testi-card-area slider-area">                                
                                <div className="testi-thumb-wrap">
                                    <div className="testi-thumb testi-card-tab" data-slider-tab="#testiSlide1">
                                        <div className="tab-btn active">
                                            <img src="assets/img/testimonial/testi_1_1.jpg" alt="Image" />
                                        </div>
                                        <div className="tab-btn">
                                            <img src="assets/img/testimonial/testi_1_2.jpg" alt="Image" />
                                        </div>
                                        <div className="tab-btn">
                                            <img src="assets/img/testimonial/testi_1_3.jpg" alt="Image" />
                                        </div>
                                        <div className="tab-btn">
                                            <img src="assets/img/testimonial/testi_1_4.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-wrapper">
                                    <ProductSlider cardData={cardHTMLDataForTestimonials} slidesPerView={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="space" id="contact-sec" style={{ backgroundImage: `url('assets/img/bg/appointment_bg_1.jpg')` }}data-bg-src="">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 pe-xxl-5 mb-40 mb-xl-0">
                            <div className="title-area mb-35 text-xl-start text-center">                                
                                <h2 className="sec-title">
                                    Mobile & Web Application  <br />
                                    <span className="text-theme">Development Services</span>
                                </h2>
                            </div>
                            <div className="contact-feature-wrap mt-n2 mb-30" style={{ overflowWrap: 'anywhere'}}>
                                <div className="contact-feature">
                                    <div className="icon-btn">
                                        <i className="fa-solid fa-laptop-mobile"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="contact-feature_label">Responsive Software</p>
                                    </div>
                                </div>
                                <div className="contact-feature">
                                    <div className="icon-btn">
                                        <i className="fa-solid fa-shield"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="contact-feature_label">Security & Data Protection</p>
                                    </div>
                                </div>
                                <div className="contact-feature">
                                    <div className="icon-btn">
                                        <i className="fa-solid fa-headset"></i>
                                    </div>
                                    <div className="media-body">
                                        <p className="contact-feature_label">Support & Maintenance</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-n2 mb-30 text-xl-start text-center">
                                Since the time software, websites and mobile applications became essential to every 
                                business, we have been taking care of development needs. We foresee the potential of 
                                dynamic software solutions and can turn your business idea into reality with our 
                                development services.
                            </p>
                        </div>
                        <div className="col-xl-6 ps-xl-4">
                            <h3 className="h4 mt-n2 mb-30 text-center">Enquiry Now</h3>
                            <form action="https://html.themeholy.com/webteck/demo/mail.php" method="POST" className="appoitment-form ajax-contact">
                                <div className="row">
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your Email" />                                                
                                    </div>                                    
                                    <div className="form-group col-12">
                                        <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Write Your Message"></textarea>
                                    </div>
                                    <div className="form-btn col-12">
                                        <button className="th-btn w-100">SEND A MASSAGE</button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section className="position-relative space">
                <div className="th-bg-img" style={{ backgroundImage: `url('assets/img/bg/cta_bg_2.jpg')` }} data-bg-src="">
                    <img src="assets/img/bg/bg_overlay_1.png" alt="overlay" />
                </div>
                <div className="container z-index-common">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-9 text-center">
                            <div className="title-area mb-35">
                                <span className="sub-title" style={{color: '#2c77d8'}}>
                                    CONTACT US
                                </span>
                                <h2 className="sec-title text-white">
                                    Need Any Kind Of IT Solution For 
                                    <span className="fw-normal" style={{color: '#2c77d8'}}> Your Business?</span>
                                </h2>
                            </div>
                            <a href="/contact-us" className="th-btn style3">Call Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-hidden bg-white space" data-overlay="overlay1" data-opacity="2">
                <div className="container th-container5">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="title-area mb-50 text-center text-md-start">
                                <span className="sub-title">
                                    Stories
                                </span>
                                <h2 className="sec-title">Our work that inspired you to work with us</h2>
                            </div>
                            <div className="project-btn">
                                <a href="/gallery" className="th-btn style-border style-radius">View All</a>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="slider-area project-slider4">                                
                                <div className="swiper-wrapper">
                                    <ProductSlider cardData={galleryHTMLData} slidesPerView={2} />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-top-right overflow-hidden space" id="blog-sec" style={{ backgroundImage: `url('assets/img/bg/blog_bg_1.png')` }} data-bg-src="" data-overlay="overlay1" data-opacity="1">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title">
                            LATEST BLOGS
                        </span>
                        <h2 className="sec-title">
                            Get Every Single Update 
                            <span className="text-theme fw-normal"> Blog</span>
                        </h2>
                    </div>
                    <div className="slider-area">
                        <ProductSlider cardData={blogHTMLData} slidesPerView={3} />                        
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Index;