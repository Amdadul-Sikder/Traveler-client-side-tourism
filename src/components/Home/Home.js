import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import TourPackages from '../TourPackages/TourPackages';
import "./Home"

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TourPackages></TourPackages>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;