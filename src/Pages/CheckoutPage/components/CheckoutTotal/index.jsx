import React from "react";
import PropTypes from "prop-types";

function CheckoutTotal(props) {
  const { items, totalPrice } = props;
  return (
    <dl className="row">
      <dt className="col-sm-8">
        Tạm tính:
        <span className="float-right text-muted">{items} sản phẩm</span>
      </dt>
      <dd className="col-sm-4 text-right">
        <strong>
          {new Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(totalPrice)}
        </strong>
      </dd>
      <dt className="col-sm-8">
        Giảm giá:
        <span className="float-right text-muted">0% Giảm Giá</span>
      </dt>
      <dd className="col-sm-4 text-danger text-right">
        <strong> {new Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(0)}</strong>
      </dd>
      <dt className="col-sm-8">
        Phí ship:
        <span className="float-right text-muted">COD</span>
      </dt>
      <dd className="col-sm-4 text-right">
        <strong>
          {new Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(25000)}
        </strong>
      </dd>

      <dt className="col-sm-8">Tổng cộng:</dt>
      <dd className="col-sm-4 text-right">
        <strong className="h5 text-danger">
          {new Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(totalPrice + 25000)}
        </strong>
      </dd>
    </dl>
  );
}

CheckoutTotal.propTypes = {};

export default CheckoutTotal;
