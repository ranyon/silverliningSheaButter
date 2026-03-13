import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollCanvas = ({ frameCount = 126, scrollContainerRef, heroRef }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const stRef = useRef(null);

    // Preload images
    useEffect(() => {
        let isCancelled = false;

        const loadImages = async () => {
            console.log(`[ScrollCanvas] Starting preload of ${frameCount} frames...`);
            const loadedImages = [];
            const promises = [];

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                const frameNum = i.toString().padStart(3, '0');
                img.src = `/assets/frames_nobg/frame_${frameNum}.webp`;

                const promise = new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = () => {
                        console.error(`[ScrollCanvas] Failed to load frame ${frameNum}`);
                        resolve();
                    };
                });
                promises.push(promise);
                loadedImages.push(img);
            }

            await Promise.all(promises);

            if (isCancelled) return;

            imagesRef.current = loadedImages;
            console.log(`[ScrollCanvas] Successfully preloaded ${imagesRef.current.length} frames.`);

            // Draw first frame
            if (canvasRef.current && imagesRef.current[0]) {
                const ctx = canvasRef.current.getContext('2d');
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(imagesRef.current[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
            }

            // Critical for production: Refresh GSAP after assets are confirmed
            ScrollTrigger.refresh();
        };

        loadImages();

        return () => { isCancelled = true; };
    }, [frameCount]);

    useGSAP(() => {
        // We wait for the scroller ref to be populated
        const scroller = scrollContainerRef?.current;
        if (!canvasRef.current || !heroRef.current || !scroller) {
            console.warn('[ScrollCanvas] Missing required refs for ScrollTrigger:', {
                canvas: !!canvasRef.current,
                hero: !!heroRef.current,
                scroller: !!scroller
            });
            return;
        }

        console.log('[ScrollCanvas] Initializing ScrollTrigger with scroller:', scroller.tagName, scroller.className);

        const ctx = canvasRef.current.getContext('2d');
        const playhead = { frame: 0 };

        stRef.current = ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            scroller: scroller,
            animation: gsap.to(playhead, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                onUpdate: () => {
                    const idx = Math.round(playhead.frame);
                    const img = imagesRef.current[idx];
                    if (img && canvasRef.current) {
                        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
                    }
                }
            })
        });

        return () => {
            if (stRef.current) stRef.current.kill();
        };

    }, { dependencies: [heroRef, scrollContainerRef?.current], revertOnUpdate: true });

    return (
        <canvas
            ref={canvasRef}
            width={1080}
            height={1080}
            className="w-full h-full object-contain"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default ScrollCanvas;
