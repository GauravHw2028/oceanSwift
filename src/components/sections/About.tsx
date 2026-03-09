'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    // Parallax effects
    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

    const coreValues = [
        { title: 'Precision', desc: 'Every millimeter and millisecond accounted for.' },
        { title: 'Security', desc: 'Royal-standard protection for your high-value assets.' },
        { title: 'Innovation', desc: 'Utilizing "antigravity" thinking.' }
    ];

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative min-h-screen py-32 flex items-center bg-navy overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* LEADING TYPOGRAPHY */}
                    <motion.div 
                        style={{ y: yText }} 
                        className="lg:col-span-5 relative z-10 flex flex-col justify-center"
                    >
                        {/* Section Label */}
                        <div className="mb-12">
                            <h3 className="text-xs font-mono tracking-[0.4em] text-white/50 uppercase flex items-center gap-4">
                                <span className="w-12 h-px bg-white/30"></span>
                                The Origin
                            </h3>
                        </div>

                        {/* Title Mask Reveal */}
                        <div className="overflow-hidden mb-8">
                            <motion.h2 
                                initial={{ y: '100%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase"
                            >
                                RELIABILITY
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden mb-12">
                            <motion.h2 
                                initial={{ y: '100%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                                className="text-5xl md:text-7xl font-black text-white/40 leading-[0.85] tracking-tighter uppercase"
                            >
                                IN MOTION.
                            </motion.h2>
                        </div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 max-w-lg"
                        >
                            We combine decades of logistics expertise with next-generation tracking technology to ensure your cargo—no matter the size or destination—arrives with absolute certainty.
                        </motion.p>
                        
                        {/* Minimalist button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Link href="/about" className="inline-flex items-center gap-4 group">
                                <span className="text-xs font-mono tracking-[0.2em] text-white/70 uppercase group-hover:text-white transition-colors duration-300">
                                    Our Story
                                </span>
                                <span className="w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-white transition-all duration-500"></span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* CINEMATIC PARALLAX IMAGE */}
                    <div className="lg:col-span-4 relative h-[600px] w-full mt-16 lg:mt-0">
                        <motion.div 
                            style={{ y: yImage }}
                            className="absolute inset-0 overflow-hidden"
                        >
                            <motion.img 
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                                alt="Ocean Swift Logistics"
                                style={{ scale: imageScale }}
                                className="w-full h-[120%] object-cover object-center contrast-110 opacity-70"
                            />
                            {/* Navy Theme Tint & Inner Vignette */}
                            <div className="absolute inset-0 bg-navy/40 mix-blend-overlay" />
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,1)] mix-blend-multiply" />
                        </motion.div>
                    </div>

                    {/* CORE VALUES LIST */}
                    <div className="lg:col-span-3 flex flex-col justify-center gap-12 mt-16 lg:mt-0 lg:pl-12">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.8, delay: 0.2 + (i * 0.15), ease: 'easeOut' }}
                                className="group"
                            >
                                <h4 className="text-xl font-bold text-white tracking-tight leading-none mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-sm font-light text-white/40 leading-relaxed">
                                    {value.desc}
                                </p>
                                <div className="h-px w-full bg-white/10 mt-6 group-hover:bg-white/40 transition-colors duration-500" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
