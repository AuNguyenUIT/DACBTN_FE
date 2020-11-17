import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CheckoutItem(props) {
  return (
    <div className="col-md-6">
      <figure className="itemside mb-3">
        <div className="aside">
          <img
            src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg"
            className="border img-xs"
            alt="name"
          />
        </div>
        <figcaption className="info">
          <p>Name of the product goes here or title</p>
          <span>2x $290 = $430 </span>
        </figcaption>
      </figure>
    </div>
  );
}

CheckoutItem.propTypes = {};

export default CheckoutItem;
