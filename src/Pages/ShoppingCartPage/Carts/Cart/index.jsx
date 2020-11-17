import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import InputQuantity from "../../../../shares/InputQuantity";
import { Link } from "react-router-dom";

function Cart(props) {
  return (
    <tr>
      <td>
        <Link to="/detail">
          <figure className="itemside align-items-center">
            <div className="aside">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/10.jpg"
                alt="Teen San Pham"
                className="img-sm"
              />
            </div>
            <figcaption className="info">
              <p to="/detail" className="title text-dark">
                Camera Canon EOS M50 Kit
              </p>
              <p className="text-muted small">
                Size: 25 Mpx,&nbsp;Color: Canon
              </p>
            </figcaption>
          </figure>
        </Link>
      </td>
      <td>
        <InputQuantity />
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">$1156.00</var>
        </div>
      </td>

      <td>
        <div>
          <button className="btn btn-light">
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

Cart.propTypes = {};

export default Cart;
