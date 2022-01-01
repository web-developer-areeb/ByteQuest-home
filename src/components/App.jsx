import React from "react";
import '../CSS/app.css';
import { Routes, Route } from 'react-router-dom';

import ContactsBar from "./ContactsBar";
import Navbar from "./Navbar";
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Products from '../pages/Products';
import Portfolio from '../pages/Portfolio';
import ContactUs from '../pages/ContactUs';

const App = () => {
    return (
        <div>
            <ContactsBar />
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/aboutus" exact element={<AboutUs />} />
                <Route path="/services" exact element={<Services />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/portfolio" exact element={<Portfolio />} />
                <Route path="/contactus" exact element={<ContactUs />} />
            </Routes>
        </div>
    );
};

export default App;