import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../shares/Custom-Fields/InputField";
import Select from "react-select";
import * as Yup from "yup";
import { getDistrict, getProvinces } from "../../../../apis/location";
const profileSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Không đúng định dạng email")
    .required("Yêu cầu nhập email"),

  name: Yup.string().required("Yêu cầu nhập tên"),
  surname: Yup.string().required("Yêu cầu nhập tên"),
  gender: Yup.string().required("Yêu cầu chọn giới tính"),
  address: Yup.string().required("Yêu cầu nhập địa chỉ"),
  province: Yup.number().required("Yêu cầu chọn tỉnh"),
  district: Yup.number().required("Yêu cầu chọn huyện"),
});
function ProfileInfo(props) {
  const { currentUser, handleUpdateProfile } = props;

  const [provinces, setProvinces] = useState([]);
  const provinceOptions = provinces.map((province) => ({
    value: province.ProvinceID,
    label: province.ProvinceName,
  }));
  const [selectProvince, setSelectProvince] = useState({
    label: "",
    value: "",
  });

  const [districts, setDistricts] = useState([]);
  const districtsOption = districts.map((districts) => ({
    value: districts.DistrictID,
    label: districts.DistrictName,
  }));
  const [selectDistrict, setSelectDistrict] = useState({
    label: "",
    value: "",
  });

  //Lấy Tỉnh Thành Phố Hiện Tại
  useEffect(() => {
    getProvinces().then((res) => {
      setProvinces(res.data.data);
      const data = res.data.data.find((province) => {
        return province.ProvinceID === currentUser.province;
      });
      setSelectProvince({
        value: data.ProvinceID,
        label: data.ProvinceName,
      });
    });
  }, []);

  //Lấy Huyện Hiện Tại
  useEffect(() => {
    getDistrict({ province_id: currentUser.province }).then((res) => {
      setDistricts(res.data.data);
      const data = res.data.data.find((district) => {
        return district.DistrictID === currentUser.district;
      });
      setSelectDistrict({
        value: data.DistrictID,
        label: data.DistrictName,
      });
    });
  }, []);

  return (
    <Formik
      initialValues={currentUser}
      onSubmit={(values) => {
        handleUpdateProfile(values, "INFO");
      }}
      validationSchema={profileSchema}
    >
      {(props) => {
        const {
          values,
          errors,
          touched,
          setFieldTouched,
          setFieldValue,
        } = props;
        const disabled =
          values.name === currentUser.name &&
          values.surname === currentUser.surname &&
          values.province === currentUser.province &&
          values.district === currentUser.district &&
          values.gender === currentUser.gender &&
          values.address === currentUser.address;
        return (
          <Form>
            <div className="form-row">
              <div className="col">
                <FastField name="name" label="Tên" component={InputField} />
              </div>

              <div className="col">
                <FastField name="surname" label="Họ" component={InputField} />
              </div>
            </div>

            <div className="form-row">
              <div className="col-6">
                <FastField
                  name="email"
                  label="email"
                  type="email"
                  disable={true}
                  component={InputField}
                />
              </div>
              <div className=" col-6">
                <FastField
                  name="phoneNum"
                  label="Số điện thoại"
                  type="text"
                  disable={true}
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
              <div className="form-group col-md-6">
                <label>Tỉnh / Thành phố</label>
                <Select
                  name="province"
                  options={provinceOptions}
                  placeholder="Chọn Tỉnh"
                  value={selectProvince}
                  onChange={(value) => {
                    setSelectProvince(value);
                    setFieldTouched("province", true);
                    setFieldValue("province", value.value);
                    setFieldValue("district", "");
                    getDistrict({ province_id: value.value }).then((res) => {
                      setDistricts(res.data.data);
                    });
                  }}
                  onBlur={() => {
                    setFieldTouched("province", true);
                    setFieldValue("province", values.province);
                  }}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor:
                        errors["province"] && touched["province"]
                          ? "#dc3545"
                          : "#ced4da",
                      boxShadow: "none",
                    }),
                  }}
                />
                {errors["province"] && touched["province"] && (
                  <small className="text-danger">{errors["province"]}</small>
                )}
              </div>
              <div className="form-group col-md-6">
                <label>Quận / Huyện</label>
                <Select
                  name="district"
                  options={districtsOption}
                  placeholder="Chọn Huyện"
                  value={selectDistrict}
                  onChange={(value) => {
                    setSelectDistrict(value);
                    setFieldTouched("district", true);
                    setFieldValue("district", value.value);
                  }}
                  onBlur={() => {
                    setFieldTouched("district", true);
                    setFieldValue("district", values.district);
                  }}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor:
                        errors["province"] && touched["province"]
                          ? "#dc3545"
                          : "#ced4da",
                      boxShadow: "none",
                    }),
                  }}
                />
                {errors["district"] && touched["district"] && (
                  <small className="text-danger">{errors["district"]}</small>
                )}
              </div>
            </div>

            <div className=" form-group">
              <FastField
                name="address"
                label="Địa chỉ cụ thể"
                type="text"
                component={InputField}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" disabled={disabled}>
                Cập Nhật thông tin
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

ProfileInfo.propTypes = {
  currenUser: PropTypes.object,
  handleUpdateProfile: PropTypes.func,
};
ProfileInfo.defaultProps = {
  currentUser: {},
  handleUpdateProfile: () => {},
};
export default ProfileInfo;
