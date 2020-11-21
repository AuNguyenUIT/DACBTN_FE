import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { Link } from "react-router-dom";
import ProductsHeder from "./components/ProductsHeader";
import FilterProduct from "./components/Filter";
import Products from "./components/Products";
import Pagination from "./components/Pagination";
import { getProducts } from "../../apis/products";

function ShopPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts({ _limit: 20, _page: 1 }).then((res) => {
      setProducts(res.data);
    });
  }, []);
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
              <ProductsHeder length={products.length} />
              <Products products={products} />
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
