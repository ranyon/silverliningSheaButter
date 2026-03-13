import React, { useRef } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { Leaf, Heart, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollCanvas from '../components/ScrollCanvas';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    // Parallax ref for hero image (if needed later)
    const heroRef = useRef(null);
    const { scrollContainerRef } = useOutletContext();
    const textScene1Ref = useRef(null);
    const textScene2Ref = useRef(null);
    const textScene3Ref = useRef(null);
    const textScene4Ref = useRef(null);

    useGSAP(() => {
        if (!heroRef.current || !scrollContainerRef?.current) return;

        // Create a single comprehensive timeline for the hero section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                scroller: scrollContainerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                snap: {
                    snapTo: [0, 0.33, 0.66, 1],
                    duration: { min: 0.2, max: 0.5 },
                    delay: 0.1,
                    ease: "power2.inOut"
                }
            }
        });

        // Scene 1: Initial Hook (Left)
        // Visible at snap 0. Starts fading out at 1.2s.
        tl.to(textScene1Ref.current, { opacity: 0, y: -50, duration: 1 }, 1.2);

        // Scene 2: Ancient Wisdom (Right)
        // Peak at snap 0.33 (~3.3s). Fades in 1.2-2.2s. Fades out 4.5-5.5s.
        tl.fromTo(textScene2Ref.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1 },
            1.2
        );
        tl.to(textScene2Ref.current, { opacity: 0, y: -50, duration: 1 }, 4.5);

        // Scene 3: 100% Raw (Left)
        // Peak at snap 0.66 (~6.6s). Fades in 4.5-5.5s. Fades out 7.8-8.8s.
        tl.fromTo(textScene3Ref.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1 },
            4.5
        );
        tl.to(textScene3Ref.current, { opacity: 0, y: -50, duration: 1 }, 7.8);

        // Scene 4: Deep Restoration (Right)
        // Peak at snap 1.0 (10s). Fades in 7.8-9.5s. Persists.
        tl.fromTo(textScene4Ref.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.7 },
            7.8
        );

    }, { dependencies: [heroRef, scrollContainerRef], revertOnUpdate: true });

    // Animations variants for reusability in lower sections (keeping Framer Motion for standard scroll-into-view)
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section Container (Tall for scrubbing) */}
            <section ref={heroRef} className="relative w-full h-[400vh] bg-brand-50">
                {/* Sticky Wrapper Keeps the UI in Viewport */}
                <div className="sticky top-[80px] h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden border-b border-brand-100">

                    {/* Centered Product Canvas */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 max-w-4xl mx-auto h-[60vh] md:h-[80vh] px-4 opacity-90">
                        <ScrollCanvas
                            frameCount={126}
                            scrollContainerRef={scrollContainerRef}
                            heroRef={heroRef}
                        />
                    </div>
                </div>

                {/* Overlaid Scrolling Text Content */}
                <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                    {/* Scene 1: Initial Hook (Left) */}
                    <div className="h-[100vh] w-full flex items-center justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div
                            ref={textScene1Ref}
                            className="max-w-md pointer-events-auto bg-surface/80 backdrop-blur-sm p-8 rounded-2xl border border-brand-100/50 shadow-sm"
                        >
                            <span className="text-brand-600 font-sans tracking-widest text-xs uppercase mb-4 block">
                                Nature's purest touch
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6 leading-tight">
                                Raw, Organic <br /><span className="italic font-light">Shea Butter.</span>
                            </h1>
                            <p className="text-base text-textSec mb-8 font-light leading-relaxed">
                                Discover the healing power of unrefined shea butter, handcrafted with care to nourish your skin and soul.
                            </p>
                            <NavLink to="/shop" className="inline-flex items-center space-x-3 bg-brand-800 text-white px-8 py-4 text-xs tracking-wider uppercase hover:bg-brand-900 transition-colors">
                                <span>Shop Collection</span>
                                <ArrowRight className="w-4 h-4" />
                            </NavLink>
                        </div>
                    </div>

                    {/* Scene 2: Ancient Wisdom (Right) */}
                    <div className="h-[100vh] w-full flex items-center justify-end px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div
                            ref={textScene2Ref}
                            className="max-w-sm pointer-events-auto text-right opacity-0 bg-surface/80 backdrop-blur-sm p-8 rounded-2xl border border-brand-100/50 shadow-sm"
                        >
                            <h2 className="text-3xl font-serif text-brand-900 mb-4 tracking-tight">Ancient Wisdom</h2>
                            <p className="text-textSec font-light leading-relaxed">
                                Sourced directly from local women collectives in Ghana, preserving centuries of tradition in every jar.
                            </p>
                        </div>
                    </div>

                    {/* Scene 3: 100% Raw (Left) */}
                    <div className="h-[100vh] w-full flex items-center justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div
                            ref={textScene3Ref}
                            className="max-w-sm pointer-events-auto opacity-0 bg-surface/80 backdrop-blur-sm p-8 rounded-2xl border border-brand-100/50 shadow-sm"
                        >
                            <h2 className="text-3xl font-serif text-brand-900 mb-4 tracking-tight">100% Raw</h2>
                            <p className="text-textSec font-light leading-relaxed">
                                No harsh chemicals, no bleaching. Just the raw, vitamin-rich ivory texture that nature intended for your radiance.
                            </p>
                        </div>
                    </div>

                    {/* Scene 4: Final Ritual (Right) */}
                    <div className="h-[100vh] w-full flex items-center justify-end px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div
                            ref={textScene4Ref}
                            className="max-w-sm pointer-events-auto text-right opacity-0 bg-brand-800 text-brand-50 p-8 rounded-2xl shadow-xl"
                        >
                            <h2 className="text-2xl font-serif mb-4">Deep Restoration</h2>
                            <p className="opacity-90 font-light leading-relaxed mb-6 italic">
                                "A soulful simplicity that heals from within."
                            </p>
                            <span className="font-serif italic text-lg opacity-90 border-t border-brand-700 pt-4 block">100% Pure Origin</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="snap-start snap-always shrink-0 min-h-[calc(100vh-80px)] flex items-center bg-surface px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="aspect-[4/5] md:aspect-auto md:h-[70vh] bg-brand-100 flex items-center justify-center mb-10 md:mb-0 relative overflow-hidden"
                    >
                        <span className="text-brand-400 font-serif italic text-xl z-10">Origin Story</span>
                        {/* Darken overlay */}
                        <div className="absolute inset-0 bg-brand-900/5 transition-opacity" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={staggerContainer}
                        className="flex flex-col justify-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-sm font-sans tracking-widest text-brand-600 uppercase mb-4">Our Origin</motion.h2>
                        <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-brand-900 mb-8">Rooted in Tradition.</motion.h3>
                        <motion.p variants={fadeUp} className="text-textSec text-lg font-light leading-relaxed mb-6">
                            Sourced directly from the nutrient-rich soils of Ghana, our shea butter is hand-harvested and crafted by local women collectives using techniques passed down through generations.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-textSec text-lg font-light leading-relaxed mb-10">
                            We preserve the soulful simplicity of their work. No harsh chemicals, no artificial scents. Just the raw, earthy goodness that nature intended.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <NavLink to="/about" className="text-brand-800 font-medium uppercase tracking-widest text-sm border-b border-brand-800 pb-1 self-start hover:text-brand-600 hover:border-brand-600 transition-colors">
                                Read Our Story
                            </NavLink>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Product Highlight */}
            <section className="snap-start snap-always shrink-0 min-h-[calc(100vh-80px)] flex items-center bg-brand-900 px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 text-brand-50 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="lg:w-1/2"
                    >
                        <motion.h2 variants={fadeUp} className="text-sm font-sans tracking-widest text-brand-300 uppercase mb-4">The Essential</motion.h2>
                        <motion.h3 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-8 text-white">Raw Ivory Shea</motion.h3>
                        <motion.div variants={fadeUp} className="mb-10 text-brand-100 font-light text-lg leading-relaxed max-w-md">
                            The purest form of hydration. Our signature raw butter melts on contact, delivering deep, lasting moisture and essential vitamins A and E.
                        </motion.div>
                        <motion.ul variants={staggerContainer} className="space-y-6 mb-12">
                            <motion.li variants={fadeUp} className="flex items-start">
                                <Leaf className="w-5 h-5 text-brand-300 mr-4 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-white mb-1">Intense Moisture</h4>
                                    <p className="text-brand-200/80 text-sm">Locks in hydration for up to 48 hours without feeling heavy.</p>
                                </div>
                            </motion.li>
                            <motion.li variants={fadeUp} className="flex items-start">
                                <Heart className="w-5 h-5 text-brand-300 mr-4 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-white mb-1">Soothes & Heals</h4>
                                    <p className="text-brand-200/80 text-sm">Calms eczema, reduces inflammation, and smooths scars.</p>
                                </div>
                            </motion.li>
                        </motion.ul>
                        <motion.div variants={fadeUp}>
                            <NavLink to="/product/1" className="inline-block border border-brand-300 text-brand-50 px-8 py-4 text-sm tracking-wider uppercase hover:bg-brand-50 hover:text-brand-900 transition-colors">
                                Explore Product
                            </NavLink>
                        </motion.div>
                    </motion.div>

                    <div className="lg:w-1/2 w-full min-h-[50vh] lg:min-h-[70vh] bg-brand-800/50 flex items-center justify-center relative mt-10 lg:mt-0 p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 100, rotate: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                            className="w-64 h-80 bg-brand-100 flex items-center justify-center shadow-2xl hover:rotate-0 transition-transform duration-500 cursor-pointer"
                        >
                            <span className="text-brand-700 font-serif italic mb-4">Product Shot</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Shop Preview */}
            <section className="snap-start snap-always shrink-0 min-h-[calc(100vh-80px)] flex flex-col justify-center bg-surface px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="flex flex-col sm:flex-row justify-between items-end mb-16"
                    >
                        <div>
                            <motion.h2 variants={fadeUp} className="text-4xl font-serif text-brand-900 mb-2">Curated Collection</motion.h2>
                            <motion.p variants={fadeUp} className="text-textSec text-lg font-light">Elevate your daily ritual</motion.p>
                        </div>
                        <motion.div variants={fadeUp}>
                            <NavLink to="/shop" className="hidden sm:block text-brand-700 hover:text-brand-900 text-sm border-b border-brand-200 pb-1 uppercase tracking-wide">
                                View All Products
                            </NavLink>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                    >
                        {[
                            { id: 1, name: 'Raw Ivory Shea Butter', price: '$28.00', img: 'Light Butter' },
                            { id: 2, name: 'Whipped Shea & Lavender', price: '$34.00', img: 'Whipped Texture' },
                            { id: 3, name: 'African Black Soap', price: '$18.00', img: 'Dark Soap Bar' }
                        ].map((product) => (
                            <motion.div variants={fadeUp} key={product.id}>
                                <NavLink to={`/product/${product.id}`} className="group block cursor-pointer">
                                    <div className="aspect-[4/5] bg-brand-100 mb-6 flex items-center justify-center relative overflow-hidden">
                                        {/* Hover Image scale effect */}
                                        <div className="absolute inset-0 bg-brand-200/20 transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                                        <span className="text-brand-400 font-serif italic text-lg opacity-80 z-10">{product.img}</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-base font-serif text-brand-900 mb-1">{product.name}</h3>
                                        <p className="text-textSec text-sm font-light">{product.price}</p>
                                    </div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-12 text-center sm:hidden">
                        <NavLink to="/shop" className="inline-block border border-brand-800 text-brand-900 px-8 py-3 text-sm tracking-wider uppercase">
                            View All
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Brand Values */}
            <section className="snap-start snap-always shrink-0 min-h-[calc(100vh-80px)] flex items-center bg-brand-50 px-4 sm:px-6 lg:px-8 py-20 border-t border-brand-100">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto w-full text-center"
                >
                    <motion.h2 variants={fadeUp} className="text-sm font-sans tracking-widest text-brand-600 uppercase mb-4">Our Promise</motion.h2>
                    <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-brand-900 mb-20 max-w-2xl mx-auto leading-tight">Beyond Skincare. A Commitment to the Earth & Its People.</motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <motion.div variants={fadeUp} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group cursor-default">
                                <Leaf className="w-8 h-8 transform group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-serif text-brand-900 mb-4">100% Natural</h4>
                            <p className="text-textSec font-light leading-relaxed">
                                Nothing added, nothing taken away. We preserve the organic integrity of the shea nut in every jar.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group cursor-default">
                                <Heart className="w-8 h-8 transform group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-serif text-brand-900 mb-4">Ethically Sourced</h4>
                            <p className="text-textSec font-light leading-relaxed">
                                Fair wages and direct trade. We honor the labor of the women who harvest and craft our butter.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group cursor-default">
                                <Globe className="w-8 h-8 transform group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-serif text-brand-900 mb-4">Community Impact</h4>
                            <p className="text-textSec font-light leading-relaxed">
                                A portion of every sale goes directly back to community development programs in Tamale, Ghana.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
