'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const TOTAL_FRAMES = 151;
const BATCH_SIZE = 8;

interface Overlay {
    title: string;
    subtitle: string;
    start: number;
    end: number;
    align: 'left' | 'center' | 'right';
}

const SCROLL_OVERLAYS: Overlay[] = [
    {
        title: 'GLOBAL\nCOVERAGE',
        subtitle: 'Seamless connections across 120+ ports worldwide.',
        start: 0.05,
        end: 0.25,
        align: 'left',
    },
    {
        title: 'REAL-TIME\nTRACKING',
        subtitle: 'Unprecedented visibility for every container, every mile.',
        start: 0.30,
        end: 0.50,
        align: 'right',
    },
    {
        title: 'SWIFT\nDELIVERY',
        subtitle: 'Where speed meets uncompromising reliability.',
        start: 0.55,
        end: 0.75,
        align: 'left',
    },
    {
        title: 'OCEAN\nSWIFT',
        subtitle: 'The new standard in intelligent freight solutions.',
        start: 0.80,
        end: 0.98,
        align: 'center',
    },
];

function getFramePath(index: number): string {
    const padded = String(index + 1).padStart(4, '0');
    return `/frames/frame-${padded}.webp`;
}

export default function ScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const renderedFrameRef = useRef(-1);
    const currentFrameRef = useRef(0);
    const animFrameRef = useRef<number>(0);

    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeOverlay, setActiveOverlay] = useState(-1);
    const [scrollPct, setScrollPct] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const canvasOpacity = useTransform(scrollYProgress, [0, 0.015], [0, 1]);
    const vignetteOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 0.6, 0.85]);

    // --- Preload frames in batches ---
    useEffect(() => {
        const frames: HTMLImageElement[] = [];
        let loadedCount = 0;

        async function loadBatch(startIndex: number) {
            const end = Math.min(startIndex + BATCH_SIZE, TOTAL_FRAMES);
            const promises: Promise<void>[] = [];

            for (let i = startIndex; i < end; i++) {
                promises.push(
                    new Promise<void>((resolve) => {
                        const img = new Image();
                        img.src = getFramePath(i);
                        img.onload = () => {
                            frames[i] = img;
                            loadedCount++;
                            setProgress(loadedCount / TOTAL_FRAMES);
                            resolve();
                        };
                        img.onerror = () => {
                            loadedCount++;
                            setProgress(loadedCount / TOTAL_FRAMES);
                            resolve();
                        };
                    })
                );
            }

            await Promise.all(promises);
            if (end < TOTAL_FRAMES) {
                await loadBatch(end);
            }
        }

        loadBatch(0).then(() => {
            framesRef.current = frames;
            setLoaded(true);
        });
    }, []);

    // --- Render loop ---
    const renderFrame = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const frameIndex = currentFrameRef.current;
        if (frameIndex !== renderedFrameRef.current) {
            const img = framesRef.current[frameIndex];
            if (img) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const imgAspect = img.naturalWidth / img.naturalHeight;
                const canvasAspect = canvas.width / canvas.height;
                let drawW: number, drawH: number, drawX: number, drawY: number;

                if (imgAspect > canvasAspect) {
                    drawH = canvas.height;
                    drawW = drawH * imgAspect;
                    drawX = (canvas.width - drawW) / 2;
                    drawY = 0;
                } else {
                    drawW = canvas.width;
                    drawH = drawW / imgAspect;
                    drawX = 0;
                    drawY = (canvas.height - drawH) / 2;
                }

                ctx.drawImage(img, drawX, drawY, drawW, drawH);
                renderedFrameRef.current = frameIndex;
            }
        }

        animFrameRef.current = requestAnimationFrame(renderFrame);
    }, []);

    // --- Start render loop when loaded ---
    useEffect(() => {
        if (!loaded) return;

        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
        }

        animFrameRef.current = requestAnimationFrame(renderFrame);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, [loaded, renderFrame]);

    // --- Resize handler ---
    useEffect(() => {
        function handleResize() {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth * window.devicePixelRatio;
                canvas.height = window.innerHeight * window.devicePixelRatio;
                renderedFrameRef.current = -1;
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- Scroll → frame index mapping ---
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const frameIndex = Math.min(
            Math.floor(v * (TOTAL_FRAMES - 1)),
            TOTAL_FRAMES - 1
        );
        currentFrameRef.current = Math.max(0, frameIndex);
        setScrollPct(v);

        let active = -1;
        for (let i = 0; i < SCROLL_OVERLAYS.length; i++) {
            if (v >= SCROLL_OVERLAYS[i].start && v <= SCROLL_OVERLAYS[i].end) {
                active = i;
                break;
            }
        }
        setActiveOverlay(active);
    });

    const currentOverlay = activeOverlay >= 0 ? SCROLL_OVERLAYS[activeOverlay] : null;

    // Framer Motion variants for stagger reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeOut' as const }
        }
    };

    const lineVariants = {
        hidden: { y: '110%', opacity: 0 },
        show: {
            y: '0%',
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' as const }
        }
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 15 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut' as const }
        }
    };

    return (
        <section ref={containerRef} className="sa-container" id="showcase">
            <div className="sa-sticky">
                {/* ── LOADER ── */}
                <AnimatePresence>
                    {!loaded && (
                        <motion.div
                            className="sa-loader"
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="sa-loader-inner">
                                <div className="sa-loader-line" style={{ transform: `scaleX(${progress})` }} />
                                <div className="sa-loader-text">
                                    <span className="sa-loader-pct">{String(Math.round(progress * 100)).padStart(2, '0')}</span>
                                    <span className="sa-loader-sep">/</span>
                                    <span>100</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── CANVAS ── */}
                <motion.canvas
                    ref={canvasRef}
                    className="sa-canvas"
                    style={{ opacity: canvasOpacity, willChange: 'transform' }}
                />

                {/* ── VIGNETTE OVERLAYS ── */}
                <motion.div className="sa-vignette" style={{ opacity: vignetteOpacity }} />

                {/* ── STARK MINIMAL TYPOGRAPHY ── */}
                {loaded && (
                    <div className="sa-overlays">
                        <AnimatePresence mode="wait">
                            {currentOverlay && (
                                <motion.div
                                    key={activeOverlay}
                                    className={`sa-overlay sa-overlay--${currentOverlay.align}`}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    <h2 className="sa-title">
                                        {currentOverlay.title.split('\n').map((line, i) => (
                                            <div key={i} className="sa-title-mask">
                                                <motion.span variants={lineVariants} className="sa-title-line">
                                                    {line}
                                                </motion.span>
                                            </div>
                                        ))}
                                    </h2>
                                    <motion.p variants={subtitleVariants} className="sa-subtitle">
                                        {currentOverlay.subtitle}
                                    </motion.p>
                                    
                                    {activeOverlay === SCROLL_OVERLAYS.length - 1 && (
                                        <motion.div variants={subtitleVariants} className="mt-12">
                                            <p className="sa-label">Discover Services</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* ── MINIMAL INDICATOR ── */}
                {loaded && scrollPct < 0.05 && (
                    <motion.div
                        className="sa-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="sa-indicator-line" />
                        <span className="sa-indicator-text">SCROLL</span>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
