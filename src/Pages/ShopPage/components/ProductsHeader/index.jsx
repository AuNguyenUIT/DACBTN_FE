import React from "react";
import PropTypes from "prop-types";

function ProductsHeder(props) {
  const { length } = props;
  return (
    <header className="border-bottom mb-4 pb-3">
      <div className="form-inline">
        <span className="mr-md-auto text-muted">
          {length} &nbsp;Sản phẩm
        </span>
        <select className="mr-2 form-control">
          <option>Latest items</option>
          <option>Trending</option>
          <option>Most Popular</option>
          <option>Cheapest</option>
        </select>
      </div>
    </header>
  );
}

ProductsHeder.propTypes = {
  length: PropTypes.number,
};
ProductsHeder.defaultProps = {
  length: 0,
};

export default ProductsHeder;
