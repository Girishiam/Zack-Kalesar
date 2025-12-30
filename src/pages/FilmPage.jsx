import React from 'react';
import VideoSection from '../components/VideoSection';

const FilmPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-secondary">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-6xl md:text-8xl font-impact uppercase text-white mb-8 text-center">
                    Game <span className="text-primary">Film</span>
                </h1>
                <VideoSection />
            </div>
        </div>
    );
};

export default FilmPage;
