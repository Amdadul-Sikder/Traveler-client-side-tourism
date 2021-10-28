import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className="footer-logo">Traveler</h1>
                    </div>
                    <div className="col-lg-4">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-contact">
                            <input type="text" name="" id="" />
                            <br />
                            <h4>Subscribe Us</h4>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="footer-bottom text-center">
                        <p>Copyright &copy; 2021 || Amdadul_Sikder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;