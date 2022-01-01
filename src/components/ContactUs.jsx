import React from "react";
import { Link } from "react-router-dom";
import '../CSS/contactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-us__text-content">
                <h2>Let's Discuss</h2>
                <p className="contact-us__text">Progravida nibh veil velit auctor alinean sollicitudin, lorem quis bibendum auctor.</p>
            </div>
            <div className="contact-us__action">
                <Link to="/contactus" className="btn btn-contact-us">
                    sign up
                </Link>
            </div>
        </div>
    );
};

export default ContactUs;