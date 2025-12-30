import React from 'react';
import MediaCarousel from '../components/MediaCarousel';

const NewsPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-secondary">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-6xl md:text-8xl font-impact uppercase text-white mb-8 text-center">
                    Latest <span className="text-primary">News</span>
                </h1>
                <MediaCarousel />
            </div>
        </div>
    );
};

export default NewsPage;
