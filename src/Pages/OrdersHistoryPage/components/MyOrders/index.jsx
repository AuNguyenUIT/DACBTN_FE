import React from "react";
import PropTypes from "prop-types";
import MyOrder from "./MyOrder";

function MyOrders(props) {
  return (
    <>
      <MyOrder />
      <MyOrder />
      <MyOrder />
      <MyOrder />
      <MyOrder />
    </>
  );
}

MyOrders.propTypes = {};

export default MyOrders;
