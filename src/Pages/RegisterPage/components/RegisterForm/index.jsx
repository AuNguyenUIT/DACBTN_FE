import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RegisterForm(props) {
  return (
    <div className="card mx-auto" style={{ maxWidth: "520px" }}>
      <article className="card-body">
        <header className="mb-4">
          <h4 className="card-title">Đăng ký</h4>
        </header>
        <form>
          <div className="form-row">
            <div className="col form-group">
              <label>Tên</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col form-group">
              <label>Họ</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-6">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group col-6">
              <label>Số điện thoại</label>
              <input type="phone" className="form-control" />
            </div>
          </div>

          {/* form-group end.// */}
          <div className="form-group">
            <label className="custom-control custom-radio custom-control-inline">
              <input
                className="custom-control-input"
                type="radio"
                name="gender"
                value="1"
              />
              <span className="custom-control-label"> Nam </span>
            </label>
            <label className="custom-control custom-radio custom-control-inline">
              <input
                className="custom-control-input"
                type="radio"
                name="gender"
                value="0"
              />
              <span className="custom-control-label"> Nữ </span>
            </label>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Mật khẩu</label>
              <input className="form-control" type="password" />
            </div>

            <div className="form-group col-md-6">
              <label>Nhập lại mật khẩu</label>
              <input className="form-control" type="password" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Tỉnh / Thành phố</label>
              <select
                name="province"
                className="form-control"
                defaultValue="test"
              >
                <option value="test">Choose...</option>
                <option>Uzbekistan</option>
                <option>Russia</option>
                <option>United States</option>
                <option>India</option>
                <option>Afganistan</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>Quận Huyện</label>
              <select name="district" className="form-control"></select>
            </div>
          </div>

          <div className=" form-group">
            <label>Địa chỉ cụ thể</label>
            <input type="text" className="form-control"  />
          </div>

          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary btn-block">
              Đăng ký
            </button>
          </div>
        </form>
        <hr />
        <p className="text-center">
          Bạn đã có tài khoản?
          <Link to="/login">&nbsp; Đăng nhập</Link>
        </p>
      </article>
    </div>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
