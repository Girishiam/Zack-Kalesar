import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center bg-secondary relative overflow-hidden">

            <div className="w-full h-full absolute inset-0 grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side - Form & Info */}
                <div className="relative z-10 flex items-center justify-center p-8 lg:p-24 bg-gradient-to-r from-secondary to-secondary/95">
                    <div className="max-w-xl w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-6xl md:text-8xl font-impact uppercase text-white mb-8">
                                Get In <span className="text-primary">Touch</span>
                            </h2>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-center gap-6">
                                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <a href="mailto:contact@zackkaseler.com" className="text-xl text-white hover:text-primary transition-colors">
                                        contact@zackkaseler.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-primary">
                                        <Phone size={20} />
                                    </div>
                                    <a href="tel:+1234567890" className="text-xl text-white hover:text-primary transition-colors">
                                        (555) 123-4567
                                    </a>
                                </div>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">First Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"></textarea>
                                </div>

                                <button className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="hidden lg:block relative h-full">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary z-10" />
                    <img
                        src="/Zacks_Football/Copy of DSC_7938.JPG"
                        alt="Zack Kaseler Portrait"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
