import React from "react";
import PropTypes from "prop-types";

function InfoCustomer(props) {
  const { order } = props;
  return (
    <div className="row">
      <div className="col-md-4">
        <h6 className="text-muted">Thanh toán</h6>
        <p>
          Tạm tính: {order.amount} <br />
          Phí ship: {order.shipFee} <br />
          <span className="b">Tổng: {order.amount + order.shipFee} </span>
        </p>
      </div>
      <div className="col-md-4">
        <h6 className="text-muted">Liên hệ</h6>
        <p>
          {order.name} <br />
          {order.phone} <br />
          {order.email}
        </p>
      </div>
      <div className="col-md-4">
        <h6 className="text-muted">Địa chỉ giao hàng</h6>
        <p>{order.address}</p>
      </div>
    </div>
  );
}

InfoCustomer.propTypes = {
  order: PropTypes.object,
};
InfoCustomer.defaultProps = {
  order: {},
};

export default InfoCustomer;
