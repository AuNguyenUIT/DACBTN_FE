import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { getOrders } from "../../apis/order";
import MyOrders from "./components/MyOrders";

function OrdersHistoryPage(props) {
  const [orders, setOrders] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    getOrders({ uid: currentUser.id }).then((res) => {
      setOrders(res.data);
    });
  }, []);
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
          <MyOrders orders={orders.reverse()} />
        </div>
      </section>
    </>
  );
}

OrdersHistoryPage.propTypes = {};

export default OrdersHistoryPage;
