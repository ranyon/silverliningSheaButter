import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, Search, User } from 'lucide-react';

const Navbar = ({ onOpenCart, isScrolled = false }) => {
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? "bg-surface/90 backdrop-blur-md border-b border-brand-100 shadow-sm"
                : "bg-transparent border-b border-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-20' : 'h-24'}`}>
                    <div className="flex items-center space-x-8">
                        <button className="p-2 -ml-2 text-textPrime hover:text-brand-600 transition-colors lg:hidden">
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="hidden lg:flex space-x-8">
                            <NavLink to="/shop" className="text-sm font-medium text-textPrime hover:text-brand-600 transition-colors uppercase tracking-widest">Shop</NavLink>
                            <NavLink to="/about" className="text-sm font-medium text-textSec hover:text-brand-600 transition-colors uppercase tracking-widest">Our Story</NavLink>
                        </div>
                    </div>

                    <div className="flex-shrink-0 flex items-center justify-center">
                        <NavLink to="/" className="text-2xl font-serif font-semibold tracking-wide text-brand-900 group">
                            SILVER LINING<br />
                            <span className="text-xs font-sans font-light tracking-[0.3em] text-brand-600 block text-center mt-1 group-hover:text-brand-400 transition-colors">SHEA BUTTER</span>
                        </NavLink>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-textPrime hover:text-brand-600 transition-colors hidden sm:block">
                            <Search className="w-5 h-5" />
                        </button>
                        <NavLink to="/admin" className="p-2 text-textPrime hover:text-brand-600 transition-colors hidden sm:block">
                            <User className="w-5 h-5" />
                        </NavLink>
                        <button onClick={onOpenCart} className="p-2 text-textPrime hover:text-brand-600 transition-colors relative">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
