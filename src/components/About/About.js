import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div id="about" className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h1>What we do</h1>
                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="https://image.freepik.com/free-photo/businesspeople-standing-outside-office-building_107420-74307.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;