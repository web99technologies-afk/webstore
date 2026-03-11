import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, PhoneCall } from 'lucide-react';
import './HeroVideoBanner.css';

import img1 from '../img/om-muruga-enterprises-malik-nagar-kumbakonam-insurance-agents-64vmaf93ax.jpg';
import img2 from '../img/om-muruga-enterprises-malik-nagar-kumbakonam-insurance-agents-q89uxf2m2w.jpg';
import img3 from '../img/om-muruga-enterprises-malik-nagar-kumbakonam-insurance-agents-swv4oi9zjm.jpg';
import img4 from '../img/om-muruga-enterprises-malik-nagar-kumbakonam-mobile-phone-dealers-3lu7i41k1f.jpg';
import img5 from '../img/om-muruga-enterprises-malik-nagar-kumbakonam-mobile-phone-dealers-utv73tan4x.jpg';

const slideImages = [img1, img2, img3, img4, img5];

const HeroVideoBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="hero-slideshow-banner">
            <div className="slideshow-background">
                {slideImages.map((img, index) => (
                    <div
                        key={index}
                        className={`slide-image ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            <div className="slideshow-overlay"></div>

            <div className="container hero-content-wrapper">
                <div className="hero-content text-center animate-slide-up">
                    <h1 className="hero-title">
                        Welcome to <br />
                        <span>Om Muruga Enterprises</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Your Trusted Electronics and Home Appliances Store in Kumbakonam
                    </h2>

                    <div className="hero-buttons">
                        <Link to="/products" className="btn btn-primary hero-btn">
                            <ShoppingBag size={20} /> View Products
                        </Link>
                        <Link to="/contact" className="btn btn-outline btn-white hero-btn">
                            <PhoneCall size={20} /> Contact Store
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroVideoBanner;
