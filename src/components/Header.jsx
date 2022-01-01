import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../CSS/header.css'


const Header = () => {
    return (
        <div className="header">
            {/* <FontAwesomeIcon className="icon icon__left-arrow" icon={faAngleLeft} /> */}
            <div className="hero"></div>
            {/* <FontAwesomeIcon className="icon icon__right-arrow" icon={faAngleRight} /> */}
        </div>
    );
};

export default Header;