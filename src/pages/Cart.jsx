import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    const total = getCartTotal();
    const tax = total * 0.18; // 18% GST assumption
    const shipping = total > 50000 ? 0 : 500; // Free shipping over 50000
    const grandTotal = total + tax + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="cart-page page-transition container">
                <div className="empty-cart animate-fade-in">
                    <div className="empty-cart-icon">
                        <ShoppingBag size={64} />
                    </div>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/products" className="btn btn-primary">
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page page-transition container">
            <div className="cart-header animate-slide-up">
                <h1 className="page-title">Shopping <span>Cart</span></h1>
                <p className="page-subtitle">Review your items and proceed to checkout.</p>
            </div>

            <div className="cart-layout">
                <div className="cart-items-container animate-slide-up delay-100">
                    <div className="cart-actions-top">
                        <span>You have {cartItems.length} items in your cart</span>
                        <button onClick={clearCart} className="btn-clear">Clear Cart</button>
                    </div>

                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>

                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p className="cart-item-category">{item.category.replace('-', ' ')}</p>
                                    <div className="cart-item-price-mobile">₹{item.price.toLocaleString('en-IN')}</div>
                                </div>

                                <div className="cart-item-quantity">
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className="cart-item-price hidden-mobile">
                                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                </div>

                                <button
                                    className="cart-item-remove"
                                    onClick={() => removeFromCart(item.id)}
                                    title="Remove item"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cart-summary animate-slide-up delay-200">
                    <div className="summary-card card">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{total.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax (GST 18%)</span>
                            <span>₹{tax.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row summary-total">
                            <span>Grand Total</span>
                            <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                        </div>

                        <button className="btn btn-primary btn-checkout">
                            Proceed to Checkout <ArrowRight size={20} />
                        </button>
                        <div className="checkout-note">
                            Currently serving Kumbakonam and surrounding areas only.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
