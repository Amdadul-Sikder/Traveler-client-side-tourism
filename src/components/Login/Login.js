
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import UseFirebase from '../Hooks/UseFirebase';
import "./Login.css"

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { googleSignIn } = UseFirebase();
    // console.log(googleSignIn);

    const location = useLocation();
    // console.log('came from', location.state?.from);

    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })

    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="mb-3">Please Login</h3>
                <input placeholder="Email" {...register("example")} />

                <input placeholder="Password" {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="login-btn" value="Login" />
                <p>New User? Sign in using Google</p>
                <Button onClick={handleGoogleLogIn}>Google Sign In</Button>
            </form>
        </div>
    );
};

export default Login;