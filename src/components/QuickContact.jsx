import React, { useState } from 'react';
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react';
import './QuickContact.css';

const QuickContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={`quick-contact-wrapper animate-fade-in ${isOpen ? 'is-open' : ''}`}>
            <div className="qc-menu">
                <a href="tel:+918525928699" className="qc-action qc-call" title="Call Us">
                    <Phone size={24} />
                    <span className="qc-tooltip">Call Now</span>
                </a>
                <a href="https://wa.me/918525928699" target="_blank" rel="noreferrer" className="qc-action qc-wa" title="WhatsApp Us">
                    <MessageCircle size={24} />
                    <span className="qc-tooltip">WhatsApp</span>
                </a>
            </div>

            <button className="qc-toggle btn-primary" onClick={toggleOpen}>
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default QuickContact;
