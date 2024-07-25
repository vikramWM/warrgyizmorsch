import React from 'react'

const Services = () => {
    return (
        <>
            <div style={{ height: '108px', backgroundColor: '#18336c'}}></div>
            <section class="" id="service-sec">
                <div class="round-container gr-bg3 pt-5">
                    <div class="container">                        
                        <div class="title-area text-center">
                            <span class="sub-title">OUR SERVICES</span>
                            <h2 class="sec-title">We Provide Exclusive Services</h2>
                        </div>
                        <div class="slider-area">
                            <div className="row ">
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/csp.avif" alt="Icon" />
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
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/omni.jpg" alt="Icon" />
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
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/virtual.jpg" alt="Icon" />
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
                                </div>
                            {/* </div>
                            <div className="row "> */}
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/accountandbook.jpg" alt="Icon" />
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
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/e-commerce.avif" alt="Icon" />
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
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/data-manage.avif" alt="Icon" />
                                            </div>
                                            <div class="service-3d_content">
                                                <h3 class="box-title">
                                                    Data management
                                                </h3>
                                                <p class="service-3d_text">
                                                    To be an efficient fuel source for businesses, data must be managed efficiently. Data management 
                                                    services ...
                                                </p>
                                                <a href="/service-data-management" class="th-btn">
                                                    Read More
                                                    <i class="fas fa-arrow-right ms-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </div>
                            <div className="row "> */}
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/website.avif" alt="Icon" />
                                            </div>
                                            <div class="service-3d_content">
                                                <h3 class="box-title">
                                                    Website Design And Development
                                                </h3>
                                                <p class="service-3d_text">
                                                    A web design application development company that helps businesses build strong customer
                                                    profiles and reaches ...
                                                </p>
                                                <a href="/service-website-design-development" class="th-btn">
                                                    Read More
                                                    <i class="fas fa-arrow-right ms-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/content.avif" alt="Icon" />
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
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4">
                                    <div class="swiper-slide">
                                        <div class="service-3d h-100">
                                            <div class="service-3d_icon">
                                                <img style={{ width: 'auto', height: '150px', objectFit: 'cover'}} src="assets/img/icon/service_3d_3.png" alt="Icon" />
                                            </div>
                                            <div class="service-3d_content">
                                                <h3 class="box-title">
                                                    Digital Marketing
                                                </h3>
                                                <p class="service-3d_text">
                                                    Intrinsicly redefine competitive e-business before
                                                    adaptive potentialiti. Professionally build progressive users with. ...
                                                </p>
                                                <a href="/service-digital-marketing" class="th-btn">
                                                    Read More
                                                    <i class="fas fa-arrow-right ms-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
            </section>
        </>   
    )
}

export default Services;