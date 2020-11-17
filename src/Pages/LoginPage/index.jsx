import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function LoginPage(props) {
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex ">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Đăng nhập</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="container section-content padding-bottom">
        <LoginForm />
      </section>
    </>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
