import React from 'react';
import { Target, Award, Users } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page page-transition">
            {/* About Hero */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-content animate-slide-up">
                    <h1 className="page-title">About <span>Om Muruga Enterprises</span></h1>
                    <p className="page-subtitle text-white">Your most trusted partner for premium electronics and home appliances in Kumbakonam.</p>
                </div>
            </section>

            {/* About Content */}
            <section className="about-content-section container">
                <div className="about-grid">
                    <div className="about-text animate-fade-in delay-100">
                        <h2>Who We Are</h2>
                        <p>
                            Located in the heart of Kumbakonam at ROSI COMPLEX, Om Muruga Enterprises has established itself as a premier destination for high-quality electronics, home appliances, and kitchen solutions.
                        </p>
                        <p>
                            We understand that purchasing an appliance is an investment for your home. That's why we bring you the finest collection from top global brands, ensuring reliability, durability, and modern features.
                        </p>
                        <p>
                            Our dedicated and friendly staff are always ready to assist you in making the best choice tailored to your needs and budget. We believe in providing complete customer satisfaction from walking into our store to after-sales support.
                        </p>
                    </div>
                    <div className="about-image animate-fade-in delay-200">
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Electronics Store" />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title">Our <span>Core Values</span></h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="value-card animate-slide-up delay-100">
                            <div className="value-icon"><Award size={32} /></div>
                            <h3>Quality First</h3>
                            <p>We never compromise on the quality of our products. Only the best and authentic brands make it to our showroom.</p>
                        </div>
                        <div className="value-card animate-slide-up delay-200">
                            <div className="value-icon"><Users size={32} /></div>
                            <h3>Customer Centric</h3>
                            <p>Your satisfaction is our ultimate goal. We strive to provide a seamless and pleasant shopping experience.</p>
                        </div>
                        <div className="value-card animate-slide-up delay-300">
                            <div className="value-icon"><Target size={32} /></div>
                            <h3>Affordability</h3>
                            <p>We work hard to bring you the best market prices and exclusive discounts without hidden costs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
