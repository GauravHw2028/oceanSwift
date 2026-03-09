'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Anchor, Globe2, Container, Box } from 'lucide-react';

const services = [
    {
        title: 'Ocean Freight',
        description: 'FCL & LCL solutions across major global trade lanes.',
        icon: Anchor,
        image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Air Express',
        description: 'Time-sensitive logistics for high-priority shipments globally.',
        icon: Globe2,
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop'
    },
    {
        title: 'Strategic Warehousing',
        description: 'Smart storage solutions with real-time inventory management networks.',
        icon: Container,
        image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop'
    },
    {
        title: 'Custom Brokerage',
        description: 'Navigating the complexity of international trade laws seamlessly.',
        icon: Box,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="relative py-32 bg-navy min-h-screen flex items-center overflow-hidden">
            
            {/* HOVER IMAGE REVEALS */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence mode="wait">
                    {hoveredIndex !== null && (
                        <motion.img
                            key={hoveredIndex}
                            src={services[hoveredIndex].image}
                            alt={services[hoveredIndex].title}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 0.3, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="absolute inset-0 w-full h-full object-cover contrast-110 mix-blend-screen opacity-50"
                        />
                    )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-navy/60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-xs font-mono tracking-[0.4em] text-white/50 uppercase mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-white/30"></span>
                            Capabilities
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                            Beyond<br/>
                            <span className="text-white/30">Borders.</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Link href="/services" className="inline-flex items-center gap-4 group">
                            <span className="text-xs font-mono tracking-[0.2em] text-white/70 uppercase group-hover:text-white transition-colors duration-300">
                                View Capabilities
                            </span>
                            <span className="w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-white transition-all duration-500"></span>
                        </Link>
                    </motion.div>
                </div>

                <div className="border-t border-white/10 group/list">
                    {services.map((s, idx) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative border-b border-white/10 group/item cursor-pointer transition-colors duration-500 hover:bg-white/5"
                        >
                            <Link href="/services" className="block w-full py-12 px-4 md:px-8">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                                        <span className="text-sm font-mono text-white/30 pb-1">
                                            0{idx + 1}
                                        </span>
                                        <h4 className="text-3xl md:text-5xl font-black text-white/70 uppercase tracking-tighter group-hover/item:text-white transition-colors duration-500">
                                            {s.title}
                                        </h4>
                                    </div>
                                    <div className="flex items-center justify-between w-full md:w-1/3">
                                        <p className="text-sm font-light text-white/40 leading-relaxed max-w-xs group-hover/item:text-white/80 transition-colors duration-500">
                                            {s.description}
                                        </p>
                                        <s.icon className="w-6 h-6 text-white/20 group-hover/item:text-white transition-all duration-500 transform group-hover/item:rotate-12" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
