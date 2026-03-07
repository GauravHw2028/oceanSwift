'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-navy border-t border-white/5 py-12 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-black text-white tracking-tighter">
                        OCEAN SWIFT<span className="text-primary">.</span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-silver/60">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Careers</a>
                    </div>

                    <div className="text-silver/40 text-sm">
                        © {new Date().getFullYear()} Ocean Swift Logistics. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Decorative large background text */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.03 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white whitespace-nowrap select-none pointer-events-none tracking-tighter"
            >
                GLOBAL LOGISTICS
            </motion.div>
        </footer>
    );
}
