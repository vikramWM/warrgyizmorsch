import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    "assets/img/gallery/warr/img_1.jpeg",
    "assets/img/gallery/warr/img_2.jpeg",
    "assets/img/gallery/warr/img_3.jpeg",
    "assets/img/gallery/warr/img_4.jpeg",
    "assets/img/gallery/warr/img_5.jpeg",
    "assets/img/gallery/warr/img_6.jpeg",
    "assets/img/gallery/warr/img_12.jpeg",
    "assets/img/gallery/warr/img_8.jpeg",
    "assets/img/gallery/warr/img_9.jpeg",
    "assets/img/gallery/warr/img_10.jpeg",
    "assets/img/gallery/warr/img_7.jpeg",
    "assets/img/gallery/warr/img_13.jpeg"
];

const Gallery = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isLightboxLoading, setIsLightboxLoading] = useState(false);

    const handleImageClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
        setIsLightboxLoading(true); // Start showing preloader
    };

    const handleImageLoad = () => {
        setIsLightboxLoading(false); // Stop showing preloader once image loads
    };

    return (
        <>
            <div style={{ height: '108px', backgroundColor: '#18336c' }}></div>
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
                        {images.map((src, index) => (
                            <div className="col-md-6 col-xl-4" key={index}>
                                <div className="service-card p-2">
                                    <img
                                        src={src}
                                        alt={`Gallery Image ${index + 1}`}
                                        onClick={() => handleImageClick(index)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isOpen && (
                <div>
                    {isLightboxLoading && <div className="preloader">Loading...</div>}
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => {
                            setPhotoIndex((photoIndex + images.length - 1) % images.length);
                            setIsLightboxLoading(true); // Show preloader when changing image
                        }}
                        onMoveNextRequest={() => {
                            setPhotoIndex((photoIndex + 1) % images.length);
                            setIsLightboxLoading(true); // Show preloader when changing image
                        }}
                        onImageLoad={handleImageLoad}
                    />
                </div>
            )}
        </>
    );
};

export default Gallery;
