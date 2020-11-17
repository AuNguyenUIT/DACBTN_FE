import React from "react";
import PropTypes from "prop-types";

function CheckoutTotal(props) {
  return (
    <dl className="row">
      <dt className="col-sm-10">
        Tạm tính:
        <span className="float-right text-muted">2 sản phẩm</span>
      </dt>
      <dd className="col-sm-2 text-right">
        <strong>$1,568</strong>
      </dd>
      <dt className="col-sm-10">
        Giảm giá:
        <span className="float-right text-muted">10% offer</span>
      </dt>
      <dd className="col-sm-2 text-danger text-right">
        <strong>$29</strong>
      </dd>
      <dt className="col-sm-10">
        Phí ship:
        <span className="float-right text-muted">COD</span>
      </dt>
      <dd className="col-sm-2 text-right">
        <strong>$120</strong>
      </dd>

      <dt className="col-sm-10">Tổng cộng:</dt>
      <dd className="col-sm-2 text-right">
        <strong className="h5 text-dark">$1,650</strong>
      </dd>
    </dl>
  );
}

CheckoutTotal.propTypes = {};

export default CheckoutTotal;
