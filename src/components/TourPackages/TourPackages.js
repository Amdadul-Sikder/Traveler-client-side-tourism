import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'
import "./TourPackages.css"
import UseFirebase from '../Hooks/UseFirebase';

const TourPackages = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch("https://lit-shore-61156.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setPackages(data))
        // .then(data => console.log(data))
    }, [])

    const { isLoading } = UseFirebase();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div id="tourPack" className="tourPackages-area">
            <div className="container">
                <div className="row">

                    {
                        packages.map(pd => <div className="col-lg-4">

                            <div className="single-package">
                                <img className="package-img" src={pd.img} alt="" />
                                <h3>{pd.name}</h3>
                                <p>{pd.description}</p>
                                <div className="mt-5 d-flex justify-content-between">
                                    <h5>{pd.price}</h5>
                                    <Link to={`/order/${pd.id}`}>
                                        <Button className="btn btn-danger booking-btn">Book Now</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TourPackages;