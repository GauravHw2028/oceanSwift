'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            <motion.div
                style={{ y: y1, opacity, scale }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <span className="uppercase tracking-[0.2em] text-sm text-primary font-semibold mb-6 block">
                        The New Standard
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 relative">
                        <span className="block text-white">NAVIGATING</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-light">
                            THE FUTURE
                        </span>
                        <span className="block text-white text-4xl md:text-6xl lg:text-7xl mt-2 font-bold opacity-80">
                            OF GLOBAL LOGISTICS.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                    className="text-lg md:text-xl text-silver max-w-2xl font-light leading-relaxed mb-12"
                >
                    Intelligent freight solutions powered by precision, speed, and a commitment to seamless global connectivity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold tracking-wide hover:bg-white hover:text-navy transition-all duration-500 shadow-[0_0_30px_rgba(0,35,102,0.5)]">
                        Track Shipment
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold tracking-wide hover:bg-white/10 transition-all duration-500 backdrop-blur-sm">
                        Get a Quote
                    </button>
                </motion.div>
            </motion.div>

            {/* Decorative foreground elements that parallax upwards */}
            <motion.div style={{ y: y2 }} className="absolute bottom-10 right-10 z-20 mix-blend-overlay hidden lg:block">
                <div className="text-[10rem] font-black text-white/5 select-none font-mono">
                    01
                </div>
            </motion.div>
        </section>
    );
}
