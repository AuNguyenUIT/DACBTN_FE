import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { Link } from "react-router-dom";
import ProductsHeder from "./components/ProductsHeader";
import FilterProduct from "./components/Filter";
import Products from "./components/Products";
import Pagination from "./components/Pagination";

function ShopPage(props) {
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Sản Phẩm</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <FilterProduct />
            </aside>
            <div className="col-9">
              <ProductsHeder />
              <Products />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ShopPage.propTypes = {};

export default ShopPage;
