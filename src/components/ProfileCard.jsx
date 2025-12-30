import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Ruler, Weight as WeightIcon, FileText } from 'lucide-react';

const ProfileCard = ({ classYear, position, school, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.01 }}
        className={`p-8 md:p-10 rounded-[2rem] relative overflow-hidden group max-w-5xl mx-auto w-full border border-white/10 ${className}`}
    >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/5 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Left Column: Identity */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                    <div className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">Recruitment Open</span>
                    </div>
                </div>

                <div>
                    <h2 className="text-5xl md:text-7xl font-impact text-white uppercase leading-none mb-2">
                        Zack <span className="text-primary">Kaseler</span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 text-lg font-medium">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" /> {position}
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" /> {school}
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                    <button className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-white/90 transition-colors">
                        <FileText size={18} /> Download Bio
                    </button>
                    <button className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white/10 transition-colors">
                        Contact Coach
                    </button>
                </div>
            </div>

            {/* Right Column: Key Metrics Grid */}
            <div className="lg:col-span-1 grid grid-cols-2 gap-3">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group/stat hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-2">
                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Height</span>
                        <Ruler size={16} className="text-primary/60" />
                    </div>
                    <p className="text-3xl font-impact text-white">6'4"</p>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group/stat hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-2">
                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Weight</span>
                        <WeightIcon size={16} className="text-primary/60" />
                    </div>
                    <p className="text-3xl font-impact text-white">290</p>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group/stat hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-2">
                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Class</span>
                        <Trophy size={16} className="text-primary/60" />
                    </div>
                    <p className="text-3xl font-impact text-white">{classYear}</p>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group/stat hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-2">
                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">GPA</span>
                        <GraduationCap size={16} className="text-primary/60" />
                    </div>
                    <p className="text-3xl font-impact text-white">3.8</p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default ProfileCard;
