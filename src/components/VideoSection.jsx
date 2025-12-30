import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <section id="visuals" className="py-24 relative overflow-hidden flex justify-center items-center bg-black h-screen">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Zacks_Football/VASKOVISUALS_ChagrinJefferson_08222025-157.jpg"
                    alt="Stadium Ambience"
                    className="w-full h-full object-cover opacity-30 select-none scale-110 blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                <div className="mb-12 text-center">
                    <h2 className="text-6xl md:text-8xl font-impact uppercase text-white mb-4 drop-shadow-2xl">
                        Film<span className="text-primary">.</span>
                    </h2>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto drop-shadow-md">
                        Watch the highlights. Every snap, every block, every domination.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-black relative group"
                >
                    {/* Placeholder for Video Link - Replacing with a generic embed or placeholder */}
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Idj6bloTxO0"
                        title="Highlight Reel"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full object-cover"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
