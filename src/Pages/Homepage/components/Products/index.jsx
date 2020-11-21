import React from "react";
import PropTypes from "prop-types";
import Product from "../../../../shares/Product";

function Products(props) {
  const { products } = props;
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};
Products.defaultProps = {
  products: [],
};
export default Products;
