'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const tiers = [
    {
        name: 'Standard',
        desc: 'Reliable port-to-port shipping for standard cargo volumes.',
        price: 'Quote Based',
        features: ['Port-to-Port Delivery', 'Basic Tracking', 'Standard Handling', '24/7 Support Portal'],
    },
    {
        name: 'Business',
        desc: 'Priority handling, insurance included, and dedicated management.',
        price: 'Volume Tiered',
        features: ['Priority Handling', 'Full Cargo Insurance', 'Dedicated Account Manager', 'Real-time GPS Tracking', 'Customs Clearance Support'],
    },
    {
        name: 'Enterprise',
        desc: 'Fully integrated supply chain management with White Glove tracking.',
        price: 'Custom SLA',
        features: ['End-to-End Supply Chain', 'White Glove Satellite Tracking', 'Dedicated Logistics Team', 'Priority Air Express', 'Strategic Access', 'Zero-Downtime Guarantee'],
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-32 bg-navy overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-xs font-mono tracking-[0.4em] text-white/50 uppercase mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-white/30"></span>
                            Assessments
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                            Absolute<br/>
                            <span className="text-white/30">Certainty.</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Link href="/pricing" className="inline-flex items-center gap-4 group">
                            <span className="text-xs font-mono tracking-[0.2em] text-white/70 uppercase group-hover:text-white transition-colors duration-300">
                                View Tiers
                            </span>
                            <span className="w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-white transition-all duration-500"></span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, delay: i * 0.15 }}
                            className="relative p-8 md:p-12 border-b border-r border-white/10 group hover:bg-white/5 transition-colors duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 text-white">
                                    {tier.name}
                                </h3>
                                <div className="h-px w-12 bg-white/20 mb-6 group-hover:w-full transition-all duration-700 ease-out" />
                                <p className="text-sm font-light text-white/50 leading-relaxed mb-12 min-h-[60px]">
                                    {tier.desc}
                                </p>
                            </div>

                            <div>
                                <div className="mb-12">
                                    <span className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase block mb-2">Structure</span>
                                    <span className="text-xl font-medium tracking-tight text-white">{tier.price}</span>
                                </div>
                                <ul className="space-y-3 mb-16">
                                    {tier.features.map(f => (
                                        <li key={f} className="flex items-start gap-3">
                                            <span className="text-white/30 mt-1 text-xs">■</span>
                                            <span className="text-sm font-light text-white/70">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="inline-flex items-center gap-4 group/procure cursor-pointer">
                                    <span className="text-xs font-mono tracking-[0.2em] text-white/50 uppercase group-hover/procure:text-white transition-colors duration-300">
                                        Procure
                                    </span>
                                    <span className="w-8 h-px bg-white/20 group-hover/procure:w-16 group-hover/procure:bg-white transition-all duration-500"></span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
