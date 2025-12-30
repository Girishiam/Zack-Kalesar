import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { newsData } from '../data/newsData';

const NewsDetails = () => {
    const { id } = useParams();
    const article = newsData.find((item) => item.id === parseInt(id));

    if (!article) {
        return (
            <div className="min-h-screen bg-secondary flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-impact mb-4">Article Not Found</h2>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-secondary pt-24 pb-12 px-6"
        >
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="rounded-3xl overflow-hidden mb-8 h-[400px] md:h-[600px] relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2">
                        <Tag size={12} /> {article.category}
                    </span>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <Calendar size={12} /> {article.date}
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-impact text-white uppercase leading-tight mb-8">
                    {article.title}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-white/80 leading-relaxed text-xl">
                        {article.content}
                    </p>
                    <p className="text-white/60 mt-8">
                        *This is a placeholder body for the news article. In a real application, this would contain the full detailed report, quotes, and additional media relevant to the story.*
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsDetails;
