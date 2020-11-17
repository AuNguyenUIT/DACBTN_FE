import React from "react";
import PropTypes from "prop-types";
import ItemOrder from "./ItemOrder";
import InfoOrder from "./InfoOrder";
import InfoCustomer from "./InfoCustomer";

function MyOrder(props) {
  return (
    <article className="card order-group mb-4">
      <header className="card-header">
        <InfoOrder />
      </header>
      <div className="card-body">
        <InfoCustomer />
        <hr />
        <div className="row">
          <div className="col-md-4">
            <ItemOrder />
          </div>
          <div className="col-md-4">
            <ItemOrder />
          </div>
          <div className="col-md-4">
            <ItemOrder />
          </div>
          <div className="col-md-4">
            <ItemOrder />
          </div>
          <div className="col-md-4">
            <ItemOrder />
          </div>
        </div>
      </div>
    </article>
  );
}

MyOrder.propTypes = {};

export default MyOrder;
