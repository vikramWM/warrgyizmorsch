import React from 'react';

const Error = (props) => {
    return (
        <>
            <div className="breadcumb-wrapper" style={{ backgroundImage: `url("assets/img/bg/breadcumb-bg.jpg")` ,
                backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">404 - Error Page</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="/">Home</a></li>
                            <li>404 - Error Page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="space">
                <div className="container">
                    <div className="error-img"><img src="assets/img/theme-img/error.svg" alt="404 image" /></div>
                    <div className="error-content">
                        <h2 className="error-title"><span className="text-theme">OooPs!</span> Page Not Found</h2>
                        <p className="error-text">Oops! The page you are looking for does not exist. It might have been moved or
                            deleted.</p><a href="/" className="th-btn"><i className="fal fa-home me-2"></i>Back To Home</a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Error;