'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        weight: '',
        destination: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;
        
        setStatus('submitting');
        
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setStatus('success');
        
        // Reset form after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', company: '', email: '', weight: '', destination: '' });
        }, 5000);
    };

    return (
        <section id="contact" className="relative py-32 bg-navy border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-sm font-mono tracking-[0.4em] text-white/50 uppercase mb-6 flex items-center gap-4">
                                <span className="w-12 h-px bg-white/30"></span>
                                Initiation
                            </h2>
                            <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85] uppercase">
                                Ready to <br />
                                <span className="text-white/30">Move.</span>
                            </h3>
                            <p className="text-white/50 font-light text-xl mb-12 max-w-md">
                                Speak with a logistics architect to build an unshakeable supply chain. We handle the complexity. You scale.
                            </p>
                        </div>

                        <div className="space-y-4 text-white/50 font-mono text-sm mt-12 md:mt-0">
                            <p className="tracking-[0.2em] uppercase text-xs">Global Headquarters</p>
                            <p className="text-white text-lg">Dubai, UAE</p>
                            <a href="mailto:info@oceanswift.com" className="text-white hover:text-white/50 transition-colors duration-300 inline-block mt-4 text-lg">
                                info@oceanswift.com
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1 }}
                        className="flex items-center relative"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full flex flex-col items-center justify-center text-center p-12 py-24 border border-white/10 bg-white/5"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-white mb-6" />
                                    <h4 className="text-2xl font-black uppercase tracking-widest mb-4">Architecture Requested</h4>
                                    <p className="text-white/60 font-light">
                                        Your logistics requirements have been received. An architect will contact you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                        <div className="space-y-4 relative group">
                                            <label className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Name *</label>
                                            <input 
                                                required
                                                type="text" 
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 text-lg" 
                                                placeholder="John Doe" 
                                            />
                                        </div>
                                        <div className="space-y-4 relative group">
                                            <label className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Company</label>
                                            <input 
                                                type="text" 
                                                value={formData.company}
                                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 text-lg" 
                                                placeholder="Acme Corp" 
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4 relative group mb-12">
                                        <label className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Email *</label>
                                        <input 
                                            required
                                            type="email" 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 text-lg" 
                                            placeholder="john@acme.com" 
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                                        <div className="space-y-4 relative group">
                                            <label className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Est. Weight</label>
                                            <input 
                                                type="text" 
                                                value={formData.weight}
                                                onChange={(e) => setFormData({...formData, weight: e.target.value})}
                                                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 text-lg" 
                                                placeholder="e.g. 15,000 kg" 
                                            />
                                        </div>
                                        <div className="space-y-4 relative group">
                                            <label className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Destination</label>
                                            <input 
                                                type="text" 
                                                value={formData.destination}
                                                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                                                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 text-lg" 
                                                placeholder="Rotterdam, NL" 
                                            />
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={status === 'submitting'}
                                        className="group flex items-center gap-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="bg-white text-black text-xs font-mono uppercase tracking-[0.2em] py-4 px-8 group-hover:bg-transparent group-hover:text-white group-hover:border-white border border-transparent transition-all duration-300">
                                            {status === 'submitting' ? 'Transmitting' : 'Initialize'}
                                        </span>
                                        {status === 'submitting' ? (
                                            <Loader2 className="w-6 h-6 text-white animate-spin" />
                                        ) : (
                                            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-4 transition-transform duration-500" />
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
