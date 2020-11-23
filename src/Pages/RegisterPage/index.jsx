import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { registerUser } from "../../actions/user";
import { getProvinces } from "../../apis/location";
import RegisterForm from "./components/RegisterForm";

function RegisterPage(props) {
  const [provinces, setProvince] = useState([]);
  useEffect(() => {
    getProvinces().then((res) => {
      setProvince(res.data.data);
    });
  }, []);
  const dispatch = useDispatch(null);
  const handleRegister = (data) => {
    dispatch(
      registerUser({
        id: data.email,
        email: data.email,
        name: data.name,
        surname: data.surname,
        password: data.password,
        address: data.address,
        phoneNum: data.phoneNum,
        gender: data.gender,
        province: data.province,
        district: data.district,
        avatar: "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/c1/85/a9/c185a9f7-09a5-94ef-5726-21a9084fde09/source/256x256bb.jpg",
      })
    );
  };
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Đăng ký</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="container section-content padding-bottom">
        <div className="card mx-auto" style={{ maxWidth: "520px" }}>
          <div className="card-body">
        <header className="mb-4">
              <h4 className="card-title">Đăng ký</h4>
            </header>    
            <RegisterForm
              provinces={provinces}
              handleRegister={handleRegister}
            />
          </div>
        </div>
      </section>
    </>
  );
}

RegisterPage.propTypes = {};

export default RegisterPage;
