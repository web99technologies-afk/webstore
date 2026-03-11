import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Products.css';

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryQuery = queryParams.get('category');

    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(categoryQuery || 'all');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let result = products;

        if (activeCategory !== 'all') {
            result = result.filter(product => product.category === activeCategory);
        }

        if (searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(result);
    }, [searchTerm, activeCategory]);

    useEffect(() => {
        setActiveCategory(categoryQuery || 'all');
    }, [categoryQuery, setActiveCategory]);

    return (
        <div className="products-page page-transition container">
            <div className="products-header animate-slide-up">
                <h1 className="page-title">Explore Our <span>Products</span></h1>
                <p className="page-subtitle">Find the best electronics and home appliances for your needs.</p>
            </div>

            <div className="products-layout">
                {/* Sidebar Controls */}
                <aside className="products-sidebar animate-fade-in delay-100">
                    <div className="filter-group">
                        <h3 className="filter-title"><Search size={20} /> Search</h3>
                        <div className="search-input-wrap">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="filter-search-input"
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title"><Filter size={20} /> Categories</h3>
                        <ul className="category-filter-list">
                            <li>
                                <button
                                    className={`category-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                                    onClick={() => setActiveCategory('all')}
                                >
                                    All Products
                                </button>
                            </li>
                            {categories.map(cat => (
                                <li key={cat.id}>
                                    <button
                                        className={`category-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat.id)}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="products-main">
                    <div className="products-count animate-fade-in delay-200">
                        Showing {filteredProducts.length} results {activeCategory !== 'all' && `in ${categories.find(c => c.id === activeCategory)?.name}`}
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product, index) => (
                                <div key={product.id} className={`animate-slide-up delay-${(index % 4 + 1) * 100}`}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-products animate-fade-in">
                            <h3>No products found!</h3>
                            <p>Try adjusting your search or category filter.</p>
                            <button className="btn btn-primary" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Products;
