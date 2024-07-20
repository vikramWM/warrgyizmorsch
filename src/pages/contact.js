import React from 'react'

const Contact = () => {
    return (
        <>
            <div style={{ height: '137px', backgroundColor: '#18336c'}}></div>
            {/* <div class="space">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-xl-6 col-md-6">
                            <div class="contact-info">
                                <div class="contact-info_icon">
                                    <i class="fas fa-location-dot"></i>
                                </div>
                                <div class="media-body">
                                    <h4 class="box-title">Our Office Address</h4>
                                    <span class="contact-info_text">International House, Constance Street, <br /> London E16</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6">
                            <div class="contact-info">
                                <div class="contact-info_icon">
                                    <i class="fas fa-location-dot"></i>
                                </div>                                        
                                <div class="media-body">
                                    <h4 class="box-title">Our India Branch</h4>
                                    <span class="contact-info_text">Warrgyizmorsch private limited <br /> 27 krishna vihar Behind mds school old rto <br />Pratap nagar Udaipur, Rajasthan</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6">
                            <div class="contact-info">
                                <div class="contact-info_icon"><i class="fas fa-phone"></i></div>
                                <div class="media-body">
                                    <h4 class="box-title">Call Us Anytime</h4>
                                    <span class="contact-info_text">
                                        <a href="tel:+442030533844">+44 2030533844</a> 
                                        <a href="tel:+919784710045">+91 9784710045</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6">
                            <div class="contact-info">
                                <div class="contact-info_icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="media-body">
                                    <h4 class="box-title">Send An Email</h4>
                                    <span class="contact-info_text">
                                        <a href="mailto:info@warrgyizmorsch.com">info@warrgyizmorsch.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <section class="about-sec-v4 pb-5">
                <div class="container ">
                    <div class="row align-items-center">
                        <div class="col-lg-4 mb-30 mb-lg-0">
                            <div class="img-box6">
                                <div class="img1"><img src="assets/img/normal/about_4_1.png" alt="About" /></div>
                                <div class="shape1"><img src="assets/img/normal/about_4_2.png" alt="About" /></div>
                                <div class="shape2"><img src="assets/img/normal/about_4_3.png" alt="About" /></div>
                                <div class="color-animate"></div>
                            </div>
                        </div>
                        <div class="col-lg-8 text-lg-start text-center">
                            <div class="ps-xxl-5">
                                <div class="title-area mb-35">
                                    <span class="sub-title">Contact Info</span>
                                    <h2 class="sec-title">Warrgyizmorsch private limited</h2>
                                </div>
                                <div class="checklist style4 mb-20 list-center">
                                    <ul>
                                        <li>
                                            <i class="fas fa-location-dot"></i>
                                            <b>Our Office Address :</b> International House, Constance Street, London E16                                                
                                        </li>
                                        <li>
                                            <i class="fas fa-location-dot"></i>
                                            <b>Our India Branch :</b> 27 krishna vihar Behind mds school old rto Pratap nagar Udaipur, Rajasthan                                       
                                        </li>
                                        <li>
                                            <i class="fas fa-envelope"></i>
                                            <b>Send An Email :</b><a href="mailto:info@warrgyizmorsch.com">info@warrgyizmorsch.com</a>                                                
                                        </li>
                                        <li>
                                            <i class="fas fa-phone"></i>                                            
                                            <b>Call Us Anytime:</b>
                                            <a href="tel:+442030533844">+44 2030533844</a> 
                                            <a href="tel:+919784710045">+91 9784710045</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="bg-smoke space" style={{ backgroundImage: `url('assets/img/bg/contact_bg_1.png')` }}data-bg-src="">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8">
                            <div class="title-area mb-35 text-xl-start text-center">
                                <span class="sub-title">
                                    contact with us!
                                </span>
                                <h2 class="sec-title">Have Any Questions?</h2>
                                {/* <p class="sec-text">
                                Tell us about yourself
                                </p> */}
                            </div>
                            <form action="https://html.themeholy.com/webteck/demo/mail.php" method="POST" class="contact-form ajax-contact">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Your Name" /> 
                                        <i class="fal fa-user"></i>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" /> 
                                        <i class="fal fa-envelope"></i>
                                    </div>                                    
                                    <div class="form-group col-md-6">
                                        <input type="tel" class="form-control" name="number" id="number" placeholder="Phone Number" /> 
                                        <i class="fal fa-phone"></i>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control" name="CompanyName" id="CompanyName" placeholder="Company Name" /> 
                                        <i class="fal fa-building"></i>
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" id="message" cols="30" rows="3" class="form-control" placeholder="Your Message"></textarea> 
                                        <i class="fal fa-comment"></i>
                                    </div>
                                    <div class="form-btn text-xl-start text-center col-12">
                                        <button class="th-btn">
                                            Send Message
                                            <i class="fa-regular fa-arrow-right ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                                <p class="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;