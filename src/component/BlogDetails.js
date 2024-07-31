import React from 'react';

const BlogDetailsLayout = ({ blogData }) => {
    return (
        <>
            <div className="breadcumb-wrapper pt-5 pb-5" style={{ backgroundImage: 'url(assets/img/bg/bg_overlay_1.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <ul className="breadcumb-menu pb-3">
                            <li><a href="/">Home</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                        <h1 className="breadcumb-title">{blogData.title}</h1>
                    </div>
                </div>
            </div>
            <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-lg-7">
                            <div className="th-blog blog-single">
                                {blogData.mainImage && (
                                    <div className="blog-img">
                                        <img src={blogData.mainImage} alt="Blog" />
                                    </div>
                                )}
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        {blogData.authorImage && blogData.author && (
                                            <a className="author" href="javascript:void(0);">
                                                <img src={blogData.authorImage} alt="Author" />
                                                By {blogData.author}
                                            </a>
                                        )}
                                        {blogData.date && (
                                            <a href="javascript:void(0);">
                                                <i className="fa-light fa-calendar-days"></i>
                                                {blogData.date}
                                            </a>
                                        )}
                                        <a href="javascript:void(0);">
                                            <i className="fa-regular fa-comments"></i>
                                            Comments ({blogData.comments?.length || 0})
                                        </a>
                                    </div>
                                    <h2 className="blog-title">{blogData.title}</h2>
                                    {blogData.content && <p dangerouslySetInnerHTML={{ __html: blogData.content }}></p>}
                                    
                                </div>
                                {(blogData.tags && blogData.tags.length > 0) || (blogData.comments && blogData.comments.length > 0) ? (
                                    <div className="share-links clearfix">
                                        <div className="row justify-content-between">
                                            {blogData.tags && blogData.tags.length > 0 && (
                                                <div className="col-sm-auto">
                                                    <span className="share-links-title">Tags:</span>
                                                    <div className="tagcloud">
                                                        {blogData.tags.map((tag, index) => (
                                                            <a key={index} href="javascript:void(0);">{tag}</a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="col-sm-auto text-xl-end">
                                                <span className="share-links-title">Share:</span>
                                                <ul className="social-links">
                                                    <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}                                    
                            </div>
                                {blogData.comments && blogData.comments.length > 0 && (
                                    <div className="th-comments-wrap">
                                        <h2 className="blog-inner-title h3">
                                            <i className="far fa-comments"></i>
                                            Comments ({blogData.comments.length})
                                        </h2>
                                        <ul className="comment-list">
                                            {blogData.comments.map((comment, index) => (
                                                <li key={index} className="th-comment-item">
                                                    <div className="th-post-comment">
                                                        <div className="comment-avater">
                                                            <img src={comment.authorImage} alt="Comment Author" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <span className="commented-on">
                                                                <i className="fal fa-calendar-alt"></i>
                                                                {comment.date}
                                                            </span>
                                                            <h3 className="name">{comment.author}</h3>
                                                            <p className="text">{comment.text}</p>
                                                            <div className="reply_and_edit">
                                                                <a href="javascript:void(0);" className="reply-btn"><i className="fas fa-reply"></i>Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            <div className="th-comment-form">
                                <div className="form-title">
                                    <h3 className="blog-inner-title mb-2">
                                        <i className="fa-solid fa-reply"></i>
                                        Leave a Comment
                                    </h3>
                                    <p className="form-text">
                                        Your email address will not be published. Required fields are marked *
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Your Name*" className="form-control" />
                                        <i className="fal fa-user"></i>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Your Email*" className="form-control" />
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="text" placeholder="Website" className="form-control" />
                                        <i className="fal fa-globe"></i>
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea placeholder="Write a Comment*" className="form-control"></textarea>
                                        <i className="fal fa-pencil"></i>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button type="submit" className="th-btn">
                                            Post Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-5">
                            <aside className="sidebar-area">
                                {blogData.categories && blogData.categories.length > 0 && (
                                    <div className="widget widget_categories">
                                        <h3 className="widget_title">Categories</h3>
                                        <ul>
                                            {blogData.categories.map((category, index) => (
                                                <li key={index}>
                                                    <a href={category.url}>{category.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {blogData.gallery && blogData.gallery.length > 0 && (
                                    <div className="widget widget_gallery">
                                        <h3 className="widget_title">Gallery Post</h3>
                                        <div className="sidebar-gallery">
                                            {blogData.gallery.map((image, index) => (
                                                <div key={index} className="gallery-thumb">
                                                    <img src={image.src} alt="Gallery Image" />
                                                    <a href="/gallery" className="gallery-btn popup-image">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {blogData.recentPosts && blogData.recentPosts.length > 0 && (
                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget_title">Recent Posts</h3>
                                        <div className="recent-posts">
                                            {blogData.recentPosts.map((post) => (
                                                <div key={post.id} className="recent-post">
                                                    <div className="media-img">
                                                        <a href={`javascript:void(0);`}>
                                                            <img src={post.image} alt={post.title} />
                                                        </a>
                                                    </div>
                                                    <div className="recent-post-body">
                                                        <h4 className="post-title">
                                                            <a className="text-inherit" href={`${post.url}`}>
                                                                {post.title}
                                                            </a>
                                                        </h4>
                                                        <div className="recent-post-meta">
                                                            <a href="javascript:void(0);"><i className="fal fa-calendar-days"></i>{post.date}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {blogData.popularTags && blogData.popularTags.length > 0 && (
                                    <div className="widget widget_tag_cloud">
                                        <h3 className="widget_title">Popular Tags</h3>
                                        <div className="tagcloud">
                                            {blogData.popularTags.map((tag, index) => (
                                                <a key={index} href="javascript:void(0);">{tag}</a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetailsLayout;
