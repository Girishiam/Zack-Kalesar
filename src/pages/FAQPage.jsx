import React from 'react';
import FAQ from '../components/FAQ';

const FAQPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-secondary">
            <div className="py-12">
                <h1 className="text-6xl md:text-8xl font-impact uppercase text-white mb-8 text-center">
                    Recruitment <span className="text-primary">Info</span>
                </h1>
                <FAQ />
            </div>
        </div>
    );
};

export default FAQPage;
