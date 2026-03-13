import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent, useSpring } from 'framer-motion';

const ScrollVideo = ({ src, className, scrollContainerRef, targetRef, offset = ["start start", "end end"] }) => {
    const defaultContainerRef = useRef(null);
    const videoRef = useRef(null);
    const [duration, setDuration] = useState(0);

    // useScroll from framer motion tracks the progress of the container 
    // entering and leaving the viewport.
    // By making the parent container very tall (e.g. h-[300vh]), we get a long scroll window.
    const { scrollYProgress } = useScroll({
        target: targetRef || defaultContainerRef,
        container: scrollContainerRef,
        offset: offset
    });

    // Apply a spring physics model to the scroll progress
    // This interpolates the chunky mouse wheel scroll into a buttery smooth 60fps timeline interpolation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Load video metadata to get the total duration
        if (videoRef.current) {
            if (videoRef.current.readyState >= 1) {
                setDuration(videoRef.current.duration);
            } else {
                const handleLoadedMetadata = () => {
                    setDuration(videoRef.current.duration);
                };
                videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
                return () => {
                    if (videoRef.current) {
                        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
                    }
                };
            }
        }
    }, [src]);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (videoRef.current && isFinite(duration) && duration > 0) {
            // Scrub the video based on the spring-smoothed scroll progress
            const targetTime = latest * (duration - 0.1);

            // Request animation frame for hardware-accelerated syncing
            requestAnimationFrame(() => {
                if (videoRef.current) {
                    videoRef.current.currentTime = targetTime;
                }
            });
        }
    });

    return (
        // By keeping just the sticky wrapper logic but no fixed heights, 
        // the parent orchestrates the scroll depth 
        <div ref={defaultContainerRef} className={`relative w-full h-full ${className || ''}`}>
            <video
                ref={videoRef}
                src={src}
                preload="auto"
                muted
                playsInline
                className="w-full h-full object-contain"
                style={{ pointerEvents: 'none' }} // Prevent user interaction 
            />
        </div>
    );
};

export default ScrollVideo;
