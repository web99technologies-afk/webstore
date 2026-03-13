import React from 'react';
import { Phone, X, User } from 'lucide-react';
import './ContactPopup.css';

const ContactPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const contacts = [
        {
            name: 'Vinoth',
            role: 'Sales Executive',
            phone: '+91 93639 06640',
            dial: '+919363906640'
        },
        {
            name: 'Balu',
            role: 'Sales Executive',
            phone: '+91 91503 73423',
            dial: '+919150373423'
        },
        {
            name: 'Gopi.R',
            role: 'Owner',
            phone: '+91 85259 28699',
            dial: '+918525928699'
        }
    ];

    return (
        <div className="contact-popup-overlay" onClick={onClose}>
            <div className="contact-popup-card animate-zoom-in" onClick={e => e.stopPropagation()}>
                <button className="contact-popup-close" onClick={onClose}>
                    <X size={24} />
                </button>
                
                <div className="contact-popup-header">
                    <h2>Call Our Sales Team</h2>
                    <p>Select a contact to call directly</p>
                </div>

                <div className="contact-list">
                    {contacts.map((contact, index) => (
                        <div key={index} className="contact-item">
                            <div className="contact-info">
                                <div className="contact-avatar">
                                    <User size={20} />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-name">{contact.name}</span>
                                    <span className="contact-role">{contact.role}</span>
                                    <span className="contact-phone">{contact.phone}</span>
                                </div>
                            </div>
                            <a href={`tel:${contact.dial}`} className="contact-call-btn">
                                <Phone size={18} />
                                <span>Call</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;
