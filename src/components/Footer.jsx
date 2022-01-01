import React from "react";
import '../CSS/footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__text">
                    <img className="logo" src="/img/logo-footer.jpg" alt="logo" />
                    <p>Progravida nibh veil velit auctor alinean sollicitudin, lorem quis bibendum aby the readable</p>
                </div>
                <div className="footer__links-info">
                    <div className="footer__links">
                        <h3>Links</h3>
                        <ul>
                            <li>Our Clients</li>
                            <li>Privacy Policy</li>
                            <li>Our Benifits</li>
                        </ul>
                    </div>
                    <div className="footer__info">
                        <h3>Information</h3>
                        <ul>
                            <li>Our Clients</li>
                            <li>Privacy Policy</li>
                            <li>Our Benifits</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>+91 9711999770, +1833-880-3355</li>
                        <li>info@bytequests.com</li>
                        <li>84,Block A,Sector 4,Noida,UP,201301</li>
                    </ul>
                </div>
            </div>
            <div className="footer__legal">
                <p>Copyright 2020 ByteQuest Software Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;