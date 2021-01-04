import { FastField, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import InputField from "../../../../shares/Custom-Fields/InputField";
import InputQuantity from "../../../../shares/Custom-Fields/InputQuantity";
import Rating from "../../../../shares/Rating";
import "./style.scss";

function InfoProduct(props) {
  const { product, handleAddToCart } = props;
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
      <Formik
        initialValues={{
          size: "",
          color: "",
          quantity: 1,
        }}
        onSubmit={(values) => {
          handleAddToCart(values);
        }}
      >
        {(props) => {
          const { values, setFieldTouched, setFieldValue } = props;
          return (
            <Form>
              <div className="form-group">
                <label>Chọn size</label>
                <div>
                  {product.sizes
                    ? product.sizes.map((size, index) => (
                        <FastField name="size" key={index}>
                          {({ field, form }) => (
                            <>
                              <InputField
                                form={form}
                                field={field}
                                value={size}
                                label={size}
                                type="radio"
                              />
                            </>
                          )}
                        </FastField>
                      ))
                    : null}
                </div>
              </div>
              <div className="form-group">
                <label>Chọn màu</label>
                <div>
                  {product.colors
                    ? product.colors.map((color, index) => (
                        <FastField name="color" key={index}>
                          {({ field, form }) => (
                            <>
                              <InputField
                                form={form}
                                field={field}
                                value={color}
                                label={color}
                                type="radio"
                              />
                            </>
                          )}
                        </FastField>
                      ))
                    : null}
                </div>
              </div>
              <div className="form-group flex-grow-0 row align-items-center justify-content-start">
                <div className="col">
                  <label>Số lượng</label>
                  <br />
                  <FastField
                    component={InputQuantity}
                    name="quantity"
                    label="Số Lượng"
                    value={values.quantity}
                    max={product.inventory}
                    setFieldTouched={setFieldTouched}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div className="col">
                  <var className="text-muted">
                    Còn &nbsp;{product.inventory}&nbsp; Sản Phẩm
                  </var>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                <span className="text">Thêm vào giỏ</span>
                <i className="fa fa-shopping-cart" />
              </button>
            </Form>
          );
        }}
      </Formik>

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
