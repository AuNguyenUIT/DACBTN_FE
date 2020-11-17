import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import MyOrders from "./components/MyOrders";

function OrdersHistoryPage(props) {
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Lịch sử đặt hàng</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="section-content padding-y-sm">
        <div className="container">
          <MyOrders />
        </div>
      </section>
    </>
  );
}

OrdersHistoryPage.propTypes = {};

export default OrdersHistoryPage;
