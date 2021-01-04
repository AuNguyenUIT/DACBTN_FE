import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Cart from "./Cart";

function Carts(props) {
  const { carts, totalPrice } = props;
  let [total, setTotal] = useState(0);
  const price = (price) => {
    setTotal(total + price);
  };
  useEffect(() => {
    totalPrice(total);
  }, [total]);
  return (
    <div className="card">
      <table className="table table-borderless table-shopping-cart">
        <thead className="text-muted">
          <tr className="small text-uppercase text-center">
            <th  width="40%">
              Sản phẩm
            </th>
            <th  width="30%">
              Số lượng
            </th>
            <th  width="20%">
              Giá
            </th>
            <th  width="10%" className="text-right"></th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, index) => (
            <Cart key={index} cart={cart} price={price} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Carts.propTypes = {
  carts: PropTypes.array,
  totalPrice: PropTypes.func,
};
Carts.defaultProps = {
  carts: [],
  totalPrice: null,
};

export default Carts;
