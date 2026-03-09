'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function PricingPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityTitle = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="bg-navy min-h-screen text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* HERO SECTION */}
            <section ref={heroRef} className="relative pt-48 pb-32 overflow-hidden bg-navy">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div style={{ y: yTitle, opacity: opacityTitle }}>
                        <h1 className="text-sm font-mono tracking-[0.4em] text-white/50 uppercase mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-white/30"></span>
                            Assessments
                        </h1>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                            Absolute<br />
                            <span className="text-white/30">Certainty.</span>
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* EXPANDED PRICING MATRIX */}
            <section className="pb-32 relative z-20 bg-navy">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        <div className="lg:col-span-4 flex flex-col justify-between">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">The Architecture of Trust</h3>
                                <p className="text-white/50 font-light leading-relaxed mb-12">
                                    We do not sell containers or weight limits. We sell temporal predictability. Choose the operational magnitude that aligns with your infrastructural exactitude.
                                </p>
                            </motion.div>

                            <div className="relative w-full h-64 rounded-sm overflow-hidden">
                                <motion.img 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.8 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                                    alt="Industrial architecture"
                                    className="absolute inset-0 w-full h-full object-cover contrast-110 opacity-70"
                                />
                                <div className="absolute inset-0 bg-navy/40 mix-blend-overlay z-10" />
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="border border-white/10">
                                
                                <PricingRow 
                                    tier="Standard"
                                    scope="Port-to-Port / Low Variance / General Logistics"
                                    model="Quote Based"
                                    delay={0.1}
                                />
                                <PricingRow 
                                    tier="Business"
                                    scope="Guaranteed Hand-off / Active Management / High Priority"
                                    model="Volume Tiered"
                                    delay={0.2}
                                />
                                <PricingRow 
                                    tier="Enterprise"
                                    scope="Total Chain Integration / White Glove / Zero Downtime"
                                    model="Custom SLA"
                                    delay={0.3}
                                />
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FINAL CTA ENCOURAGEMENT */}
            <section className="py-32 border-t border-white/10 bg-navy text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Execute Operation</h2>
                    <p className="text-xl text-white/50 font-light mb-12">
                        Engage with our core team to construct a logistics paradigm tailored identically to your requirements.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-6 group">
                        <span className="w-16 h-px bg-white/30 group-hover:w-24 group-hover:bg-white transition-all duration-500"></span>
                        <span className="text-sm font-mono tracking-[0.3em] text-white uppercase transition-colors duration-300">
                            Initiate Contact
                        </span>
                        <span className="w-16 h-px bg-white/30 group-hover:w-24 group-hover:bg-white transition-all duration-500"></span>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function PricingRow({ tier, scope, model, delay }: { tier: string, scope: string, model: string, delay: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 border-b border-white/10 last:border-b-0 group hover:bg-white/5 transition-colors duration-300"
        >
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 className="text-2xl font-black tracking-tighter uppercase mb-2">{tier}</h4>
                <div className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase">{model}</div>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <p className="text-sm font-light text-white/60 leading-relaxed border-l border-white/20 pl-6">
                    {scope}
                </p>
            </div>
            <div className="w-full md:w-auto">
                <Link href="/contact" className="text-xs font-mono tracking-[0.1em] text-white/50 hover:text-white uppercase transition-colors border max-w-max border-white/20 hover:border-white px-6 py-3 rounded-none inline-block">
                    Procure
                </Link>
            </div>
        </motion.div>
    );
}
