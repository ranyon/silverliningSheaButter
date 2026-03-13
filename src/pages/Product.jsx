import React from 'react';
import { useParams } from 'react-router-dom';
import { Minus, Plus, ShoppingBag } from 'lucide-react';

const Product = () => {
    const { id } = useParams();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row gap-16">
                {/* Product Images */}
                <div className="w-full md:w-1/2">
                    <div className="aspect-square bg-brand-50 flex items-center justify-center">
                        <span className="text-brand-300 font-serif italic text-2xl opacity-50">Product Image {id}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {[1, 2, 3, 4].map(idx => (
                            <div key={idx} className="aspect-square bg-brand-50/50 cursor-pointer border border-transparent hover:border-brand-200 transition-colors flex items-center justify-center">
                                <span className="text-brand-300 text-xs opacity-50">Thumb</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">Raw Ivory Shea Butter</h1>
                    <p className="text-2xl text-brand-700 mb-8 font-light">$28.00</p>

                    <div className="prose prose-sm text-textSec mb-10 max-w-none font-light">
                        <p className="mb-4">
                            Our signature raw, unrefined ivory shea butter. Sourced ethically and handcrafted using traditional methods to preserve its rich vitamins and healing properties. Deeply moisturizing, perfectly simple.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>100% Organic & Unrefined</li>
                            <li>Sourced from Ghana</li>
                            <li>Soothes dry skin, eczema, and inflammation</li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-6 mb-10 border-y border-brand-100 py-6">
                        <div className="flex items-center border border-brand-200 text-textPrime">
                            <button className="px-4 py-3 hover:bg-brand-50 transition-colors"><Minus className="w-4 h-4" /></button>
                            <span className="w-12 text-center font-medium">1</span>
                            <button className="px-4 py-3 hover:bg-brand-50 transition-colors"><Plus className="w-4 h-4" /></button>
                        </div>
                        <button className="flex-1 bg-brand-800 text-white py-4 px-8 flex items-center justify-center space-x-2 hover:bg-brand-900 transition-colors uppercase tracking-widest text-sm font-medium">
                            <span>Add to Cart</span>
                            <ShoppingBag className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <details className="group border-b border-brand-100 pb-4">
                            <summary className="cursor-pointer text-sm font-medium uppercase tracking-wider text-brand-900 flex justify-between items-center">
                                Ingredients
                                <Plus className="w-4 h-4 group-open:hidden" />
                                <Minus className="w-4 h-4 hidden group-open:block" />
                            </summary>
                            <p className="mt-4 text-sm text-textSec font-light">100% Pure Unrefined Butyrospermum Parkii (Shea) Butter.</p>
                        </details>
                        <details className="group border-b border-brand-100 pb-4">
                            <summary className="cursor-pointer text-sm font-medium uppercase tracking-wider text-brand-900 flex justify-between items-center">
                                How to Use
                                <Plus className="w-4 h-4 group-open:hidden" />
                                <Minus className="w-4 h-4 hidden group-open:block" />
                            </summary>
                            <p className="mt-4 text-sm text-textSec font-light">Melt a small amount between palms and massage gently into skin or hair. Use daily for best results.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
