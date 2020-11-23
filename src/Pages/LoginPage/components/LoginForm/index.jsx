import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../../../../shares/Custom-Fields/InputField";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Không đúng định dạng email")
    .required("Yêu cầu nhập email"),
  password: Yup.string().min(6, "Quá Ngắn").required("Yêu cầu nhập"),
});

function LoginForm(props) {
  const { handleLogin } = props;
  const initialValues = {
    email: "",
    password: "",
    isRemember: false,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {(props) => {
          const { values, handleChange, handleBlur } = props;
          return (
            <Form>
              <FastField
                component={InputField}
                name="email"
                label="Email"
                type="email"
                placeholder="ex.name@gmail.com"
              />

              <div className="form-group">
                <Link to="forgot" className="float-right">
                  Quên mật khẩu
                </Link>
                <FastField
                  component={InputField}
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  placeholder="*****************"
                />
              </div>

              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    name="isRemember"
                    className="custom-control-input"
                    value={values.isRemember}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="custom-control-label">Duy trì đăng nhập</div>
                </label>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Đăng nhập
                </button>
              </div>

              <div className="card-footer text-center">
                Bạn chưa có tài khoản?
                <Link to="/register">&nbsp; Đăng ký</Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
};
LoginForm.defaultProps = {
  handleLogin: () => {},
};
export default LoginForm;
