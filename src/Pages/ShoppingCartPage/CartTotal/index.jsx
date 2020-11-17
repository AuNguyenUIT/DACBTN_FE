import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CartTotal(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mã Giảm Giá"
          />
          <span className="input-group-append">
            <button className="btn btn-primary">Ok</button>
          </span>
        </div>
        <dl className="dlist-align">
          <dt>Tạm tính:</dt>
          <dd className="text-right">$938.50</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Giảm:</dt>
          <dd className="text-right text-danger">0%</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Tổng tiền:</dt>
          <dd className="text-right text-dark">
            <strong>$938.50</strong>
          </dd>
        </dl>
        <hr />
        <Link to="/checkout" className="btn btn-primary btn-block">
          Thanh Toán
        </Link>
        <Link to="/shops" className="btn btn-light btn-block">
          Tiếp tục mua hàng
        </Link>
      </div>
      {/* card-body.// */}
    </div>
  );
}

CartTotal.propTypes = {};

export default CartTotal;
