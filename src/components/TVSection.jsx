import React, { useState } from 'react';
import { Phone, MessageCircle, MonitorPlay, Wifi, Cast, Smartphone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useUI } from '../context/UIContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TVSection.css';

const categories = ['Normal LED TV', 'Android TV', 'WebOS TV'];

const tvSizes = [
    { size: 24, range: '₹6,000 – ₹8,000', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400' },
    { size: 32, range: '₹8,000 – ₹13,000', image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&q=80&w=400' },
    { size: 40, range: '₹14,000 – ₹18,000', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400' },
    { size: 43, range: '₹18,000 – ₹25,000', image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=400' },
    { size: 50, range: '₹25,000 – ₹35,000', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=400' },
    { size: 55, range: '₹35,000 – ₹50,000', image: 'https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&q=80&w=400' },
    { size: 64, range: '₹50,000 – ₹70,000', image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&q=80&w=400' }
];

const getFeatures = (category) => {
    if (category === 'Normal LED TV') {
        return [
            { id: 1, icon: <MonitorPlay size={16} />, text: 'HDMI & USB Ports' },
            { id: 2, icon: <MonitorPlay size={16} />, text: 'A+ Grade Panel' },
            { id: 3, icon: <MonitorPlay size={16} />, text: 'Vivid Color Engine' }
        ];
    } else if (category === 'Android TV') {
        return [
            { id: 1, icon: <Wifi size={16} />, text: 'Built-in WiFi' },
            { id: 2, icon: <Smartphone size={16} />, text: 'Smart Apps (YouTube, PlayStore)' },
            { id: 3, icon: <Cast size={16} />, text: 'Chromecast / Screen Mirroring' },
            { id: 4, icon: <MonitorPlay size={16} />, text: 'HDMI & USB' }
        ];
    } else {
        // WebOS
        return [
            { id: 1, icon: <Wifi size={16} />, text: 'Built-in WiFi' },
            { id: 2, icon: <Smartphone size={16} />, text: 'WebOS Smart Apps' },
            { id: 3, icon: <Cast size={16} />, text: 'Magic Remote Support' },
            { id: 4, icon: <MonitorPlay size={16} />, text: 'HDMI, USB & Bluetooth' }
        ];
    }
};

const TVSection = () => {
    const [activeTab, setActiveTab] = useState('Android TV');
    const { openContactPopup } = useUI();

    const sendMessage = (tv, cat) => {
        const message = `Hello Om Muruga Enterprises! I am interested in the ${tv.size} Inch ${cat} with price range ${tv.range}. Please share more details.`;
        window.open(`https://wa.me/918807634136?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="tv-section">
            <div className="container">
                <div className="tv-header animate-slide-up">
                    <h2 className="section-title">Exclusive <span>TV Collection</span></h2>
                    <p className="tv-desc">Explore our wide range of televisions by size. Find the perfect fit for your home at the best price.</p>
                </div>

                <div className="tv-tabs-container animate-fade-in delay-100">
                    <div className="tv-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`tv-tab-btn ${activeTab === cat ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="tv-slider-wrap animate-slide-up delay-200">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }}
                        className="tv-swiper"
                    >
                        {tvSizes.map((tv) => (
                            <SwiperSlide key={`${activeTab}-${tv.size}`}>
                                <div className="tv-card">
                                    <div className="tv-image-container">
                                        <span className="tv-category-badge">{activeTab}</span>
                                        <img src={tv.image} alt={`${tv.size} Inch TV`} className="tv-img" />
                                    </div>
                                    <div className="tv-info">
                                        <h3 className="tv-size-title">{tv.size} Inch TV</h3>
                                        <div className="tv-price-range">
                                            <span>Price Range:</span>
                                            <strong>{tv.range}</strong>
                                        </div>

                                        <ul className="tv-features">
                                            {getFeatures(activeTab).map(feature => (
                                                <li key={feature.id}>
                                                    <span className="feature-icon-sm">{feature.icon}</span> {feature.text}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="tv-actions">
                                            <button onClick={openContactPopup} className="btn btn-call">
                                                <Phone size={18} /> Call Now
                                            </button>
                                            <button onClick={() => sendMessage(tv, activeTab)} className="btn btn-wa">
                                                <MessageCircle size={18} /> WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TVSection;
