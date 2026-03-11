import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/products?category=${category.id}`} className="card category-card">
            <div className="category-image-wrap">
                <img src={category.image} alt={category.name} loading="lazy" />
                <div className="category-overlay"></div>
            </div>
            <div className="category-content">
                <h3>{category.name}</h3>
                <span className="category-link">Shop Now <ArrowRight size={16} /></span>
            </div>
        </Link>
    );
};

export default CategoryCard;
