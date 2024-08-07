// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <img src="logo_url" alt="SIRDI Logo" className="logo" />
                    <p>
                        Contribute to the development of a sugar industry that is efficient, globally competitive, and sustainable through transfer of improved technologies.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#departments">Departments</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section news">
                    <h3>News</h3>
                    <div className="news-item">
                        <p>Apr 13, 2021</p>
                        <a href="#news1">Real Time Weather Data Monitoring</a>
                    </div>
                    <div className="news-item">
                        <p>Apr 13, 2021</p>
                        <a href="#news2">BAHA MOU</a>
                    </div>
                </div>

                <div className="footer-section contact">
                    <h3>Contact</h3>
                    <p><i className="fas fa-phone"></i> +501 677-4734</p>
                    <p><i className="fas fa-envelope"></i> info@sirdi.bz</p>
                    <p><i className="fas fa-map-marker-alt"></i> 66.5 Mile Northern Highway, Buena Vista, Corozal</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
