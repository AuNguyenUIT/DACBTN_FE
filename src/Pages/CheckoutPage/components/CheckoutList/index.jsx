import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CheckoutItem from "./CheckoutItem";

function CheckoutList(props) {
  const { carts, totalPrice, idOrder } = props;
  let [total, setTotal] = useState(0);
  const price = (price) => {
    setTotal(total + price);
  };
  useEffect(() => {
    totalPrice(total);
  }, [total]);
  return (
    <div className="row">
      {carts.map((cart, index) => (
        <CheckoutItem cart={cart} key={index} price={price} idOrder={idOrder} />
      ))}
    </div>
  );
}

CheckoutList.propTypes = {
  carts: PropTypes.array,
  totalPrice: PropTypes.func,
};
CheckoutList.defaultProps = {
  carts: [],
  totalPrice: null,
};
export default CheckoutList;
