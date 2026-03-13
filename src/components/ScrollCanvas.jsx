import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollCanvas = ({ frameCount = 126, scrollContainerRef, heroRef }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const promises = [];
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                const frameNum = i.toString().padStart(3, '0');
                img.src = `/assets/frames_nobg/frame_${frameNum}.webp`;

                const promise = new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even on error
                });
                promises.push(promise);
                imagesRef.current.push(img);
            }

            await Promise.all(promises);

            // Draw first frame immediately after all are ready or first is ready
            if (canvasRef.current && imagesRef.current[0]) {
                const ctx = canvasRef.current.getContext('2d');
                ctx.drawImage(imagesRef.current[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
            }

            // Critical for production: Refresh GSAP after assets are confirmed
            ScrollTrigger.refresh();
        };

        loadImages();
    }, [frameCount]);

    useGSAP(() => {
        if (!canvasRef.current || !heroRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        const playhead = { frame: 0 };

        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            scroller: scrollContainerRef?.current || window,
            animation: gsap.to(playhead, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                onUpdate: () => {
                    const idx = Math.round(playhead.frame);
                    const img = imagesRef.current[idx];
                    if (img) {
                        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
                    }
                }
            })
        });

    }, { dependencies: [heroRef, scrollContainerRef], revertOnUpdate: true });

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
