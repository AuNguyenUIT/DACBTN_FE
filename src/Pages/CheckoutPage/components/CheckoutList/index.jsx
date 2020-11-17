import React from "react";
import PropTypes from "prop-types";
import CheckoutItem from "./CheckoutItem";

function CheckoutList(props) {
  return <div className="row">
      <CheckoutItem/>
      <CheckoutItem/>
      <CheckoutItem/>
      <CheckoutItem/>
      <CheckoutItem/>
      <CheckoutItem/>
  </div>;
}

CheckoutList.propTypes = {};

export default CheckoutList;
