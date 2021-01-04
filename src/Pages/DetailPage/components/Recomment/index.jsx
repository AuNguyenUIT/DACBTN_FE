import React from "react";
import PropTypes from "prop-types";
import Product from "../../../../shares/Product";
import { Link } from "react-router-dom";

function ReComment(props) {
  const { products, productId, category } = props;
  return products.length > 1 ? (
    <section className="section-name padding-y-sm">
      <header className="section-heading">
        <Link
          to={`/shops?category=${category}`}
          className="btn btn-outline-primary float-right"
        >
          Xem thêm
        </Link>
        <h3 className="section-title">Các sản phẩm liên quan</h3>
      </header>
      <div className="row">
        {products.map((product, index) =>
          product.id !== productId ? (
            <div className="col-6 col-md-3" key={index}>
              <Product product={product} />
            </div>
          ) : null
        )}
      </div>
    </section>
  ) : null;
}

ReComment.propTypes = {
  products: PropTypes.array,
  productId: PropTypes.string,
  category: PropTypes.number,
};

ReComment.defaultProps = {
  products: [],
  productId: "",
  category: 0,
};

export default ReComment;
