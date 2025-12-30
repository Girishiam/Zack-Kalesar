import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Weight, Timer, TrendingUp, Trophy } from 'lucide-react';

const ProfileCard = ({ classYear, position, school, delay, colSpan = "col-span-1" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.02 }}
        className={`${colSpan} p-8 rounded-3xl relative overflow-hidden group`}
    >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-2xl backdrop-blur-md border border-primary/20 text-primary">
                    <Trophy size={32} />
                </div>
                <div className="text-right">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Class of</p>
                    <p className="text-2xl font-impact text-white">{classYear}</p>
                </div>
            </div>

            <h3 className="text-4xl font-impact text-white uppercase mb-1 leading-none">
                Warning<br /><span className="text-primary">Offense</span>
            </h3>
            <p className="text-white/60 font-medium mb-6">{position}</p>

            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm font-bold text-white/80 uppercase tracking-wider">{school}</span>
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
            </div>
        </div>
    </motion.div>
);

const StatCard = ({ icon: Icon, label, value, subtext, delay, colSpan = "col-span-1" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
        className={`${colSpan} p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group relative overflow-hidden`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity transform rotate-12 group-hover:scale-110 duration-500 group-hover:text-primary">
            {Icon && <Icon size={64} />}
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">{label}</p>
                <h3 className="text-4xl md:text-5xl font-impact text-white mb-1 group-hover:scale-105 transition-transform origin-left">
                    {value}
                </h3>
                {subtext && <p className="text-primary text-sm font-bold uppercase tracking-wider">{subtext}</p>}
            </div>
        </div>
    </motion.div>
);

const ImageCard = ({ src, colSpan = "col-span-1", rowSpan = "row-span-1", delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`${colSpan} ${rowSpan} rounded-3xl overflow-hidden relative group`}
    >
        <img src={src} alt="Action Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
    </motion.div>
);

const StatsGrid = () => {
    return (
        <section id="stats" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-6xl md:text-8xl font-impact uppercase text-white mb-4">
                        Physical <span className="text-primary">Profile</span>
                    </h2>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto">
                        Built for the trenches. Engineered for dominance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]">

                    {/* Row 1 - Profile Card only if requested */}


                    <StatCard
                        label="Height"
                        value={"6'4\""}
                        subtext={"Wingspan: 80\""}
                        icon={Ruler}
                        delay={0.1}
                    />
                    <ImageCard
                        src="/Zacks_Football/player4.webp"
                        colSpan="col-span-1 md:col-span-2"
                        delay={0.2}
                    />
                    <StatCard
                        label="Weight"
                        value="290"
                        subtext="Lbs"
                        icon={Weight}
                        delay={0.3}
                    />

                    {/* Row 2 */}
                    <ImageCard
                        src="/Zacks_Football/player6.webp"
                        rowSpan="row-span-1 md:row-span-2"
                        delay={0.4}
                    />
                    <StatCard
                        label="40 Yard Dash"
                        value="5.1"
                        subtext="Seconds"
                        icon={Timer}
                        delay={0.5}
                        colSpan="col-span-1 md:col-span-2"
                    />
                    <StatCard
                        label="Bench Press"
                        value="315"
                        subtext="Lbs"
                        icon={TrendingUp}
                        delay={0.6}
                    />

                    {/* Row 3 */}
                    <StatCard
                        label="Squat"
                        value="450"
                        subtext="Lbs"
                        icon={Trophy}
                        delay={0.7}
                    />
                    <ImageCard
                        src="/Zacks_Football/player8.webp"
                        colSpan="col-span-1 md:col-span-2"
                        delay={0.8}
                    />
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;
