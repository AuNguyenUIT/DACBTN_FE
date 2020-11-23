import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { loginUser } from "../../actions/user";
import LoginForm from "./components/LoginForm";

function LoginPage(props) {
  const dispatch = useDispatch(null);
  const handleLogin = (data) => {
    dispatch(loginUser(data));
  };
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
        <div className="card mx-auto" style={{ maxWidth: "380px" }}>
          <div className="card-body">
            <header className="mb-4">
              <h4 className="card-title mb-4">Đăng nhập</h4>
            </header>

            <LoginForm handleLogin={handleLogin} />
          </div>
        </div>
      </section>
    </>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
