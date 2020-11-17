import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Specials(props) {
  return (
    <section className="section-specials padding-y border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <figure className="itemside">
              <div className="aside">
                <span className="icon icon-sm rounded-circle bg-primary">
                  <i className="fa fa-money white" />
                </span>
              </div>
              <figcaption className="info">
                <h6 className="title">Reasonable prices</h6>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labor
                </p>
              </figcaption>
            </figure>
            {/* iconbox // */}
          </div>
          {/* col // */}
          <div className="col-md-4">
            <figure className="itemside">
              <div className="aside">
                <span className="icon icon-sm rounded-circle bg-danger">
                  <i className="fa fa-commenting white" />
                </span>
              </div>
              <figcaption className="info">
                <h6 className="title">Customer support 24/7</h6>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labor
                </p>
              </figcaption>
            </figure>
            {/* iconbox // */}
          </div>
          {/* col // */}
          <div className="col-md-4">
            <figure className="itemside">
              <div className="aside">
                <span className="icon icon-sm rounded-circle bg-success">
                  <i className="fa fa-truck white" />
                </span>
              </div>
              <figcaption className="info">
                <h6 className="title">Quick delivery</h6>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labor
                </p>
              </figcaption>
            </figure>
            {/* iconbox // */}
          </div>
          {/* col // */}
        </div>
        {/* row.// */}
      </div>
      {/* container.// */}
    </section>
  );
}

Specials.propTypes = {};

export default Specials;
