import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Stats', href: '/stats' },
        { name: 'News', href: '/news' },
        { name: 'Film', href: '/film' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none`}
        >
            <div className={`
        pointer-events-auto
        flex items-center justify-between
        px-6 py-3 md:px-8 md:py-4
        rounded-full
        backdrop-blur-xl
        border border-white/10
        transition-all duration-300
        ${scrolled ? 'bg-black/60 shadow-lg shadow-primary/10' : 'bg-white/5'}
        w-full max-w-5xl
      `}>
                {/* Logo & Name */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="h-10 w-auto">
                        <img src="/Zacks_Football/logo.png" alt="ZK Logo" className="h-full w-auto object-contain" />
                    </Link>
                    <Link to="/" className="hidden md:block font-impact text-xl uppercase tracking-wider text-white">
                        Zack <span className="text-primary">Kaseler</span>
                    </Link>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${location.pathname === link.href ? 'text-primary' : 'text-white/70 hover:text-primary'}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden pointer-events-auto shadow-2xl shadow-primary/20"
                    >
                        <ul className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-2xl font-impact uppercase tracking-wide text-white hover:text-primary transition-colors block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
