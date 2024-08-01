import React, { useState } from 'react';
import ReactImageVideoLightbox from 'react-image-video-lightbox';

const mediaItems = [
    { url: "assets/img/gallery/warr/img_1.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/IMG_6615.jpg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_3.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_4.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_5.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_6.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_12.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_8.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_9.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_10.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_7.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/img_13.jpeg", type: 'photo' },
    { url: "assets/img/gallery/warr/office.mp4", type: 'video' },
    { url: "assets/img/gallery/warr/office2.mp4", type: 'video' }
];

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleMediaClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <>
            <section className="pb-5" id="service-sec" style={{ backgroundImage: `url('assets/img/bg/blog_bg_1.png')` }}>
                <div className="container pt-5">
                    <div className="title-area text-center">
                        <h2 className="sec-title">
                            GALLERY
                        </h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        {mediaItems.map((item, index) => (
                            <div className="col-md-6 col-xl-4" key={index}>
                                <div
                                    key={index}
                                    className="card p-1"
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        border: '1px solid rgba(255, 255, 255, 0.18)',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        marginBottom: '15px',
                                        cursor: 'pointer',
                                        transition: 'transform 0.7s ease, box-shadow 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {item.type === 'photo' ? (
                                    <img
                                        src={item.url}
                                        alt={`Media ${index + 1}`}
                                        onClick={() => handleMediaClick(index)}
                                        style={{ width: '100%', height: '230px', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                    ) : (
                                    <video
                                        src={item.url}
                                        controls
                                        muted
                                        onClick={() => handleMediaClick(index)}
                                        style={{ width: '100%', maxHeight: '230px', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isOpen && (
                <div className="lightbox-container">
                    <ReactImageVideoLightbox
                        data={mediaItems}
                        startIndex={photoIndex}
                        showResourceCount={true}
                        onCloseCallback={() => setIsOpen(false)}
                    />
                </div>
            )}

            <style jsx="true">{`
                .lightbox-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    z-index: 1000; /* Ensure this is higher than other elements */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .container, .service-card {
                    pointer-events: ${isOpen ? 'none' : 'auto'};
                }
            `}</style>
        </>
    );
};

export default Gallery;
