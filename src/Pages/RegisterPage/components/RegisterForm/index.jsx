import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import * as Yup from "yup";
import { getDistrict } from "../../../../apis/location";
import InputField from "../../../../shares/Custom-Fields/InputField";

//Validation
const phoneVN = /((09|03|07|08|05)+([0-9]{8})\b)/g;
const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Không đúng định dạng email")
    .required("Yêu cầu nhập email"),
  password: Yup.string().min(6, "Quá Ngắn").required("Yêu cầu nhập"),
  passwordConf: Yup.string()
    .min(6, "Quá Ngắn")
    .required("Yêu cầu nhậ")
    .oneOf([Yup.ref("password"), null], "Mật Khẩu không khớp"),
  name: Yup.string().required("Yêu cầu nhập tên"),
  surname: Yup.string().required("Yêu cầu nhập tên"),
  gender: Yup.string().required("Yêu cầu chọn giới tính"),
  phoneNum: Yup.string()
    .required("Yêu cầu nhập số điện thoại")
    .matches(phoneVN, "Sai định dạng"),
  address: Yup.string().required("Yêu cầu nhập địa chỉ"),
  province: Yup.number().required("Yêu cầu chọn tỉnh"),
  district: Yup.number().required("Yêu cầu chọn huyện"),
});

function RegisterForm(props) {
  const { provinces, handleRegister } = props;

  const provincesOption = provinces.map((province) => ({
    value: province.ProvinceID,
    label: province.ProvinceName,
  }));
  const [districts, setDistrict] = useState([]);
  const districtsOption = districts.map((districts) => ({
    value: districts.DistrictID,
    label: districts.DistrictName,
  }));

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConf: "",
        address: "",
        phoneNum: "",
        gender: "male",
        province: "",
        district: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        handleRegister(values);
      }}
    >
      {(formikProps) => {
        const {
          values,
          errors,
          touched,
          setFieldTouched,
          setFieldValue,
        } = formikProps;
        return (
          <Form action="#">
            <div className="form-row">
              <div className="col">
                <FastField
                  name="name"
                  label="Tên"
                  placeholder="Nhập tên"
                  component={InputField}
                />
              </div>
              <div className="col">
                <FastField
                  name="surname"
                  label="Họ"
                  placeholder="Nhập họ"
                  component={InputField}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="col">
                <FastField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Nhập email"
                  component={InputField}
                />
              </div>
              <div className="col-6">
                <FastField
                  name="phoneNum"
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  component={InputField}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="gender">Giới Tính</label>
              <br />
              <FastField name="gender">
                {({ field, form }) => (
                  <>
                    <InputField
                      form={form}
                      field={field}
                      value="male"
                      label="Nam"
                      type="radio"
                    />
                    <InputField
                      form={form}
                      field={field}
                      value="female"
                      label="Nữ"
                      type="radio"
                    />
                  </>
                )}
              </FastField>
            </div>

            <div className="form-row">
              <div className="col-6">
                <FastField
                  name="password"
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu"
                  component={InputField}
                />
              </div>

              <div className="col-6">
                <FastField
                  name="passwordConf"
                  type="password"
                  label="Xác nhận mật khẩu"
                  placeholder="Nhập lại mật khẩu"
                  component={InputField}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="province">Tỉnh / Thành phố</label>
                <Select
                  onChange={(value) => {
                    setFieldTouched("province", true);
                    setFieldValue("province", value.value);
                    setFieldValue("district", "");
                    getDistrict({ province_id: value.value }).then((res) => {
                      setDistrict(res.data.data);
                    });
                  }}
                  onBlur={() => {
                    setFieldTouched("province", true);
                    setFieldValue("province", values.province);
                  }}
                  id={"province"}
                  options={provincesOption}
                  placeholder={"Chọn Tỉnh"}
                />
                {errors["province"] && touched["province"] && (
                  <small className="text-danger">{errors["province"]}</small>
                )}
              </div>

              <div className="col-md-6 form-group">
                <label htmlFor="district">Tỉnh / Thành phố</label>
                <Select
                  onChange={(value) => {
                    setFieldTouched("district", true);
                    setFieldValue("district", value.value);
                  }}
                  onBlur={(value) => {
                    setFieldTouched("district", true);
                  }}
                  id={"district"}
                  options={districtsOption}
                  placeholder={"Chọn Huyện"}
                  isDisabled={values.province ? false : true}
                />
                {errors["district"] && touched["district"] && (
                  <small className="text-danger">{errors["district"]}</small>
                )}
              </div>
            </div>

            <FastField
              name="address"
              label="Địa chỉ"
              placeholder="Nhập lại địa chỉ"
              component={InputField}
            />

            <div className="form-group mt-3">
              <button type="submit" className="btn btn-primary btn-block">
                Đăng ký
              </button>
            </div>
            <hr />
            <p className="text-center">
              Bạn đã có tài khoản?
              <Link to="/login">&nbsp; Đăng nhập</Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
}

RegisterForm.propTypes = {
  provinces: PropTypes.array,
  handleRegister: PropTypes.func,
};
RegisterForm.defaultValue = {
  provinces: [],
  handleRegister: null,
};

export default RegisterForm;
