import React from "react";
import PropTypes from "prop-types";

function InfoOrder(props) {
  return (
    <div className="row align-items-center">
      <div className="col-4">
        <b className="d-inline-block mr-3">Mã đơn hàng: 6123456789</b>
      </div>
      <div className="col-4">
        <span>Ngày đặt: 16 December 2018</span>
      </div>

      <div className="float-right row col-4 align-items-center">
        <div className="col-6">
          <strong className="text-success">Đã xác nhận</strong>
        </div>
        <div className="col-6">
          {/* <button disabled className="btn btn-light">
            Hủy đơn
          </button> */}
        </div>
      </div>
    </div>
  );
}

InfoOrder.propTypes = {};

export default InfoOrder;
