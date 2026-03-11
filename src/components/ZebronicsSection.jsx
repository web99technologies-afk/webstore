import React from 'react';
import ProductCard from './ProductCard';
import './ZebronicsSection.css';

const zebronicsProducts = [
    {
        id: 'zeb-9700',
        name: 'Zebronics Zeb-Juke Bar 9700 Pro Dolby Atmos',
        category: 'home-theater',
        price: 17999,
        originalPrice: 22999,
        rating: 4.8,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600',
        description: 'Dolby Atmos Soundbar with Subwoofer.'
    },
    {
        id: 'zeb-9500',
        name: 'Zebronics Zeb-Juke Bar 9500WS Pro Dolby 5.1',
        category: 'home-theater',
        price: 15999,
        originalPrice: 19999,
        rating: 4.7,
        reviews: 245,
        image: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?auto=format&fit=crop&q=80&w=600',
        description: 'Wireless Satellites, Dolby Audio.'
    },
    {
        id: 'zeb-9400',
        name: 'Zebronics Zeb-Juke Bar 9400 Pro Dolby 5.1',
        category: 'home-theater',
        price: 14999,
        originalPrice: 18999,
        rating: 4.6,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1608223633215-38ce8e7ee9ad?auto=format&fit=crop&q=80&w=600',
        description: 'Dolby Digital Plus Soundbar.'
    },
    {
        id: 'zeb-bt6860',
        name: 'Zebronics Zeb-BT6860RUCF Tower Speaker',
        category: 'speaker',
        price: 5499,
        originalPrice: 7999,
        rating: 4.5,
        reviews: 140,
        image: 'https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?auto=format&fit=crop&q=80&w=600',
        description: '5.1 Channel multimedia speaker with Bluetooth.'
    },
    {
        id: 'zeb-bt6590',
        name: 'Zebronics Zeb-BT6590RUCF Tower Speaker',
        category: 'speaker',
        price: 4999,
        originalPrice: 6599,
        rating: 4.4,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=600',
        description: '5.1 Multimedia speaker with remote control.'
    },
    {
        id: 'zeb-3900',
        name: 'Zebronics ZEB-Juke Bar 3900 Soundbar',
        category: 'soundbar',
        price: 4999,
        originalPrice: 6999,
        rating: 4.3,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1614051061803-33433edca9de?auto=format&fit=crop&q=80&w=600',
        description: '80W Soundbar with dual drivers & subwoofer.'
    },
    {
        id: 'zeb-series',
        name: 'Zebronics Zeb-Juke Bar Series',
        category: 'soundbar',
        price: 3999,
        originalPrice: 5999,
        rating: 4.2,
        reviews: 85,
        image: 'https://images.unsplash.com/photo-1585659722983-38ce8e7ee9ad?auto=format&fit=crop&q=80&w=600',
        description: 'Premium entry-level soundbars.'
    }
];

const ZebronicsSection = () => {
    return (
        <section className="zebronics-section">
            <div className="container">
                <div className="zebronics-header animate-slide-up">
                    <span className="authorized-badge">Authorized Dealer</span>
                    <h2 className="section-title">Zebronics <span>Authorized Dealer</span></h2>
                    <p className="zebronics-desc">
                        Om Muruga Enterprises is an authorized dealer of Zebronics products. Customers can buy genuine Zebronics home theater systems, speakers, and accessories with trusted quality and warranty.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {zebronicsProducts.map((product, index) => (
                        <div key={product.id} className={`animate-slide-up delay-${(index % 4 + 1) * 100}`}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ZebronicsSection;
