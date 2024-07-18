import React from 'react';

const About = () => {
    return (
        <>
            <div className="breadcumb-wrapper" style={{
                backgroundImage: `url("assets/img/bg/breadcumb-bg.jpg")`,
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">About Us</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;