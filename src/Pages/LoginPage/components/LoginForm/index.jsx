import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <div className="card mx-auto" style={{ maxWidth: "380px" }}>
      <div className="card-body">
        <h4 className="card-title mb-4">Đăng nhập</h4>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              className="form-control"
              placeholder="ex. name@gmail.com"
              type="email"
            />
          </div>

          <div className="form-group">
            <Link to="forgot" className="float-right">
              Quên mật khẩu
            </Link>
            <label>Mật khẩu</label>
            <input
              className="form-control"
              placeholder="*****************"
              type="password"
              name="password"
            />
          </div>

          <div className="form-group">
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">Duy trì đăng nhập</div>
            </label>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <div className="card-footer text-center">
        Bạn chưa có tài khoản?
        <Link to="/register">&nbsp; Đăng ký</Link>
      </div>
    </div>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
