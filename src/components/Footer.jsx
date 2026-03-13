import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { useUI } from '../context/UIContext';
import './Footer.css';

const Footer = () => {
    const { openContactPopup } = useUI();

    return (
        <footer className="footer animate-fade-in">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" className="footer-brand">
                        <h3>Om Muruga <span>Enterprises</span></h3>
                    </Link>
                    <p className="footer-desc">
                        Your trusted electronics and home appliances store in Kumbakonam. We offer high-quality products, affordable prices, and exceptional customer service.
                    </p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/ommurugaenterprises/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram"><Instagram size={20} /></a>
                        <a href="https://www.youtube.com/@ommurugaenterprises4150/videos" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube"><Youtube size={20} /></a>
                        <button onClick={openContactPopup} className="social-icon" title="Call Us"><Phone size={20} /></button>
                        <a href="https://wa.me/918807634136" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp"><MessageCircle size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">All Products</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Categories</h4>
                    <ul className="footer-links">
                        <li><Link to="/products?category=tvs">Smart TVs</Link></li>
                        <li><Link to="/products?category=home-appliances">Home Appliances</Link></li>
                        <li><Link to="/products?category=kitchen">Kitchen Appliances</Link></li>
                        <li><Link to="/products?category=furniture">Furniture</Link></li>
                        <li><Link to="/products?category=accessories">Accessories</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4 className="footer-heading">Contact Info</h4>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={20} className="icon" />
                            <span>ROSI COMPLEX, Chennai Road, Malik Nagar, Koranattu Karuppur I, Kumbakonam, Tamil Nadu 612002, India</span>
                        </li>
                        <li className="clickable-contact" onClick={openContactPopup}>
                            <Phone size={20} className="icon" />
                            <span>+91 88076 34136</span>
                        </li>
                        <li>
                            <Mail size={20} className="icon" />
                            <span>info@ommurugaenterprises.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Om Muruga Enterprises. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
