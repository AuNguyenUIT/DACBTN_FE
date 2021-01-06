import React from "react";
import PropTypes from "prop-types";
import MyOrder from "./MyOrder";

function MyOrders(props) {
  const { orders } = props;
  return orders.map((order, index) => <MyOrder key={index} order={order} />);
}

MyOrders.propTypes = {
  orders: PropTypes.array,
};
MyOrder.defaultProps = {
  orders: [],
};

export default MyOrders;
