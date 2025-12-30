import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 100;
                }
                return prev + 2;
            });
        }, 30);
        return () => clearInterval(timer);
    }, []);

    // Simplified: No internal completion trigger, controlled by parent

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-secondary flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="relative z-10 text-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <img src="/Zacks_Football/logo.png" alt="Logo" className="w-32 h-auto mx-auto drop-shadow-2xl" />
                </motion.div>

                {/* Text Animation */}
                <div className="overflow-hidden mb-8">
                    <motion.h1
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
                        className="font-impact text-6xl md:text-8xl text-white uppercase tracking-tighter"
                    >
                        Zack <span className="text-primary">Kaseler</span>
                    </motion.h1>
                </div>

                {/* Number 56 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    className="mb-12"
                >
                    <span className="font-impact text-8xl text-white/10 select-none">#56</span>
                </motion.div>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                    <motion.div
                        className="h-full bg-primary"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-4">Loading Assets {progress}%</p>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
