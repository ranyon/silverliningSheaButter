import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-50 pt-16 pb-8 border-t border-brand-100 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-serif font-semibold text-brand-800 mb-4">Silver Lining Shea Butter</h3>
                        <p className="text-textSec text-sm leading-relaxed max-w-sm">
                            Pure, organic, unrefined shea butter sourced softly from nature. Our products bring balance, nourishment, and a touch of simple luxury to your daily routine.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-textPrime mb-4 uppercase tracking-wider">Shop</h4>
                        <ul className="space-y-3">
                            <li><NavLink to="/shop" className="text-sm text-textSec hover:text-brand-600 transition-colors">All Products</NavLink></li>
                            <li><NavLink to="/shop?category=body-butter" className="text-sm text-textSec hover:text-brand-600 transition-colors">Body Butters</NavLink></li>
                            <li><NavLink to="/shop?category=soaps" className="text-sm text-textSec hover:text-brand-600 transition-colors">Natural Soaps</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-textPrime mb-4 uppercase tracking-wider">Support</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-textSec hover:text-brand-600 transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-sm text-textSec hover:text-brand-600 transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="text-sm text-textSec hover:text-brand-600 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-brand-200/50 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-textSec">&copy; {new Date().getFullYear()} Silver Lining Shea Butter. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-xs text-textSec hover:text-brand-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-textSec hover:text-brand-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
