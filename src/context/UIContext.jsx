import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

    const openContactPopup = (e) => {
        if (e) e.preventDefault();
        setIsContactPopupOpen(true);
    };

    const closeContactPopup = () => {
        setIsContactPopupOpen(false);
    };

    return (
        <UIContext.Provider value={{ isContactPopupOpen, openContactPopup, closeContactPopup }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
};
