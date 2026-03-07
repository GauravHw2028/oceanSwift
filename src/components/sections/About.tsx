'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const coreValues = [
        { title: 'Precision', desc: 'Every millimeter and millisecond accounted for.' },
        { title: 'Security', desc: 'Royal-standard protection for your high-value assets.' },
        { title: 'Innovation', desc: 'Utilizing "antigravity" thinking to solve complex supply chain hurdles.' }
    ];

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative min-h-screen py-32 flex items-center bg-navy"
        >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-navy/0" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <motion.div style={{ y, opacity }} className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                            RELIABILITY<br />
                            <span className="text-primary-light">IN MOTION.</span>
                        </h2>
                        <p className="text-xl text-silver/80 font-light leading-relaxed mb-12">
                            Ocean Swift was founded on a single principle: that global trade should be effortless. We combine decades of logistics expertise with next-generation tracking technology to ensure your cargo—no matter the size or destination—arrives with absolute certainty.
                        </p>
                    </motion.div>

                    <div className="relative z-10 flex flex-col gap-6">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.8, delay: i * 0.2, ease: 'easeOut' }}
                                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/10 transition-colors duration-500"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-px w-8 bg-primary-light" />
                                    <h3 className="text-xl font-bold text-white tracking-wide">{value.title}</h3>
                                </div>
                                <p className="text-silver/70 leading-relaxed pl-12">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
