
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Order.css"
import UseFirebase from '../Hooks/UseFirebase';

const Order = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert("Order completed succesfully");
        reset();
    };
    const { orderId } = useParams();

    const [packages, setPackages] = useState([]);

    const [product, setProduct] = useState({})
    const { user } = UseFirebase();

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
                    <div className="col-lg-6">
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
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cart">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                                <input placeholder="Email" defaultValue={user.email} {...register("email")} />
                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input placeholder="Phone Number" defaultValue="" {...register("phone")} />

                                {/* <input {...register("exampleRequired", { required: true })} /> */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                <input value="Place Order" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;