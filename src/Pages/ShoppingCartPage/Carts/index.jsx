import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Cart from "./Cart";

function Carts(props) {
  return (
    <div className="card">
      <table className="table table-borderless table-shopping-cart">
        <thead className="text-muted">
          <tr className="small text-uppercase">
            <th scope="col" width="308">
              Product
            </th>
            <th scope="col" width="151">
              Số lượng
            </th>
            <th scope="col" width="80">
              Price
            </th>
            <th scope="col" width="100" className="text-right"></th>
          </tr>
        </thead>
        <tbody>
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </tbody>
      </table>
    </div>
  );
}

Carts.propTypes = {};

export default Carts;
