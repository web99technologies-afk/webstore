import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useUI } from '../context/UIContext';
import './Contact.css';

const Contact = () => {
    const { openContactPopup } = useUI();

    return (
        <div className="contact-page page-transition container">
            <div className="contact-header animate-slide-up">
                <h1 className="page-title">Contact <span>Us</span></h1>
                <p className="page-subtitle">We would love to hear from you. Reach out for any queries or support.</p>
            </div>

            <div className="contact-layout">
                <div className="contact-info-cards animate-slide-up delay-100">
                    <div className="contact-card">
                        <div className="contact-icon"><MapPin size={24} /></div>
                        <h3>Visit Our Store</h3>
                        <p className="contact-detail">ROSI COMPLEX, Chennai Road, Malik Nagar,</p>
                        <p className="contact-detail">Koranattu Karuppur I, Kumbakonam,</p>
                        <p className="contact-detail">Tamil Nadu 612002, India</p>
                    </div>

                    <div className="contact-card clickable-card" onClick={openContactPopup}>
                        <div className="contact-icon"><Phone size={24} /></div>
                        <h3>Call Us</h3>
                        <p className="contact-detail">+91 88076 34136</p>
                        <p className="contact-subdetail">Mon-Sat from 9am to 9pm.</p>
                        <button className="btn-card-action">View Contacts</button>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon"><Mail size={24} /></div>
                        <h3>Email Us</h3>
                        <p className="contact-detail">info@ommurugaenterprises.com</p>
                        <p className="contact-subdetail">We usually reply within 24 hours.</p>
                    </div>
                </div>

                <div className="contact-content-grid">
                    {/* Contact Form */}
                    <div className="contact-form-section card animate-fade-in delay-200">
                        <h2>Send us a Message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="+91 00000 00000" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
                        </form>
                        <div className="whatsapp-action">
                            <p>Prefer to chat? Reach us on WhatsApp</p>
                            <a href="https://wa.me/918807634136" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Google Maps Integration */}
                    <div className="store-map-section card animate-fade-in delay-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.452656920252!2d79.37322303487375!3d11.006935105221971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5527ca3e7d6929%3A0x6e3b5e1de74c0b48!2sKumbakonam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Om Muruga Enterprises Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
