import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../../../../../apis/products";

function ItemOrder(props) {
  const { itemOrder } = props;
  const [item, setItem] = useState({
    images: [],
  });
  useEffect(() => {
    getProduct(itemOrder.pid).then((res) => {
      setItem(res.data);
    });
  }, []);
  return (
    <Link to={`/detail/${item.id}`}>
      <figure className="itemside mb-3">
        <div className="aside">
          <img src={item.images[0]} className="img-sm border" alt={item.name} />
        </div>
        <figcaption className="info align-self-center">
          <p className="title">
            {item.name + " - " + itemOrder.color + " , " + itemOrder.size}
          </p>
          <span className="text-muted">{itemOrder.price} x {itemOrder.quantity}</span>
        </figcaption>
      </figure>
    </Link>
  );
}

ItemOrder.propTypes = {
  itemOrder: PropTypes.object,
};
ItemOrder.defaultProps = {
  itemOrder: {},
};

export default ItemOrder;
