import React, { useRef, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';

const MainLayout = () => {
    const scrollRef = useRef(null);
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return (
        <div
            ref={scrollRef}
            className="relative h-screen overflow-y-auto overflow-x-hidden bg-surface scroll-smooth flex flex-col w-full"
        >
            {/* The Navbar needs negative margin to stick to top, but because the container handles scroll we must style differently */}
            <div className="absolute top-0 w-full z-50">
                <Navbar onOpenCart={() => setIsCartOpen(true)} />
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
