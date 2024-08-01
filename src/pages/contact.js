import React from 'react'

const Contact = () => {
    return (
        <>
            
            <section className="about-sec-v4 pb-5">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-30 mb-lg-0">
                            <div className="img-box6">
                                <div className="img1"><img src="assets/img/normal/about_4_1.png" alt="About" /></div>
                                <div className="shape1"><img src="assets/img/normal/about_4_2.png" alt="About" /></div>
                                <div className="shape2"><img src="assets/img/normal/about_4_3.png" alt="About" /></div>
                                <div className="color-animate"></div>
                            </div>
                        </div>
                        <div className="col-lg-8 text-lg-start text-center">
                            <div className="ps-xxl-5">
                                <div className="title-area mb-35">
                                    <span className="sub-title">Contact Info</span>
                                    <h2 className="sec-title">Warrgyizmorsch private limited</h2>
                                </div>
                                {/* <div className="checklist style4 mb-20 list-center">
                                    <ul>
                                        <li>
                                            <i className="fas fa-location-dot"></i>
                                            <b>Our Office Address :</b> International House, Constance Street, London E16                                                
                                        </li>
                                        <li>
                                            <i className="fas fa-location-dot"></i>
                                            <b>Our India Branch :</b> 27 krishna vihar Behind mds school old rto Pratap nagar Udaipur, Rajasthan                                       
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope"></i>
                                            <b>Send An Email :</b><a href="mailto:info@warrgyizmorsch.com">info@warrgyizmorsch.com</a>                                                
                                        </li>
                                        <li>
                                            <i className="fas fa-phone"></i>                                            
                                            <b>Call Us Anytime:</b>
                                            <a href="tel:+442030533844">+44 2030533844</a> 
                                            <a href="tel:+919784710045">+91 9784710045</a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="checklist style4 mb-20 list-center">
                                    <div className='row'>
                                        <div className='col-12 col-md-6 col-lg-6 card p-2'>
                                            <div className='text-center' style={{color: '#18336c', fontSize: '20px'}}><i className="fas fa-envelope"></i></div>
                                            <div className='text-center' style={{color: 'black', fontSize: '20px'}}><b>Send An Email :</b></div>
                                            <div className='text-center'><a href="mailto:info@warrgyizmorsch.com">info@warrgyizmorsch.com</a></div>                                                                                                                                        
                                        </div>
                                        <div className='col-12 col-md-6 col-lg-6 card p-2'>
                                            <div className='text-center' style={{color: '#18336c', fontSize: '20px'}}><i className="fas fa-phone"></i></div>
                                            <div className='text-center' style={{color: 'black', fontSize: '20px'}}><b>Call Us Anytime:</b></div>
                                            <div className='text-center'><a href="tel:+442030533844">+44 2030533844</a></div>
                                            <div className='text-center'><a href="tel:+919784710045">+91 9784710045</a></div>
                                        </div>
                                        <div className='col-12 col-md-12 col-lg-6 card p-2'>
                                            <div className='text-center' style={{color: '#18336c', fontSize: '20px'}}><i className="fas fa-location-dot"></i></div>
                                            <div className='text-center' style={{color: 'black', fontSize: '20px'}}><b>Our Office Address :</b></div>
                                            <div className='text-center'>International House, Constance Street, London E16</div>
                                        </div>
                                        <div className='col-12 col-md-12 col-lg-6 card p-2'>
                                            <div className='text-center' style={{color: '#18336c', fontSize: '20px'}}><i className="fas fa-location-dot"></i></div>
                                            <div className='text-center' style={{color: 'black', fontSize: '20px'}}><b>Our India Branch :</b></div>
                                            <div className='text-center'>27 krishna vihar Behind mds school old rto Pratap nagar Udaipur, Rajasthan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-smoke space" style={{ backgroundImage: `url('assets/img/bg/contact_bg_1.png')` }}data-bg-src="">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="title-area mb-35 text-xl-start text-center">
                                <span className="sub-title">
                                    contact with us!
                                </span>
                                <h2 className="sec-title">Have Any Questions?</h2>
                                {/* <p className="sec-text">
                                Tell us about yourself
                                </p> */}
                            </div>
                            <form action="https://html.themeholy.com/webteck/demo/mail.php" method="POST" className="contact-form ajax-contact">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" /> 
                                        <i className="fal fa-user"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" /> 
                                        <i className="fal fa-envelope"></i>
                                    </div>                                    
                                    <div className="form-group col-md-6">
                                        <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" /> 
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" name="CompanyName" id="CompanyName" placeholder="Company Name" /> 
                                        <i className="fal fa-building"></i>
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Your Message"></textarea> 
                                        <i className="fal fa-comment"></i>
                                    </div>
                                    <div className="form-btn text-xl-start text-center col-12">
                                        <button className="th-btn">
                                            Send Message
                                            <i className="fa-regular fa-arrow-right ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;