import React from 'react';
import { NavLink } from 'react-router-dom';

const Shop = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
                <h1 className="text-4xl font-serif text-brand-900">All Products</h1>
                <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
                    <span className="text-brand-800 font-medium cursor-pointer border-b border-brand-800">All</span>
                    <span className="text-textSec hover:text-brand-600 cursor-pointer">Body Butter</span>
                    <span className="text-textSec hover:text-brand-600 cursor-pointer">Soaps</span>
                    <span className="text-textSec hover:text-brand-600 cursor-pointer">Oils</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <NavLink to={`/product/${item}`} key={item} className="group block">
                        <div className="aspect-[4/5] bg-brand-100 mb-6 flex items-center justify-center">
                            <span className="text-brand-300 font-serif italic opacity-50">Product {item}</span>
                        </div>
                        <div className="text-center group-hover:opacity-80 transition-opacity">
                            <h3 className="text-sm font-medium text-textPrime mb-2">Organic Ivory Shea</h3>
                            <p className="text-brand-600 text-sm">$22.00</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Shop;
