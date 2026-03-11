import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('om-muruga-cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('om-muruga-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return removeFromCart(id);
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCartItems([]);

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
