import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TourPackages from './components/TourPackages/TourPackages';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import UserProfile from './components/UserProfile/UserProfile';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/hero">
            <Hero></Hero>
          </Route>
          <Route path="/tour-packages">
            <TourPackages></TourPackages>
          </Route>
          <PrivateRoute path="/order/:orderId">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/user-profile">
            <UserProfile></UserProfile>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
