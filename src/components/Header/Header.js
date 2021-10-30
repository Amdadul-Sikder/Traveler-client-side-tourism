import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseFirebase from '../Hooks/UseFirebase';
import "./Header.css"

const Header = () => {
    const { user, handleLogout } = UseFirebase();
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                {/* <Navbar.Brand className="logo" href="#">Traveler</Navbar.Brand> */}
                <HashLink className="logo" to="/home#hero">Traveler</HashLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto me-5 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <HashLink className="nav-menu" to="/home#hero">Home</HashLink>
                        <HashLink className="nav-menu" to="/home#about">About</HashLink>
                        <HashLink className="nav-menu" to="/home/#tourPack">Tour Packages</HashLink>
                        <HashLink className="nav-menu" to="/home#contact">Contact</HashLink>

                        {
                            user?.email && <HashLink className="nav-menu" to="/user-profile#user-profile">User Profile</HashLink>
                        }
                    </Nav>
                    {/* {
                        user?.email ?
                            < Button onClick={logOut} variant="outline-light">Logout</Button> :
                            <Link to='/login'><Button className="me-3" variant="outline-light">Login</Button></Link>
                    }
                    <Navbar.Text className="ms-3 user-name">{user?.displayName}</Navbar.Text> */}
                    {
                        user?.email ?
                            < Button onClick={handleLogout} variant="outline-light">Logout</Button> :
                            <Link to='/login'><Button className="me-3" variant="outline-light">Login</Button></Link>
                    }

                    <Navbar.Text className="ms-3 user-name">{user?.displayName}</Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;