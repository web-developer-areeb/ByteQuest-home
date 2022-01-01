import React from "react";
import '../CSS/largeCards.css';

const LargeCards = ({ mainHeading }) => {
    return (
        <div className="large-cards">
            <h4>Lorem ipsum dolor</h4>
            <div className="large-cards__heading__main">
                <h2>{mainHeading}</h2>
            </div>
            <div className="large-cards__card__container">
                <div className="large-cards__card"></div>
                <div className="large-cards__card"></div>
                <div className="large-cards__card"></div>
            </div>
        </div>
    );
};

export default LargeCards;