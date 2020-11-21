import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import Rating from "../../../../shares/Rating";
import InputQuantity from "../../../../shares/InputQuantity";

function InfoProduct(props) {
  const { product } = props;
  return (
    <article className="content-body">
      <h2 className="title">{product.name}</h2>
      <div className="rating-wrap my-3">
        <Rating />
        <small className="label-rating text-muted">132 Đánh giá</small>
        <small className="label-rating text-success">
          <i className="fa fa-clipboard-check" /> {product.quanSold} Đã bán
        </small>
      </div>
      {/* rating-wrap.// */}
      <div className="mb-3">
        <var className="price h4">
          {" "}
          {new Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price - (product.price * product.discount) / 100)}
        </var>
      </div>
      <p>{product.description}</p>
      <dl className="row">
        <dt className="col-sm-3">Mẫu</dt>
        <dd className="col-sm-9">
          {product.model ? product.model : "Không có thông tin"}
        </dd>
        <dt className="col-sm-3">Chất Liệu</dt>
        <dd className="col-sm-9">Vãi lụa</dd>
        <dt className="col-sm-3">Xuất Xứ</dt>
        <dd className="col-sm-9">
          {product.madeIn ? product.madeIn : "Không có thông tin"}
        </dd>
      </dl>
      <hr />

      <div className="form-group">
        <label>Chọn size</label>
        <div>
          {product.sizes
            ? product.sizes.map((size, index) => (
                <label className="checkbox-btn" key={index}>
                  <input
                    type="radio"
                    name="option_size"
                    defaultChecked
                    value={size}
                  />
                  <span className="btn btn-light"> {size}</span>
                </label>
              ))
            : null}
        </div>
      </div>
      <div className="form-group">
        <label>Chọn màu</label>
        <div>
          {product.colors
            ? product.colors.map((color, index) => (
                <label className="checkbox-btn" key={index}>
                  <input
                    type="radio"
                    name="option_color"
                    defaultChecked
                    value={color}
                  />
                  <span className="btn btn-light"> {color}</span>
                </label>
              ))
            : null}
        </div>
      </div>
      <div className="form-group flex-grow-0 row align-items-center justify-content-start">
        <div className="col">
          <label>Số lượng</label>
          <br />
          <InputQuantity max={product.inventory} />
        </div>
        <div className="col">
          <var className="text-muted">
            Còn &nbsp;{product.inventory}&nbsp; Sản Phẩm
          </var>
        </div>
      </div>
      <button className="btn btn-primary">
        <span className="text">Thêm vào giỏ</span>
        <i className="fa fa-shopping-cart" />
      </button>
      {/* col.// */}
    </article>
  );
}

InfoProduct.propTypes = {
  product: PropTypes.object,
};
InfoProduct.defaultProps = {
  product: {
    sizes: [],
    colors: [],
  },
};

export default InfoProduct;
