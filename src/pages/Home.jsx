import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, HeartHandshake, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import ZebronicsSection from '../components/ZebronicsSection';
import TVSection from '../components/TVSection';
import HeroVideoBanner from '../components/HeroVideoBanner';
import InstagramFeed from '../components/InstagramFeed';
import YoutubeFeed from '../components/YoutubeFeed';
import { products, categories } from '../data/products';
import './Home.css';

const Home = () => {
    const featuredProducts = products.slice(0, 8); // Top 8 products

    return (
        <div className="home-page page-transition">
            {/* Hero Video Section */}
            <HeroVideoBanner />

            {/* TV Collection Section */}
            <TVSection />

            {/* Zebronics Authorized Dealer Section */}
            <ZebronicsSection />

            {/* Shop By Category */}
            <section className="category-section">
                <div className="container">
                    <h2 className="section-title">Shop by <span>Category</span></h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, index) => (
                            <div key={cat.id} className={`animate-slide-up delay-${(index % 4 + 1) * 100}`}>
                                <CategoryCard category={cat} />
                            </div>
                        ))}
                    </div>
                    <div className="view-all-btn">
                        <Link to="/categories" className="btn btn-primary">View All Categories</Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-section">
                <div className="container">
                    <h2 className="section-title">Trending <span>Products</span></h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product, index) => (
                            <div key={product.id} className={`animate-slide-up delay-${(index % 4 + 1) * 100}`}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="feature-card animate-slide-up delay-100">
                            <div className="feature-icon"><Truck size={32} /></div>
                            <h3>Fast Delivery</h3>
                            <p>Quick and safe delivery to your doorstep.</p>
                        </div>
                        <div className="feature-card animate-slide-up delay-200">
                            <div className="feature-icon"><Shield size={32} /></div>
                            <h3>Trusted Quality</h3>
                            <p>100% authentic brands with official warranty.</p>
                        </div>
                        <div className="feature-card animate-slide-up delay-300">
                            <div className="feature-icon"><HeartHandshake size={32} /></div>
                            <h3>Best Deals</h3>
                            <p>Exclusive discounts and unbeatable offers.</p>
                        </div>
                        <div className="feature-card animate-slide-up delay-400">
                            <div className="feature-icon"><Star size={32} /></div>
                            <h3>Affordable Prices</h3>
                            <p>Best price guarantee on all top brands.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube Channel Feed */}
            <YoutubeFeed />

            {/* Instagram Feed */}
            <InstagramFeed />

            {/* Promotional Banner */}
            <section className="promo-banner-section">
                <div className="container">
                    <div className="promo-banner">
                        <div className="promo-content">
                            <h3>Big Savings on Smart TVs!</h3>
                            <p>Up to 30% off on selected brands. Upgrade your entertainment experience today.</p>
                            <Link to="/products?category=tvs" className="btn btn-primary">Grab the Deal</Link>
                        </div>
                        <div className="promo-image">
                            <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600" alt="Smart TVs Offer" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="reviews-section">
                <div className="container">
                    <h2 className="section-title">Customer <span>Reviews</span></h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="review-card card">
                            <div className="review-rating">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="star-icon filled" />)}
                            </div>
                            <p className="review-text">"Excellent service and genuine products. I bought a Samsung 4K TV and the delivery was very prompt right to Kumbakonam."</p>
                            <h4 className="reviewer-name">- Rajkumar S.</h4>
                        </div>
                        <div className="review-card card">
                            <div className="review-rating">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="star-icon filled" />)}
                            </div>
                            <p className="review-text">"Om Muruga Enterprises offers the best prices in town. Highly recommend for home appliances. I am fully satisfied with my AC purchase."</p>
                            <h4 className="reviewer-name">- Priya M.</h4>
                        </div>
                        <div className="review-card card">
                            <div className="review-rating">
                                {[1, 2, 3, 4].map(i => <Star key={i} size={18} className="star-icon filled" />)}
                                <Star size={18} className="star-icon" />
                            </div>
                            <p className="review-text">"Friendly staff and great collection of kitchen appliances. Will definitely visit again for my future electronics needs."</p>
                            <h4 className="reviewer-name">- Karthik T.</h4>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
