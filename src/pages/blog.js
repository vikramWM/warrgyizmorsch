import React from 'react';

const Blog = () => {
    const blogs = [
        {
            title: "How digital marketing is different from traditional marketing?",
            imgSrc: "assets/img/blog/blog_1_1.jpg",
            date: "15 Jan, 2024",
            comments: "2 Comments",
            description: "Traditional marketing involves conventional methods like TV, newspapers, etc., while digital marketing leverages online platforms to reach customers. The evolving nature of digital marketing allows for more targeted, measurable, and cost-effective approaches...",
            link: "blog-details.html"
        },
        {
            title: "How digital marketing helps in business growth?",
            imgSrc: "assets/img/blog/blog_1_1.jpg",
            date: "15 Jan, 2024",
            comments: "2 Comments",
            description: "As the global work culture changes, digital marketing has taken the forefront. The advent of modern technology has made digital marketing a vital tool for small and medium enterprises to achieve significant growth and compete in the market...",
            link: "blog-details.html"
        },
        {
            title: "Top Digital Marketing Strategies for gyms",
            imgSrc: "assets/img/blog/blog_1_1.jpg",
            date: "15 Jan, 2024",
            comments: "2 Comments",
            description: "In today's busy world, people often neglect self-care due to hectic schedules. As a result, health-related issues become more prevalent. Digital marketing strategies can help gyms connect with potential clients, offering solutions to improve their health and well-being...",
            link: "blog-details.html"
        },
        {
            title: "Top 10 Digital Marketing Strategies for startups",
            imgSrc: "assets/img/blog/blog_1_1.jpg",
            date: "15 Jan, 2024",
            comments: "2 Comments",
            description: "Navigating the competitive business landscape is challenging for startups, especially in the aftermath of COVID-19. This blog explores the top 10 digital marketing strategies that can help startups establish a strong market presence and achieve sustainable growth...",
            link: "blog-details.html"
        },
        {
            title: "Top Digital Marketing Strategies for product launches",
            imgSrc: "assets/img/blog/blog_1_1.jpg",
            date: "15 Jan, 2024",
            comments: "2 Comments",
            description: "Product launches are critical moments for any business. With the right digital marketing strategies, companies can build anticipation, reach wider audiences, and ensure successful product introductions. This article delves into key strategies for maximizing the impact of a product launch...",
            link: "blog-details.html"
        },
        {
            title: "How does Digital Marketing Help Small Businesses?",
            imgSrc: "assets/img/blog/blog_1_1.jpg",
            date: "15 Jan, 2024",
            comments: "2 Comments",
            description: "Effective marketing is crucial for the growth of small businesses. Digital marketing provides these businesses with tools and strategies to enhance their visibility, engage customers, and drive sales, ensuring long-term success and sustainability...",
            link: "blog-details.html"
        }
    ];

    const truncateText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

    const styles = {
        blogCard: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff',
            transition: 'transform 0.3s, box-shadow 0.3s',
        },
        blogCardHover: {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
        blogImg: {
            width: '100%',
            maxHeight: '200px',
            objectFit: 'cover',
            borderRadius: '8px 8px 0 0',
        },
        blogContent: {
            padding: '16px',
        },
        blogMeta: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
        },
        blogMetaLink: {
            color: '#555',
            textDecoration: 'none',
        },
        boxTitle: {
            fontSize: '1.2em',
            fontWeight: 'bold',
            marginBottom: '8px',
        },
        blogText: {
            flexGrow: 1,
            marginBottom: '16px',
        },
        blogBottom: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        lineBtn: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#18336c',
            fontWeight: 'bold',
        },
        arrowIcon: {
            marginLeft: '8px',
        }
    };

    return (
        <>
            <div style={{ height: '108px', backgroundColor: '#18336c' }}></div>
            <section className="bg-top-right overflow-hidden" id="blog-sec" style={{ backgroundImage: `url('assets/img/bg/blog_bg_1.png')` }}>
                <div className="container pt-5">
                    <div className="title-area text-center">
                        <span className="sub-title">LATEST BLOGS</span>
                        <h2 className="sec-title">
                            Get Every Single Update <span className="text-theme fw-normal">Blog</span>
                        </h2>
                    </div>
                    <div className="row">
                        {blogs.map((blog, index) => (
                            <div className="col-12 col-md-12 col-lg-6 col-xl-4 p-4" key={index}>
                                <div className="blog-card gr-bg3" 
                                    style={styles.blogCard} 
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} 
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                                    onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'}
                                    onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'}
                                >
                                    <div className="blog-img">
                                        <img src={blog.imgSrc} alt="blog" style={styles.blogImg} />
                                    </div>
                                    <div className="blog-content" style={styles.blogContent}>
                                        <div className="blog-meta" style={styles.blogMeta}>
                                            <a href="blog.html" style={styles.blogMetaLink}>
                                                <i className="fal fa-calendar-days"></i> {blog.date}
                                            </a>
                                            <a href="blog.html" style={styles.blogMetaLink}>
                                                <i className="fal fa-comments"></i> {blog.comments}
                                            </a>
                                        </div>
                                        <h3 className="box-title" style={styles.boxTitle}>
                                            <a href={blog.link} style={{ textDecoration: 'none', color: '#000' }}>
                                                {truncateText(blog.title, 50)}
                                            </a>
                                        </h3>
                                        <p className="blog-text" style={styles.blogText}>
                                            {truncateText(blog.description, 150)}
                                        </p>
                                        <div className="blog-bottom" style={styles.blogBottom}>
                                            <a href={blog.link} className="line-btn" style={styles.lineBtn}>
                                                Read More
                                                <i className="fas fa-arrow-right" style={styles.arrowIcon}></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
