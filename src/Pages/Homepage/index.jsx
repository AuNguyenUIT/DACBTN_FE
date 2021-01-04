import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../apis/products";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Specials from "./components/Specials";
// import { Nav } from "reactstrap";

function HomePage(props) {
  const categories = useSelector((state) => state.categories);
  const [popularProducts, setPopularProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    getProducts({
      _limit: 4,
      _page: 1,
      _sort: "quanSold",
      _order: "desc",
    }).then((Response) => {
      setPopularProducts(Response.data);
    });
    getProducts({
      _limit: 4,
      _page: 1,
      _sort: "createAt",
      _order: "desc",
    }).then((Response) => {
      setNewProducts(Response.data);
    });
  }, []);
  return (
    <>
      <Nav categories={categories} />
      <Intro />
      <div className="container">
        <section className="section-name padding-y-sm">
          <header className="section-heading">
            <Link
              to="/shops?_sort=quanSold&amp;_order=desc"
              className="btn btn-outline-primary float-right"
            >
              Xem thêm
            </Link>
            <h3 className="section-title">Sản phẩm bán chạy</h3>
          </header>
          <Products products={popularProducts} />
        </section>
        <Specials />
        <section className="section-name padding-y-sm">
          <header className="section-heading">
            <Link
              to="/shops?_sort=createAt&amp;_order=desc"
              className="btn btn-outline-primary float-right"
            >
              Xem thêm
            </Link>
            <h3 className="section-title">Sản phẩm mới</h3>
          </header>
          <Products products={newProducts} />
        </section>
      
      </div>
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
