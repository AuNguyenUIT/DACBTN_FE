import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import Rating from "../../../../shares/Rating";
import InputQuantity from "../../../../shares/InputQuantity";

function InfoProduct(props) {
  return (
    <article className="content-body">
      <h2 className="title">Off-White Odsy-1000 Low-Top Sneakers</h2>
      <div className="rating-wrap my-3">
        <Rating />
        <small className="label-rating text-muted">132 Đánh giá</small>
        <small className="label-rating text-success">
          <i className="fa fa-clipboard-check" /> 154 Đã bán
        </small>
      </div>
      {/* rating-wrap.// */}
      <div className="mb-3">
        <var className="price h4">815.000 VND</var>
      </div>
      <p>
        Mô tả của sản phẩm. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis enim quasi iure odio tempore. A minus neque sit placeat
        voluptatibus beatae in optio explicabo eaque nemo. Possimus molestiae
        recusandae perferendis?
      </p>
      <dl className="row">
        <dt className="col-sm-3">Mẫu</dt>
        <dd className="col-sm-9">Odsy-1000</dd>
        <dt className="col-sm-3">Chất Liệu</dt>
        <dd className="col-sm-9">Vãi lụa</dd>
        <dt className="col-sm-3">Xuất Xứ</dt>
        <dd className="col-sm-9">Russia, USA, and Europe</dd>
      </dl>
      <hr />

      <div className="form-group">
        <label>Chọn size</label>
        <div>
          <label className="checkbox-btn">
            <input type="radio" name="option_size" defaultChecked />
            <span className="btn btn-light"> XS </span>
          </label>
          <label className="checkbox-btn">
            <input type="radio" name="option_size" />
            <span className="btn btn-light"> M </span>
          </label>
          <label className="checkbox-btn">
            <input type="radio" name="option_size" />
            <span className="btn btn-light"> LG </span>
          </label>
          <label className="checkbox-btn">
            <input type="radio" name="option_size" />
            <span className="btn btn-light"> XXL </span>
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Chọn màu</label>
        <div>
          <label className="checkbox-btn">
            <input type="radio" name="option_color" defaultChecked />
            <span className="btn btn-light"> Đỏ </span>
          </label>
          <label className="checkbox-btn">
            <input type="radio" name="option_color" />
            <span className="btn btn-light"> Trắng </span>
          </label>
          <label className="checkbox-btn">
            <input type="radio" name="option_color" />
            <span className="btn btn-light"> Cam </span>
          </label>
          <label className="checkbox-btn">
            <input type="radio" name="option_color" />
            <span className="btn btn-light"> Vàng </span>
          </label>
        </div>
      </div>
      <div className="form-group flex-grow-0">
        <label>Số lượng</label>
        <br />
        <InputQuantity />
      </div>
      <button className="btn btn-primary">
        <span className="text">Thêm vào giỏ</span>
        <i className="fa fa-shopping-cart" />
      </button>
      {/* col.// */}
    </article>
  );
}

InfoProduct.propTypes = {};

export default InfoProduct;
