import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Intro(props) {
  return (
    <section className="section-intro">
      <div className="intro-banner-wrap">
        <img
          src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/banners/1.jpg"
          className="w-100 img-fluid"
          alt="intro"
        />
      </div>
    </section>
  );
}

Intro.propTypes = {};

export default Intro;
