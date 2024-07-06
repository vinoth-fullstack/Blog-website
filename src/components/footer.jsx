import React from 'react';


const Footer = () => {
    return (
        <footer className="footer mt-4">
        <div className='container' id="footer">
            <div className="contact-info">
                <div className="info-item">
                    <span className="icon"><i class="fa-solid fa-location-dot"></i></span>
                    <span className="texts">It is a long established fact that a reader will be</span>
                </div>
                <div className="info-item">
                    <span className="icon"><i class="fa-solid fa-phone"></i></span>
                    <span className="texts">(+71) 1234567890</span>
                </div>
                <div className="info-item">
                    <span className="icon"><i class="fa-solid fa-envelope"></i></span>
                    <span className="texts">demo@gmail.com</span>
                </div>
            </div>
            <div className="social-media">
                <span className="follow-us">FOLLOW US</span>
                <div className="icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
