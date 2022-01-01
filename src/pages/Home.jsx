import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Services from "../components/Services";
import LargeCards from "../components/LargeCards";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import '../CSS/home.css';


const Home = () => {
    return (
        <div>
            <Header />
            <Products />
            <Services />
            <LargeCards mainHeading={"Portfolio/ Case Studies"} />
            <LargeCards mainHeading={"Developers On Demand"} />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;