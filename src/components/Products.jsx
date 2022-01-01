import React from "react";
import '../CSS/products.css';

class Products extends React.Component {
    render() {
        return (
            <div className="products" id="products">
                <h4>
                    Lorem ipsum dolor
                </h4>
                <div className="heading__secondary">
                    <h2>Products</h2>
                </div>
                <div className="products__container">
                    <div className="products__item"></div>
                    <div className="products__item"></div>
                    <div className="products__item"></div>
                    {/* <div className="products__item"></div> */}
                </div>
            </div>
        );
    };
};

export default Products;