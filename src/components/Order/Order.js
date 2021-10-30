
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./Order.css"

const Order = () => {

    const { orderId } = useParams();

    const [packages, setPackages] = useState([]);

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch("https://lit-shore-61156.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setPackages(data))
        // .then(data => console.log(data))


    }, [])

    useEffect(() => {
        if (packages.length > 0) {
            const singlePackage = packages.find(sp => sp.id == orderId);
            setProduct(singlePackage);

            // console.log(singlePackage);
        }

    }, [packages, orderId])

    return (
        <div id="order">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="product-list">
                            <div className="single-product">
                                <div>
                                    <img className="product-img" src={product?.img} alt="" />
                                    <h3 className="pb-3">{product?.name}</h3>
                                    <p>{product?.description}</p>
                                </div>
                                <h6 className="py-2">Contact: +880123456789</h6>
                                <div className="social-link d-flex">
                                    <div>
                                        <i className="fab fa-facebook-square"></i>
                                        <i className="fab fa-youtube-square"></i>
                                        <i className="fab fa-twitter-square"></i>
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                    <Button className="btn btn-primary">Add to Cart</Button>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cart">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;