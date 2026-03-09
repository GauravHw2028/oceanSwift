'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const detailedServices = [
    {
        id: '01',
        title: 'Ocean Freight',
        subtitle: 'The Core Arteries of Trade',
        desc: 'We operate massive FCL & LCL frameworks across every major global trade lane. By securing priority vessel space and utilizing deep predictive analytics, our ocean network behaves less like a shipping lane and more like a synchronized digital pipeline.',
        img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '02',
        title: 'Air Express',
        subtitle: 'Velocity Above All',
        desc: 'When time is an uncompromising constraint, our Air Express logistics engage. We provide tarmac-to-tarmac priority routing for high-value and critical shipments, operating flawlessly within the tightest global timelines.',
        img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop'
    },
    {
        id: '03',
        title: 'Strategic Warehousing',
        subtitle: 'Intelligent Storage Nodes',
        desc: 'Storage is no longer static. Our warehouses are strategically positioned kinetic nodes. Integrated directly with our routing software, they allow for real-time inventory staging, predictive deployment, and instant order fulfillment worldwide.',
        img: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop'
    },
    {
        id: '04',
        title: 'Custom Brokerage',
        subtitle: 'Frictionless Borders',
        desc: 'The greatest logistical delays occur at theoretical borders, not physical ones. Our customs teams utilize preemptive filing systems and maintain deep integration with global regulatory authorities to ensure borders literally do not exist for your cargo.',
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function ServicesPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], [0, 250]);
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
                            The Framework
                        </h1>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                            Operating<br />
                            <span className="text-white/30">Capacity.</span>
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="pb-32 relative z-20 bg-navy">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col gap-32">
                        {detailedServices.map((service, index) => (
                            <ServiceBlock key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function ServiceBlock({ service, index }: { service: any, index: number }) {
    const blockRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: blockRef,
        offset: ['start end', 'end start']
    });

    const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const isEven = index % 2 === 0;

    return (
        <div ref={blockRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
            
            {/* TEXT */}
            <div className={`md:col-span-5 flex flex-col justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-sm font-mono text-white/30">{service.id}</span>
                        <div className="h-px w-full bg-white/10" />
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                        {service.title}
                    </h3>
                    <h4 className="text-sm font-mono tracking-[0.2em] text-white/50 uppercase mb-8">
                        {service.subtitle}
                    </h4>
                    
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                        {service.desc}
                    </p>
                </motion.div>
            </div>

            {/* IMAGE PARALLAX */}
            <div className={`md:col-span-7 h-[500px] md:h-[700px] relative w-full overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-[120%]"
                    style={{ y: yImage }}
                >
                    <img 
                        src={service.img} 
                        alt={service.title}
                        className="w-full h-full object-cover contrast-110 opacity-70"
                    />
                    <div className="absolute inset-0 bg-navy/40 mix-blend-overlay" />
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] mix-blend-multiply" />
                </motion.div>
            </div>

        </div>
    );
}
