import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 relative z-10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <h3 className="text-2xl font-impact uppercase text-white group-hover:text-primary transition-colors pr-8">
                    {question}
                </h3>
                <span className="p-2 rounded-full border border-white/20 group-hover:border-primary group-hover:text-primary transition-colors">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-white/60 text-lg leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { question: "What position does Zack play?", answer: "Zack is a dominant Offensive Lineman, specializing in protecting the quarterback and creating running lanes." },
        { question: "What are his key physical stats?", answer: "Zack stands at 6'4\" and weighs 290 lbs. He benches 315 lbs and squats 450 lbs, demonstrating elite power." },
        { question: "Which college offers has he received?", answer: "Zack has received interest from several Division I programs. Contact us for the most up-to-date recruitment information." },
        { question: "What distinguishes his playing style?", answer: "Discipline, aggression, and intelligent play. Zack is known for his high football IQ and relentless motor from whistle to whistle." }
    ];

    return (
        <section id="faq" className="py-24 px-6 relative bg-secondary overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-secondary/90 z-10 backdrop-blur-sm" />
                <img
                    src="/Zacks_Football/banner6.webp"
                    alt="Background Ambience"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-6xl md:text-7xl font-impact uppercase text-white">
                        Recruiting<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">FAQ</span>
                    </h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
