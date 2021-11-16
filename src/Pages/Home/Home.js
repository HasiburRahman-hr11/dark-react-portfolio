import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="home_page page_fixed">
                <Hero/>
            </div>
        </>
    );
};

export default Home;