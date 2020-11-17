import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Profile(props) {
  const input = useRef(null);
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Trang Cá Nhân</BreadcrumbItem>
        </div>
      </Breadcrumb>

      <section className="container section-name padding-y-sm">
        <div className=" card">
          <div className="card-body row">
            <div className="col-4">
              <aside className=" text-center">
                <div className="form-group">
                  <label htmlFor="avatar" style={{ cursor: "pointer" }}>
                    <img
                      src="http://127.0.0.1:5500/Bootstrap%20UI%20kit%20-%20Create%20e-commerce%20website%20with%20html%20uikit_files/avatar1.jpg"
                      alt=""
                      className="img-lg rounded-circle "
                    />
                  </label>
                  <input
                    id="avatar"
                    name="avatar"
                    className="form-control d-none"
                    type="file"
                    disabled={true}
                  />
                </div>
              </aside>
            </div>
            <div className="col-8">
              <form>
                <div className="form-row">
                  <div className="col form-group">
                    <label>Tên</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col form-group">
                    <label>Họ</label>
                    <input
                      disabled={true}
                      type="text"
                      className="form-control"
                      defaultValue="Nguyễn"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label>Email</label>
                    <input
                      disabled={true}
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-6">
                    <label>Số điện thoại</label>
                    <input
                      disabled={true}
                      type="phone"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* form-group end.// */}
                <div className="form-group">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      disabled={true}
                      className="custom-control-input"
                      type="radio"
                      name="gender"
                      value="1"
                      defaultChecked={true}
                    />
                    <span className="custom-control-label"> Nam </span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input
                      disabled={true}
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
                    <label>Tỉnh / Thành phố</label>
                    <select
                      name="province"
                      className="form-control"
                      defaultValue="test"
                      disabled={true}
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
                    <select name="district" disabled={true} className="form-control"></select>
                  </div>
                </div>

                <div className=" form-group">
                  <label>Địa chỉ cụ thể</label>
                  <input disabled={true} type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Sửa thông tin</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Profile.propTypes = {};

export default Profile;
