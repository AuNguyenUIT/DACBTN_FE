import React, { useState } from "react";
import PropTypes from "prop-types";
import Carts from "./Carts";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";

function ShoppingCartPage(props) {
  const carts = useSelector((state) => state.carts);
  const [price, setPrice] = useState(0);

  const totalPrice = (total) => {
    setPrice(total);
  };

  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/shops">Sản Phẩm</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Giỏ Hàng</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row">
            <aside className="col-lg-9">
              <Carts carts={carts} totalPrice={totalPrice} />
            </aside>
            <aside className="col-lg-3">
              <CartTotal totalPricce={price} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

ShoppingCartPage.propTypes = {};

export default ShoppingCartPage;
