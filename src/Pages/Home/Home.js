import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Hero from '../../Components/Hero/Hero';

import homeBg from '../../images/home-bg.jpg';

const hmStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${homeBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="home_page page_fixed" style={hmStyles}>
                <Hero />
            </div>
        </>
    );
};

export default Home;