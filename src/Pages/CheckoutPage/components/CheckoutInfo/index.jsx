import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CheckoutInfo(props) {
  return (
    <div className="card">
      <div className="card-body">
        <header className="mb-4">
          <h4 className="card-title">Địa chỉ nhận hàng</h4>
        </header>
        <form>
          <div className="form-group">
            <label>Tên người nhận</label>
            <input name="name" className="form-control" type="text" />
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label>Email người nhận</label>
              <input name="email" className="form-control" type="email" />
            </div>
            <div className="form-group col-6">
              <label>Số điện thoại người nhận</label>
              <input name="phoneNum" className="form-control" type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Tỉnh / Thành phố</label>
              <select name="province" className="form-control" defaultValue="test">
                <option value="test">Choose...</option>
                <option>Uzbekistan</option>
                <option>Russia</option>
                <option >United States</option>
                <option>India</option>
                <option>Afganistan</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>Quận Huyện</label>
              <select name="district" className="form-control" defaultValue="test">
                <option value="test">Choose...</option>
                <option>Uzbekistan</option>
                <option>Russia</option>
                <option >United States</option>
              </select>
            </div>
          </div>
          <div className=" form-group">
            <label>Địa chỉ cụ thể</label>
            <input
              type="text"
              className="form-control"
              name="address"
              
            />
          </div>

          <div className="form-group mt-3 ">
            <button type="submit" className="btn btn-primary btn-block w-80">
              Đặt hàng
            </button>
          </div>
          <div className="form-group mt-3 ">
            <Link to="/cart" className="btn btn-light btn-block w-80">
              Quay lại
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

CheckoutInfo.propTypes = {};

export default CheckoutInfo;
