import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="md:col-span-2">
                    <h2 className="font-impact text-5xl text-white mb-6 uppercase">
                        Zack <span className="text-primary">Kaseler</span>.
                    </h2>
                    <p className="text-white/50 max-w-md text-lg leading-relaxed">
                        Dedicated student-athlete committed to excellence on and off the field.
                        Relentless work ethic, leadership, and performance.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Navigation</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/stats" className="hover:text-primary transition-colors">Stats</Link></li>
                        <li><Link to="/news" className="hover:text-primary transition-colors">News</Link></li>
                        <li><Link to="/film" className="hover:text-primary transition-colors">Film</Link></li>
                        <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">Socials</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Hudl</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/30 text-xs font-mono">
                    &copy; {new Date().getFullYear()} ZACK KASELER. ALL RIGHTS RESERVED.
                </p>
                <p className="text-white/30 text-xs font-mono uppercase">
                    Designed & Built for greatness
                </p>
            </div>
        </footer>
    );
};

export default Footer;
