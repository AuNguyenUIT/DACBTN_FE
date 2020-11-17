import React from "react";
import PropTypes from "prop-types";
import Product from "../../../../shares/Product";

function Products(props) {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
      </div>
    </>
  );
}

Products.propTypes = {};

export default Products;
