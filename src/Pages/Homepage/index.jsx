import React from "react";
import PropTypes from "prop-types";
import Product from "./../../shares/Product";
import Specials from "./components/Specials";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";
// import { Nav } from "reactstrap";

function HomePage(props) {
  return (
    <>
      <Nav />
      <Intro />
      <div className="container">
        <Specials />
        <section className="section-name padding-y-sm">
          <header className="section-heading">
            <Link
              to="/shops?type=popular"
              className="btn btn-outline-primary float-right"
            >
              Xem thêm
            </Link>
            <h3 className="section-title">Popular products</h3>
          </header>
          <div className="row">
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
          </div>
        </section>
        <section className="section-name padding-y-sm">
          <header className="section-heading">
            <Link
              to="/shops?type=new"
              className="btn btn-outline-primary float-right"
            >
              Xem thêm
            </Link>
            <h3 className="section-title">New products</h3>
          </header>
          <div className="row">
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
            <div className="col-md-3">
              <Product />
            </div>
            {/* col.// */}
          </div>
        </section>
      </div>
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
