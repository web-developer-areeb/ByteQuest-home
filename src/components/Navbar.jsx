import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../CSS/navbar.css'

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(faBars);
    const [isActive, setIsActive] = useState('inactive');

    const menu = () => {
        menuIcon === faBars ? setMenuIcon(faTimes) : setMenuIcon(faBars);
        isActive === 'inactive' ? setIsActive('active') : setIsActive('inactive');
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo-box">
                <Link to="/">
                    <img src="/img/logo.jpg" alt="logo" />
                </Link>
            </div>
            <div className={`navbar__links ${isActive}`}>
                <ul className="navbar__list" >
                    <li><Link to="/" className="navbar__link">Home</Link></li>
                    <li><Link to="/aboutus" className="navbar__link">About Us</Link></li>
                    <li><Link to="/services" className="navbar__link">Services</Link></li>
                    <li><Link to="/products" className="navbar__link">Products</Link></li>
                    <li><Link to="/portfolio" className="navbar__link">Portfolio</Link></li>
                </ul>
            </div>
            <div className={`action ${isActive}`}>
                <Link to="/contactus" className="btn btn__contact-us">
                    Contact US
                </Link>
            </div>
            <div className="navbar__icon">
                <FontAwesomeIcon className="icon icon__menu" icon={menuIcon} onClick={menu} />
                <div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;