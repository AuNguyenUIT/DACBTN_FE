import React from "react";
import PropTypes from "prop-types";

function InfoOrder(props) {
  const { order } = props;
  return (
    <div className="row align-items-center">
      <div className="col-4">
        <b className="d-inline-block mr-3">Mã đơn hàng: {order.id}</b>
      </div>
      <div className="col-4">
        <span>Ngày đặt: {order.create}</span>
      </div>

      <div className="float-right row col-4 align-items-center">
        <div className="col-6">
          {order.status === 1 ? (
            <strong className="text-success">Đã xác nhận</strong>
          ) : order.status === 0 ? (
            <strong className="text-warning">Đang chờ xử lý</strong>
          ) : (
            <strong className="text-success">Đã hủy</strong>
          )}
        </div>
        <div className="col-6">
          {order.status === 0 && (
            <button className="btn btn-danger">Hủy đơn</button>
          )}
        </div>
      </div>
    </div>
  );
}

InfoOrder.propTypes = {
  order: PropTypes.object,
};
InfoOrder.defaultProps = {
  order: {},
};

export default InfoOrder;
