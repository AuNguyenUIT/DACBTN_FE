import React from "react";
import PropTypes from "prop-types";
import Product from "./../../../../shares/Product";
import { Link } from "react-router-dom";

function ReComment(props) {
  return (
    <section className="section-name padding-y-sm">
      <header className="section-heading">
        <Link
          to="/shops?type=popular"
          className="btn btn-outline-primary float-right"
        >
          Xem thêm
        </Link>
        <h3 className="section-title">Các sản phẩm liên quan</h3>
      </header>
      <div className="row">
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
  );
}

ReComment.propTypes = {};

export default ReComment;
