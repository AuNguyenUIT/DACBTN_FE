import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Rating from "../../../../../shares/Rating";

function Comment(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="icontext w-100">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/avatars/avatar1.jpg"
              className="img-xs img icon rounded-circle w-20"
              alt="name"
            />
            <div className="text">
              <span className="date text-muted float-md-right">24.04.2020</span>
              <h6 className="mb-1">Mike John</h6>
              <Rating />
              <span className="label-rating text-warning">Good</span>
            </div>
          </div>
          <div className="mt-3">
            <p>
              Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Comment.propTypes = {};

export default Comment;
