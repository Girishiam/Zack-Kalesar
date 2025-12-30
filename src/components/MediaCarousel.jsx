import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { newsData } from '../data/newsData';
import { Link } from 'react-router-dom';

const MediaCard = ({ id, title, category, date, image }) => {
    return (
        <Link to={`/news/${id}`} className="min-w-[300px] md:min-w-[400px] h-[500px] relative group overflow-hidden rounded-3xl bg-secondary border border-white/10 block">
            <div className="absolute inset-0">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-white rounded-full">
                        {category}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                        {date}
                    </span>
                </div>

                <h3 className="text-3xl font-impact text-white uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
            </div>
        </Link>
    );
};

const MediaCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    // articles array is removed, using newsData

    return (
        <section ref={targetRef} id="media" className="h-[300vh] bg-secondary relative">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="mb-12 px-6 md:px-12">
                    <h2 className="text-6xl md:text-8xl font-impact uppercase text-white mb-2">
                        Latest <span className="text-primary">News</span>
                    </h2>
                    <div className="h-1 w-24 bg-white/20" />
                </div>

                <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-12">
                    {newsData.map((article) => (
                        <MediaCard key={article.id} {...article} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MediaCarousel;
