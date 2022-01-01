import React from "react";
import { Link } from 'react-router-dom';
import '../CSS/services.css';

class Services extends React.Component {
    render() {
        return (
            <div className="services" id="services">
                <h4>
                    Lorem ipsum dolor
                </h4>
                <div className="heading__secondary">
                    <h2>Services</h2>
                </div>
                <div className="services__container">
                    <div className="services__card">
                        <div className="services__card-image">
                        </div>
                        <h3>Website Design & Development</h3>
                        <p className="services__card-text">Progravida nibh vel velit auctor alinean, lorem quis bibendum.</p>
                        <div className="services__action">
                            <Link to="#" className="services__action-link">Read More</Link>
                        </div>
                    </div>
                    <div className="services__card">
                        <div className="services__card-image">
                        </div>
                        <h3>On Demand Devs</h3>
                        <p className="services__card-text">Progravida nibh vel velit auctor alinean, lorem quis bibendum.</p>
                        <div className="services__action">
                            <Link to="#" className="services__action-link">Read More</Link>
                        </div>
                    </div>
                    <div className="services__card">
                        <div className="services__card-image">
                        </div>
                        <h3>Webhosting</h3>
                        <p className="services__card-text">Progravida nibh vel velit auctor alinean, lorem quis bibendum.</p>
                        <div className="services__action">
                            <Link to="#" className="services__action-link">Read More</Link>
                        </div>
                    </div>
                    {/* <div className="products__item"></div> */}
                </div>
            </div>
        );
    };
};

export default Services;