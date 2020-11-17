import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";


function RegisterPage(props) {
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
        <RegisterForm />
      </section>
    </>
  );
}

RegisterPage.propTypes = {};

export default RegisterPage;
