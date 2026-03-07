'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="relative py-32 bg-navy border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                            READY TO <br />
                            <span className="text-primary-light text-stroke-primary">MOVE?</span>
                        </h2>
                        <p className="text-silver/70 font-light text-lg mb-12 max-w-md">
                            Speak with a logistics architect to build an unshakeable supply chain. We handle the complexity. You scale.
                        </p>

                        <div className="space-y-4 text-silver/50 font-mono text-sm">
                            <p>Global Headquarters</p>
                            <p className="text-white">Dubai, UAE</p>
                            <a href="mailto:info@oceanswift.com" className="text-primary hover:text-white transition-colors duration-300 inline-block mt-4">
                                info@oceanswift.com
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1 }}
                    >
                        <form className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-silver/50 uppercase tracking-widest pl-2">Name</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/5 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-silver/50 uppercase tracking-widest pl-2">Company</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/5 transition-all" placeholder="Acme Corp" />
                                </div>
                            </div>

                            <div className="space-y-2 mb-6">
                                <label className="text-xs font-mono text-silver/50 uppercase tracking-widest pl-2">Email</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/5 transition-all" placeholder="john@acme.com" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-silver/50 uppercase tracking-widest pl-2">Est. Weight</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/5 transition-all" placeholder="e.g. 15,000 kg" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-silver/50 uppercase tracking-widest pl-2">Destination</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/5 transition-all" placeholder="Rotterdam, NL" />
                                </div>
                            </div>

                            <button type="button" className="group w-full bg-primary hover:bg-white hover:text-navy transition-all duration-500 text-white font-bold tracking-wider rounded-xl p-4 flex items-center justify-center gap-4">
                                REQUEST ARCHITECTURE
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
