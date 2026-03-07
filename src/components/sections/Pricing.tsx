'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: 'Standard',
        desc: 'Reliable port-to-port shipping for standard cargo.',
        price: 'Quote Based',
        features: ['Port-to-Port Delivery', 'Basic Tracking', 'Standard Handling', '24/7 Support Portal'],
        featured: false,
    },
    {
        name: 'Business',
        desc: 'Priority handling, insurance included, and dedicated management.',
        price: 'Volume Tiered',
        features: ['Priority Handling', 'Full Cargo Insurance', 'Dedicated Account Manager', 'Real-time GPS Tracking', 'Customs Clearance Support'],
        featured: true,
    },
    {
        name: 'Enterprise',
        desc: 'Fully integrated supply chain management with White Glove tracking.',
        price: 'Custom SLA',
        features: ['End-to-End Supply Chain', 'White Glove Satellite Tracking', 'Dedicated Logistics Team', 'Priority Air Express', 'Strategic Warehousing Access', 'Zero-Downtime Guarantee'],
        featured: false,
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-32 bg-navy border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        ABSOLUTE <span className="text-primary-light">CERTAINTY.</span>
                    </h2>
                    <p className="text-silver/70 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        We don't sell containers. We sell predictability. Choose the tier that matches your operational tempo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 50, rotateX: 20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: i * 0.2, type: 'spring', bounce: 0.4 }}
                            className={`relative rounded-3xl p-10 ${tier.featured
                                    ? 'bg-gradient-to-b from-primary/80 to-navy-light border border-primary text-white shadow-[0_0_50px_rgba(0,35,102,0.4)] md:-translate-y-8 z-10'
                                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors'
                                } backdrop-blur-md overflow-hidden`}
                            style={{ perspective: 1000 }}
                        >
                            {tier.featured && (
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="bg-white text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-black tracking-wide mb-2">{tier.name}</h3>
                            <p className={`text-sm mb-6 h-12 ${tier.featured ? 'text-white/80' : 'text-silver/60'}`}>
                                {tier.desc}
                            </p>
                            <div className="mb-8">
                                <span className="text-3xl font-bold font-mono tracking-tighter">{tier.price}</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map(f => (
                                    <li key={f} className="flex items-center gap-3 text-sm font-medium">
                                        <Check className={`w-5 h-5 ${tier.featured ? 'text-white' : 'text-primary-light'}`} />
                                        <span className={tier.featured ? 'text-white/90' : 'text-silver/80'}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold tracking-wider transition-all duration-300 ${tier.featured
                                    ? 'bg-white text-navy hover:bg-silver hover:scale-[1.02]'
                                    : 'bg-white/10 hover:bg-white border text-white border-white/20 hover:text-navy'
                                }`}>
                                SELECT TIER
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
