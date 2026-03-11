import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/products';
import './Categories.css';

const Categories = () => {
    return (
        <div className="categories-page page-transition container">
            <div className="categories-header animate-slide-up">
                <h1 className="page-title">Shop by <span>Categories</span></h1>
                <p className="page-subtitle">Browse through our wide range of product categories.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 categories-grid">
                {categories.map((category, index) => (
                    <div key={category.id} className={`animate-slide-up delay-${(index % 3 + 1) * 100} category-wrap`}>
                        <CategoryCard category={category} />
                        <div className="category-info">
                            <p>Explore all the latest {category.name.toLowerCase()} products with great deals and warranties.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
