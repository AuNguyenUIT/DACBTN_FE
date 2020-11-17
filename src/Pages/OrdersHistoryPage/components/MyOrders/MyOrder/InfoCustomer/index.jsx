import React from "react";
import PropTypes from "prop-types";

function InfoCustomer(props) {
  return (
    <div className="row">
      <div className="col-md-4">
        <h6 className="text-muted">Thanh toán</h6>
        <p>
          Tạm tính: $356 <br />
          Phí ship: $56 <br />
          <span className="b">Tổng: $456 </span>
        </p>
      </div>
      <div className="col-md-4">
        <h6 className="text-muted">Liên hệ</h6>
        <p>
          Michael Jackson <br />
          +1234567890 <br />
          somename@gmail.com
        </p>
      </div>
      <div className="col-md-4">
        <h6 className="text-muted">Địa chỉ giao hàng</h6>
        <p>Home 123, Building name, Street abcd, Tashkent Uzbekistan</p>
      </div>
    </div>
  );
}

InfoCustomer.propTypes = {};

export default InfoCustomer;
