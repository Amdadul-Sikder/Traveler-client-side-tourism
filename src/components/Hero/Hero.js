import React from 'react';
import { Button } from 'react-bootstrap';
import "./Hero.css"

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="hero-content d-flex">
                            <h1><span>Welcome to Traveler</span>
                                <br />
                                Discover Your Favorite Place with Us</h1>
                            <p>Find out great places and enjoy your moment. Your desire our support.So let's try out new adventure.</p>
                            <Button className="btn btn-primary book-btn">Book Now</Button>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;