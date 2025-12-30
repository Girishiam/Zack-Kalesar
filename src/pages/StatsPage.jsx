import React from 'react';
import StatsGrid from '../components/StatsGrid';
import ProfileCard from '../components/ProfileCard';

const StatsPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-secondary">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-6xl md:text-8xl font-impact uppercase text-white mb-12 text-center">
                    Player <span className="text-primary">Stats</span>
                </h1>

                <div className="mb-16 flex justify-center">
                    <ProfileCard
                        classYear="2026"
                        position="Offensive Line / Defensive Tackle"
                        school="Chagrin Falls HS"
                    />
                </div>

                <StatsGrid />
            </div>
        </div>
    );
};

export default StatsPage;
