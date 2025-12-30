import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import StatsGrid from '../components/StatsGrid';
import MediaCarousel from '../components/MediaCarousel';
import VideoSection from '../components/VideoSection';

const Home = () => {
    return (
        <>
            <Hero />
            <Marquee />
            <div className="py-12 bg-secondary">
                <h2 className="text-4xl md:text-5xl font-impact uppercase text-white text-center mb-8">
                    Highlights
                </h2>
                <VideoSection />
            </div>
            <StatsGrid />
            <MediaCarousel />
        </>
    );
};

export default Home;
