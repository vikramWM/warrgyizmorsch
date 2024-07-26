import React from 'react';

const Services = () => {
    const servicesData = [
        {
            title: "Voice support",
            imgSrc: "assets/img/icon/csp.avif",
            description: "When you're looking to make your business stand out, voice assistance services add the missing feature...",
            link: "/service-voice-support"
        },
        {
            title: "Omni Support",
            imgSrc: "assets/img/icon/omni.jpg",
            description: "In German it is 'der Kunde ist König' (customer is king) or in Japanese, it is 'okyakusama wa kamisama desu'...",
            link: "/service-omni-support"
        },
        {
            title: "Virtual Learning",
            imgSrc: "assets/img/icon/virtual.jpg",
            description: "In the digital age, doing mundane tasks within the same organization is now rare. It is difficult to manage all aspects ...",
            link: "/service-virtual-learning"
        },
        {
            title: "Accounting and Book Keeping",
            imgSrc: "assets/img/icon/accountandbook.jpg",
            description: "Finance accounting and bookkeeping services, is extremely important aspect for any business and certainly requires ...",
            link: "/service-accounting-and-bookkeeping"
        },
        {
            title: "E Commerce services",
            imgSrc: "assets/img/icon/e-commerce.avif",
            description: "Maintaining a stable sales volume is the primary goal of an online seller. However, it is difficult to achieve this unless ...",
            link: "/service-e-commerce"
        },
        {
            title: "Data management",
            imgSrc: "assets/img/icon/data-manage.avif",
            description: "To be an efficient fuel source for businesses, data must be managed efficiently. Data management services ...",
            link: "/service-data-management"
        },
        {
            title: "Website Design And Development",
            imgSrc: "assets/img/icon/website.avif",
            description: "A web design application development company that helps businesses build strong customer profiles and reaches ...",
            link: "/service-website-design-development"
        },
        {
            title: "Content Writing",
            imgSrc: "assets/img/icon/content.avif",
            description: "Content writing is all about drafting thoughts and business ideas on a paper. it is the process of planning,  ...",
            link: "/service-content-writing"
        },
        {
            title: "Digital Marketing",
            imgSrc: "assets/img/icon/service_3d_3.png",
            description: "Intrinsicly redefine competitive e-business before adaptive potentialiti. Professionally build progressive users ...",
            link: "/service-digital-marketing"
        }
    ];

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    const styles = {
        service3d: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff',
            transition: 'transform 0.3s',
        },
        service3dHover: {
            transform: 'translateY(-5px)',
        },
        service3dIcon: {
            flexShrink: 0,
            textAlign: 'center',
            marginBottom: '16px',
        },
        service3dIconImg: {
            width: '100%',
            maxWidth: '150px',
            height: '150px',
            objectFit: 'cover',
        },
        service3dContent: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        boxTitle: {
            fontSize: '1.2em',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            position: 'relative',
        },
        boxTitleSlider: {
            animation: 'slide 10s linear infinite',
            position: 'relative',
            display: 'inline-block',
        },
        service3dText: {
            flexGrow: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        thBtn: {
            alignSelf: 'flex-start',
            textTransform: 'uppercase',
            color: '',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        thBtnIcon: {
            marginLeft: '8px',
            transition: 'transform 0.3s',
        },
        thBtnHoverIcon: {
            transform: 'translateX(5px)',
        },
    };

    return (
        <>
            <div style={{ height: '108px', backgroundColor: '#18336c' }}></div>
            <section className="gr-bg3" id="service-sec">
                <div className="round-container pt-5">
                    <div className="container">
                        <div className="title-area text-center">
                            <span className="sub-title">OUR SERVICES</span>
                            <h2 className="sec-title">We Provide Exclusive Services</h2>
                        </div>
                        <div className="row">
                            {servicesData.map((service, index) => (
                                <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4" key={index}>
                                    <div className="swiper-slide">
                                        <div className="service-3d h-100" style={styles.service3d} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
                                            <div className="service-3d_icon" style={styles.service3dIcon}>
                                                <img style={styles.service3dIconImg} src={service.imgSrc} alt="Icon" />
                                            </div>
                                            <div className="service-3d_content" style={styles.service3dContent}>
                                                <h3 className={`box-title ${service.title.length > 35 ? 'slider' : ''}`} style={service.title.length > 35 ? { ...styles.boxTitle, ...styles.boxTitleSlider } : styles.boxTitle}>
                                                    {truncateText(service.title, 35)}
                                                </h3>
                                                <p className="service-3d_text" style={styles.service3dText}>
                                                    {truncateText(service.description, 100)}
                                                </p>
                                            </div>
                                            <div className="">
                                                <a href={service.link} className="th-btn" style={styles.thBtn}>
                                                    Read More
                                                    <i className="fas fa-arrow-right ms-2" style={styles.thBtnIcon}></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
