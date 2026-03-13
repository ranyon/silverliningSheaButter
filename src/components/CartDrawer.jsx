import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Minus, Plus } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose }) => {
    // Prevent scrolling on body when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-brand-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface z-50 shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-6 border-b border-brand-100 shrink-0">
                    <h2 className="text-xl font-serif text-brand-900">Your Cart</h2>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-textSec hover:text-brand-900 bg-surface rounded-full hover:bg-brand-50 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                    <div className="space-y-8">
                        {/* Example Item */}
                        <div className="flex gap-4">
                            <div className="w-20 h-24 bg-brand-100 shrink-0 flex items-center justify-center">
                                <span className="text-brand-400 text-xs italic">Img</span>
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-serif text-base text-brand-900 leading-tight">Raw Ivory Shea Butter</h3>
                                        <button className="text-textSec hover:text-red-500 transition-colors ml-2">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-textSec mt-1">Unrefined, 8oz</p>
                                </div>
                                <div className="flex justify-between items-end mt-2">
                                    <div className="flex items-center border border-brand-200">
                                        <button className="px-2 py-1 text-textSec hover:bg-brand-50 transition-colors"><Minus className="w-3 h-3" /></button>
                                        <span className="w-6 text-center text-xs font-medium">1</span>
                                        <button className="px-2 py-1 text-textSec hover:bg-brand-50 transition-colors"><Plus className="w-3 h-3" /></button>
                                    </div>
                                    <span className="font-medium text-textPrime text-sm">$28.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-brand-100 bg-brand-50/50 shrink-0">
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm text-textSec">
                            <span>Subtotal</span>
                            <span>$28.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-textSec">
                            <span>Shipping</span>
                            <span className="text-xs mt-0.5">Calculated at checkout</span>
                        </div>
                    </div>
                    <button className="w-full bg-brand-800 text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-900 transition-colors">
                        Checkout — $28.00
                    </button>
                    <div className="mt-4 text-center">
                        <button onClick={onClose} className="text-xs text-textSec underline hover:text-brand-600 transition-colors">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
