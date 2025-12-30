import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

// Preload optimized images
const preloadImages = (urls) => {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

// Using optimized WebP images
const imageSet1 = [
    "/Zacks_Football/player1.webp", "/Zacks_Football/player2.webp", "/Zacks_Football/player3.webp", "/Zacks_Football/player4.webp",
    "/Zacks_Football/player5.webp", "/Zacks_Football/player6.webp", "/Zacks_Football/player7.webp", "/Zacks_Football/player8.webp"
];

const imageSet2 = [
    "/Zacks_Football/player9.webp", "/Zacks_Football/player10.webp", "/Zacks_Football/player11.webp", "/Zacks_Football/player12.webp",
    "/Zacks_Football/player13.webp", "/Zacks_Football/player14.webp", "/Zacks_Football/player15.webp", "/Zacks_Football/player16.webp"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    },
    exit: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.05,
        transition: { duration: 0.8 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

const CollageLayout1 = () => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="grid grid-cols-4 grid-rows-3 gap-2 h-full w-full"
    >
        <motion.div variants={itemVariants} className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-black">
            <img src={imageSet1[0]} alt="#56 Feature" className="w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-in-out group-hover:scale-105 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4">
                <span className="text-primary font-impact text-4xl drop-shadow-lg">#56</span>
            </div>
        </motion.div>

        {imageSet1.slice(1, 7).map((src, i) => (
            <motion.div key={i} variants={itemVariants} className={`rounded-xl overflow-hidden bg-black ${i === 4 ? 'col-span-1' : 'col-span-1'} ${i === 0 ? 'row-span-1' : 'row-span-1'}`}>
                <img src={src} className="w-full h-full object-cover will-change-transform hover:scale-105 transition-transform duration-1000" />
            </motion.div>
        ))}
        {/* Ensure 8th image is used if grid allows or replace one */}
        <motion.div variants={itemVariants} className="col-span-2 row-span-1 rounded-xl overflow-hidden bg-black relative">
            <img src={imageSet1[7]} className="w-full h-full object-cover object-top" />
        </motion.div>
    </motion.div>
);

const CollageLayout2 = () => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="grid grid-cols-4 grid-rows-3 gap-2 h-full w-full"
    >
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-black"><img src={imageSet2[0]} className="w-full h-full object-cover" /></motion.div>
        <motion.div variants={itemVariants} className="col-span-1 row-span-2 rounded-xl overflow-hidden bg-black"><img src={imageSet2[1]} className="w-full h-full object-cover" /></motion.div>

        <motion.div variants={itemVariants} className="col-span-2 row-span-3 relative group overflow-hidden rounded-2xl bg-black">
            <img src={imageSet2[2]} alt="#56 Action" className="w-full h-full object-cover object-center transition-transform duration-[2000ms] ease-in-out group-hover:scale-105 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 right-4 text-right">
                <span className="text-white font-impact text-2xl uppercase drop-shadow-lg">Domination</span>
            </div>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-black"><img src={imageSet2[3]} className="w-full h-full object-cover" /></motion.div>
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-black"><img src={imageSet2[4]} className="w-full h-full object-cover" /></motion.div>
        <motion.div variants={itemVariants} className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-black"><img src={imageSet2[5]} className="w-full h-full object-cover" /></motion.div>
    </motion.div>
);

const Hero = () => {
    const [currentLayout, setCurrentLayout] = useState(0);

    useEffect(() => {
        preloadImages([...imageSet1, ...imageSet2]);
        const timer = setInterval(() => {
            setCurrentLayout((prev) => (prev === 0 ? 1 : 0));
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen w-full bg-secondary overflow-hidden flex items-center pt-24 pb-12 px-6">
            <div className="absolute inset-0 bg-secondary">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                <div className="order-2 lg:order-1 flex flex-col items-start z-20">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Offensive Lineman</span>
                    </motion.div>

                    <h1 className="font-impact text-7xl md:text-9xl uppercase tracking-tighter leading-[0.85] mb-8 text-white">
                        Zack<br />
                        <span className="text-primary">Kaseler</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/60 font-light mb-10 max-w-lg leading-relaxed">
                        Domination in the trenches. <span className="text-primary font-bold">#56</span>.
                        Bringing elite power, discipline, and football IQ to the next level.
                    </p>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/film" className="group relative px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider overflow-hidden rounded-lg inline-flex items-center justify-center">
                            <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]" />
                            <span className="relative flex items-center gap-2">
                                Watch Highlights <Play size={18} fill="currentColor" />
                            </span>
                        </Link>

                        <Link to="/stats" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold uppercase tracking-wider transition-colors rounded-lg inline-flex items-center justify-center">
                            View Stats
                        </Link>
                    </motion.div>
                </div>

                <div className="order-1 lg:order-2 h-[500px] md:h-[600px] w-full relative z-10">
                    <AnimatePresence mode="wait">
                        {currentLayout === 0 ? (
                            <CollageLayout1 key="layout1" />
                        ) : (
                            <CollageLayout2 key="layout2" />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Hero;
