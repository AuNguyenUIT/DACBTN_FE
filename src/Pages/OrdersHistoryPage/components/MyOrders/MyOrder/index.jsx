import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ItemOrder from "./ItemOrder";
import InfoOrder from "./InfoOrder";
import InfoCustomer from "./InfoCustomer";
import { useState } from "react";
import { getItemsOrder } from "../../../../../apis/detailOrder";

function MyOrder(props) {
  const { order } = props;
  const [itemsOrder, setItemsOrder] = useState([]);
  useEffect(() => {
    getItemsOrder({ oid: order.id }).then((res) => {
      setItemsOrder(res.data);
    });
  }, []);
  return (
    <article className="card order-group mb-4">
      <header className="card-header">
        <InfoOrder order={order} />
      </header>
      <div className="card-body">
        <InfoCustomer order={order}/>
        <hr />
        <div className="row">
          {itemsOrder.map((itemOrder, index) => (
            <div className="col-md-4" key={index}>
              <ItemOrder itemOrder={itemOrder} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

MyOrder.propTypes = {
  order: PropTypes.object,
};
MyOrder.propTypes = {
  order: {},
};

export default MyOrder;
