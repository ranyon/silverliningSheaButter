import React from 'react';
import { NavLink } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-serif text-brand-900 mb-10 text-center">Your Cart</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                    {/* Cart Items Area */}
                    <div className="space-y-8">
                        <div className="flex gap-6 py-6 border-b border-brand-100">
                            <div className="w-24 h-32 bg-brand-50 flex items-center justify-center shrink-0">
                                <span className="text-brand-300 text-xs italic">Img</span>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-serif text-lg text-brand-900">Raw Ivory Shea Butter</h3>
                                        <button className="text-textSec hover:text-red-500 transition-colors">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-sm text-textSec">Unrefined, 8oz</p>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div className="flex items-center border border-brand-200">
                                        <button className="px-3 py-2 text-textSec hover:bg-brand-50 transition-colors"><Minus className="w-3 h-3" /></button>
                                        <span className="w-8 text-center text-sm font-medium">1</span>
                                        <button className="px-3 py-2 text-textSec hover:bg-brand-50 transition-colors"><Plus className="w-3 h-3" /></button>
                                    </div>
                                    <span className="font-medium text-textPrime">$28.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-80 shrink-0">
                    <div className="bg-surface border border-brand-100 p-6">
                        <h2 className="text-lg font-serif font-medium text-brand-900 mb-4 border-b border-brand-100 pb-4">Order Summary</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm text-textSec">
                                <span>Subtotal</span>
                                <span>$28.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-textSec">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="flex justify-between pt-4 mt-4 border-t border-brand-100">
                                <span className="font-medium text-brand-900">Total</span>
                                <span className="font-medium text-brand-900">$28.00</span>
                            </div>
                        </div>
                        <button className="w-full bg-brand-800 text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-900 transition-colors">
                            Checkout
                        </button>
                        <div className="mt-4 text-center">
                            <NavLink to="/shop" className="text-xs text-textSec underline hover:text-brand-600 transition-colors">
                                Continue Shopping
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
