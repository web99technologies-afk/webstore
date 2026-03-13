import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Send, ArrowLeft, ShoppingBag, MapPin, User, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getCartTotal } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const total = getCartTotal();
    const tax = total * 0.18; // 18% GST assumption
    const shipping = total > 50000 ? 0 : 500; // Free shipping over 50000
    const grandTotal = total + tax + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="checkout-page page-transition container">
                <div className="empty-checkout animate-fade-in">
                    <ShoppingBag size={64} className="mb-4 text-light" />
                    <h2>Your cart is empty</h2>
                    <p>Add some products to your cart before checking out.</p>
                    <Link to="/products" className="btn btn-primary mt-4">
                        View Products
                    </Link>
                </div>
            </div>
        );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // WhatsApp Configuration
        const WHATSAPP_NUMBER = '918807634136';
        
        // Format Order Summary
        let orderMessage = `*Customer Order - Om Muruga Enterprises*\n\n`;
        orderMessage += `*Product List:*\n`;
        
        cartItems.forEach(item => {
            orderMessage += `- ${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
        });
        
        orderMessage += `\n*Total Amount:* ₹${grandTotal.toLocaleString('en-IN')}\n\n`;
        orderMessage += `*Customer Details:*\n`;
        orderMessage += `Name: ${formData.name}\n`;
        orderMessage += `Phone: ${formData.phone}\n`;
        orderMessage += `Address: ${formData.address}\n\n`;
        orderMessage += `Please process my order. Thank you!`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(orderMessage);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="checkout-page page-transition container">
            <div className="checkout-header animate-slide-up">
                <Link to="/cart" className="back-link">
                    <ArrowLeft size={20} /> Back to Cart
                </Link>
                <h1 className="page-title">Finalize <span>Order</span></h1>
                <p className="page-subtitle">Complete your details to send order via WhatsApp.</p>
            </div>

            <div className="checkout-layout">
                {/* Order Summary Preview */}
                <div className="order-summary-preview animate-slide-up delay-100">
                    <div className="summary-card card">
                        <h3>Order Summary</h3>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="item-info">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-qty">x {item.quantity}</span>
                                    </div>
                                    <span className="item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="summary-totals">
                            <div className="total-row">
                                <span>Subtotal</span>
                                <span>₹{total.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="total-row">
                                <span>GST (18%)</span>
                                <span>₹{tax.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="total-row">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
                            </div>
                            <div className="total-divider"></div>
                            <div className="total-row grand-total">
                                <span>Total Amount</span>
                                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="checkout-form-container animate-slide-up delay-200">
                    <form onSubmit={handleSubmit} className="checkout-form card">
                        <h3>Customer Information</h3>
                        
                        <div className="form-group">
                            <label htmlFor="name">
                                <User size={18} /> Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">
                                <Phone size={18} /> Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">
                                <MapPin size={18} /> Delivery Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your full delivery address"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-place-order">
                            <Send size={20} /> Place Order on WhatsApp
                        </button>
                        
                        <p className="whatsapp-note">
                            * Clicking this button will open WhatsApp with your order summary message.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
