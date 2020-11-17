import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import Rating from "../Rating";

function Product(props) {
  return (
    <Link to="/detail" className="card card-product-grid">
      <div className="img img-wrap">
        <img
          src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg"
          alt="tên sản phẩm"
        />
      </div>
      <figcaption className="info-wrap">
        <p className="title">Just another product name</p>
        <div className="start mt-1">
          <Rating />
        </div>
        <div className="price-wrap mt-2">
          <span className="price mt-1 mr-2">$179.00</span>
          <del className="price-old">$200.000</del>
        </div>
      </figcaption>
    </Link>
  );
}

Product.propTypes = {};

export default Product;
