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
        const images = [];
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Prefix number with 00 to match %03d (e.g., 001, 012, 126)
            const frameNum = i.toString().padStart(3, '0');
            img.src = `/src/assets/frames_nobg/frame_${frameNum}.webp`;
            images.push(img);
        }
        imagesRef.current = images;

        // Draw first frame when image 1 loads
        images[0].onload = () => {
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                ctx.drawImage(images[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        };
    }, [frameCount]);

    useGSAP(() => {
        if (!canvasRef.current || !imagesRef.current.length || !heroRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        const playhead = { frame: 0 };

        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5, // 0.5 second smoothing applied to the scrub
            scroller: scrollContainerRef?.current || window,
            animation: gsap.to(playhead, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                onUpdate: () => {
                    const idx = Math.round(playhead.frame);
                    if (imagesRef.current[idx] && imagesRef.current[idx].complete) {
                        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                        ctx.drawImage(imagesRef.current[idx], 0, 0, canvasRef.current.width, canvasRef.current.height);
                    }
                }
            })
        });

        // Refresh ScrollTrigger when images load to ensure proper calculations
        ScrollTrigger.refresh();

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
