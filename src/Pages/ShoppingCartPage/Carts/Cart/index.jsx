import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import InputQuantity from "../../../../shares/InputQuantity";
import { Link } from "react-router-dom";
import { getProduct } from "../../../../apis/products";
import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../../../actions/carts";

import ModalConfirm from "../../../../shares/Modal";

function Cart(props) {
  const { cart, price } = props;
  const [product, setProduct] = useState({
    images: [],
  });
  const dispatch = useDispatch();
  const refRemove = useRef(null);

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
  const handleChangeQuantity = (data) => {
    if (data === 0) {
      refRemove.current.click();
    } else {
      cart.quantity * product.price &&
        price((data - cart.quantity) * product.price);
      const payload = {
        data: {
          ...cart,
          quantity: data,
        },
        id: cart.id,
      };
      dispatch(updateCart(payload));
    }
  };
  const handleDeleCartItem = (isConfirm, id) => {
    if (isConfirm) {
      price(-cart.quantity * product.price);
      dispatch(deleteCart(id));
    }
  };

  return (
    <tr className='text-center'>
      <td width='40%'>
        <Link to={`/detail/${product.id}`}>
          <figure className="itemside align-items-center">
            <div className="aside">
              <img
                src={`${product.images[0]}`}
                alt={`${product.name}`}
                className="img-sm"
              />
            </div>
            <figcaption className="info">
              <p to="/detail" className="title text-dark">
                {product.name}
              </p>
              <p className="text-muted small">
                Size: {cart.size},&nbsp;Color: {cart.color}
              </p>
            </figcaption>
          </figure>
        </Link>
      </td>
      <td width="30%">
        <InputQuantity
          quantity={+cart.quantity}
          handleChangeQuantity={handleChangeQuantity}
          max={product.inventory}
        />
      </td>
      <td width="20%">
        <div className="price-wrap">
          <var className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.quantity * product.price)}</var>
        </div>
      </td>

      <td width="10%">
        <div>
          <ModalConfirm
            buttonLabel={
              <i ref={refRemove} className="fa fa-times" aria-hidden="true"></i>
            }
            message={"Bạn có chắc chắn muỗn xóa sản phẩm này?"}
            handleAction={handleDeleCartItem}
            item={cart}
          />
        </div>
      </td>
    </tr>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
  price: PropTypes.func,
};
Cart.defaultProps = {
  cart: {},
  price: null,
};

export default Cart;
