import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUI } from '../context/UIContext';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { getCartCount } = useCart();
    const { openContactPopup } = useUI();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="nav-brand">
                    <Link to="/">
                        <h1>Om Muruga <span>Enterprises</span></h1>
                    </Link>
                </div>

                <div className="nav-search hidden-mobile">
                    <div className="search-bar">
                        <input type="text" placeholder="Search for products..." />
                        <button className="search-btn"><Search size={20} /></button>
                    </div>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/products" className={isActive('/products')} onClick={() => setIsOpen(false)}>Products</Link></li>
                    <li><Link to="/categories" className={isActive('/categories')} onClick={() => setIsOpen(false)}>Categories</Link></li>
                    <li><Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>

                <div className="nav-actions">
                    <button onClick={openContactPopup} className="action-icon phone-icon hidden-mobile" title="Call Us">
                        <Phone size={24} />
                    </button>
                    <Link to="/cart" className="action-icon cart-icon">
                        <ShoppingCart size={24} />
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </Link>
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="mobile-search">
                <div className="search-bar">
                    <input type="text" placeholder="Search for products..." />
                    <button className="search-btn"><Search size={20} /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
