'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                OCEAN SWIFT<span className="text-primary">.</span>
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-silver">
                <Link href="#services" className="hover:text-white transition-colors duration-300">SERVICES</Link>
                <Link href="#about" className="hover:text-white transition-colors duration-300">ABOUT</Link>
                <Link href="#pricing" className="hover:text-white transition-colors duration-300">PRICING</Link>
            </div>

            <button className="bg-white text-navy px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300">
                GET QUOTE
            </button>
        </motion.nav>
    );
}
