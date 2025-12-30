import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const marqueeText = "TOUCHDOWN • INTERCEPTION • TACKLE • VICTORY • GRIT • PASSION • DOMINANCE • SPEED • POWER • ";

    return (
        <div className="relative py-8 bg-primary -rotate-1 overflow-hidden z-30 border-y-4 border-black">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-secondary/50 z-10 pointer-events-none" />

            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity
                    }}
                    className="flex whitespace-nowrap"
                >
                    <span className="text-6xl md:text-8xl font-impact text-black uppercase tracking-tighter mr-8">
                        {marqueeText}
                    </span>
                    <span className="text-6xl md:text-8xl font-impact text-black uppercase tracking-tighter mr-8">
                        {marqueeText}
                    </span>
                    <span className="text-6xl md:text-8xl font-impact text-black uppercase tracking-tighter mr-8">
                        {marqueeText}
                    </span>
                    <span className="text-6xl md:text-8xl font-impact text-black uppercase tracking-tighter mr-8">
                        {marqueeText}
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
