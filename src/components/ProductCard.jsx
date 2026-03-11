import React, { useState } from 'react';
import { Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <div className="card product-card">
            <div className="product-image-container">
                {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <div className="product-overlay">
                    <button
                        className={`btn ${added ? 'btn-success' : 'btn-primary'} add-to-cart-btn`}
                        onClick={handleAddToCart}
                    >
                        {added ? <Check size={20} /> : <ShoppingCart size={20} />}
                        {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>

            <div className="product-info">
                <div className="product-category">{product.category.replace('-', ' ')}</div>
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                    <Star size={16} className="star-icon filled" />
                    <span className="rating-value">{product.rating}</span>
                    <span className="rating-count">({product.reviews})</span>
                </div>

                <div className="product-price-row">
                    <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice > product.price && (
                        <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
