import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProduct } from "../../../../../apis/products";
import { addDetailOrder } from "../../../../../apis/detailOrder";
import { deleteCart } from "../../../../../apis/carts";
import { useDispatch } from "react-redux";

function CheckoutItem(props) {
  const { cart, price, idOrder } = props;
  const [product, setProduct] = useState({
    images: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getProduct(cart.pid)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    cart.quantity * product.price && price(cart.quantity * product.price);
  }, [product]);
  useEffect(() => {
    if (idOrder) {
      const detail = {
        oid: idOrder,
        pid: product.id,
        price: product.price,
        size: cart.size,
        color: cart.color,
        quantity: cart.quantity,
      };
      addDetailOrder(detail).then(() => {
        deleteCart(cart.id);
      });
    }
  }, [idOrder]);
  return (
    <div className="col-md-6">
      <Link to={`/detail/${product.id}`} className="itemside mb-3">
        <div className="aside">
          <img
            src={`${product.images[0]}`}
            className="border img-sm"
            alt={`${product.name}`}
          />
        </div>
        <figcaption className="info">
          <p>{product.name + "-" + cart.size + "-" + cart.color}</p>
          <span>
            {cart.quantity +
              "x" +
              new Intl.NumberFormat("vn-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price) +
              "=" +
              new Intl.NumberFormat("vn-VN", {
                style: "currency",
                currency: "VND",
              }).format(cart.quantity * product.price)}
          </span>
        </figcaption>
      </Link>
    </div>
  );
}

CheckoutItem.propTypes = {
  cart: PropTypes.object,
  price: PropTypes.func,
};
CheckoutItem.defaultProps = {
  cart: {},
  price: null,
};

export default CheckoutItem;
