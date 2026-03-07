'use client';

import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';
import { Anchor, Container, Box, Globe2 } from 'lucide-react';

const services = [
    {
        title: 'Ocean Freight',
        description: 'FCL & LCL solutions across major global trade lanes.',
        icon: Anchor,
        colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    },
    {
        title: 'Air Express',
        description: 'Time-sensitive logistics for high-priority shipments globally.',
        icon: Globe2,
        colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
        title: 'Strategic Warehousing',
        description: 'Smart storage solutions with real-time inventory management networks.',
        icon: Container,
        colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
        title: 'Custom Brokerage',
        description: 'Navigating the complexity of international trade laws seamlessly.',
        icon: Box,
        colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    }
];

function BentoCard({ service }: { service: typeof services[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            style={{ perspective: 1000 }}
            className={`group relative min-h-[300px] h-full ${service.colSpan}`}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md overflow-hidden cursor-crosshair flex flex-col justify-between"
            >
                <div style={{ transform: 'translateZ(50px)' }} className="relative z-10">
                    <service.icon className="w-10 h-10 text-primary-light mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-primary-light transition-colors duration-500">{service.title}</h3>
                    <p className="text-silver/60 leading-relaxed max-w-sm">{service.description}</p>
                </div>

                <motion.div
                    style={{
                        transform: 'translateZ(-50px)',
                        background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 35, 102, 0.4), transparent 80%)`
                    }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

            </motion.div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative py-32 bg-navy min-h-screen flex items-center">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Core Capabilities</h2>
                    <h3 className="text-5xl font-black text-white tracking-tighter">BEYOND <span className="text-primary-light">BORDERS.</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((s) => (
                        <BentoCard key={s.title} service={s} />
                    ))}
                </div>
            </div>
        </section>
    );
}
