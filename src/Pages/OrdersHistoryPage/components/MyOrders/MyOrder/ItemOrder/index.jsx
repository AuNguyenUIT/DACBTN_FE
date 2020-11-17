import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ItemOrder(props) {
  return (
    <Link to="/detail">
      <figure className="itemside mb-3">
        <div className="aside">
          <img
            src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg"
            className="img-sm border"
            alt="name"
          />
        </div>
        <figcaption className="info align-self-center">
          <p className="title">Just name of title or name goes here</p>
          <span className="text-muted">$145 x 45 </span>
        </figcaption>
      </figure>
    </Link>
  );
}

ItemOrder.propTypes = {};

export default ItemOrder;
