import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import CheckoutInfo from "./components/CheckoutInfo";
import CheckoutList from "./components/CheckoutList";
import CheckoutTotal from "./components/CheckoutTotal";
import "./style.scss";

function CheckoutPage(props) {
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Thanh toán</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="container section-name padding-y-sm">
        <div className="row">
          <div className="col-7">
            <div className="card mb-3">
              <article className="card-body">
                <header className="mb-4">
                  <h4 className="card-title">Giỏ Hàng</h4>
                </header>
                <CheckoutList />
              </article>
              <article className="card-body border-top">
                <CheckoutTotal />
              </article>
            </div>
          </div>
          <div className="col-5">
            <CheckoutInfo />
          </div>
        </div>
      </section>
    </>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
