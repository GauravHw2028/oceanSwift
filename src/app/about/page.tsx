'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityImg = useTransform(scrollYProgress, [0, 1], [0.6, 0]);

    return (
        <div className="bg-navy min-h-screen text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* HERO SECTION */}
            <section ref={heroRef} className="relative h-[80vh] flex flex-col justify-end pb-24 overflow-hidden">
                <motion.div 
                    style={{ y: yImg, opacity: opacityImg }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                        alt="Massive ship hull"
                        className="w-full h-full object-cover contrast-110 opacity-70"
                    />
                    <div className="absolute inset-0 bg-navy/40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
                </motion.div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h1 className="text-sm font-mono tracking-[0.4em] text-white/50 uppercase mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-white/30"></span>
                            The Origin
                        </h1>
                        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                            Relentless<br />
                            <span className="text-white/30">Forward</span><br />
                            Motion.
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-32 relative z-20 bg-navy">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                        
                        <div className="md:col-span-5 md:col-start-2">
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-2xl md:text-4xl font-light leading-tight text-white/80 mb-12"
                            >
                                Ocean Swift was founded on a singular absolute: that global trade should not be bound by friction.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg text-white/50 leading-relaxed font-light mb-8"
                            >
                                For decades, the logistics industry relied on archaic systems and fragmented networks. We built our foundation differently. We constructed a digital-first, deeply integrated neural network of global transit routes, capable of routing assets with millimeter and millisecond precision.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg text-white/50 leading-relaxed font-light"
                            >
                                Today, we serve the most demanding entities on Earth. When compromise is not an option, the world moves with Ocean Swift.
                            </motion.p>
                        </div>
                        
                        <div className="md:col-span-4 md:col-start-8">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative aspect-[3/4] w-full"
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1505706173167-160fa47c166d?q=80&w=1974&auto=format&fit=crop"
                                    alt="Container Ship Overview"
                                    className="object-cover w-full h-full contrast-110 opacity-70"
                                />
                                <div className="absolute inset-0 bg-navy/40 mix-blend-overlay" />
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] mix-blend-multiply" />
                            </motion.div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
