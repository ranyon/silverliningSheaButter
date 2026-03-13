import React, { useRef, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';

const MainLayout = () => {
    const scrollRef = useRef(null);
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setIsScrolled(scrollRef.current.scrollTop > 20);
            }
        };

        const currentScrollRef = scrollRef.current;
        if (currentScrollRef) {
            currentScrollRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentScrollRef) {
                currentScrollRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, 0);
            setIsScrolled(false);
        }
    }, [location.pathname]);

    return (
        <div
            ref={scrollRef}
            className="relative h-screen overflow-y-auto overflow-x-hidden bg-surface flex flex-col w-full"
        >
            {/* The Navbar needs negative margin to stick to top, but because the container handles scroll we must style differently */}
            <div className="absolute top-0 w-full z-50">
                <Navbar isScrolled={isScrolled} onOpenCart={() => setIsCartOpen(true)} />
            </div>

            <main className="flex-grow flex flex-col break-words">
                <Outlet context={{ scrollContainerRef: scrollRef }} />
            </main>
            <div className="shrink-0">
                <Footer />
            </div>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
};

export default MainLayout;
