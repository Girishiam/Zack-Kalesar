import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-secondary">
            <div className="py-12">
                <h1 className="text-6xl md:text-8xl font-impact uppercase text-white mb-8 text-center">
                    Contact <span className="text-primary">Us</span>
                </h1>
                <Contact />
            </div>
        </div>
    );
};

export default ContactPage;
