import React from "react";
import PropTypes from "prop-types";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "react-awesome-slider/dist/styles.css";
import "./style.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Intro(props) {
  return (
    <section className="section-intro">
      <div className="intro-banner-wrap">
        <AutoplaySlider
          cssModule={{}}
          className="aws-btn"
          play={true}
          cancelOnInteraction={false}
          interval={3000}
          bullets={false}
        >
          <div data-src="https://thegioidohoa.com/wp-content/uploads/2015/10/thiet-ke-banner-an-tuong-cho-web-thoi-trang.jpeg" />
          <div data-src="http://thegioidohoa.com/wp-content/uploads/2015/10/thiet-ke-banner-an-tuong-cho-web-thoi-trang1.jpg" />
          <div data-src="http://thegioidohoa.com/wp-content/uploads/2015/10/thiet-ke-banner-an-tuong-cho-web-thoi-trang4.jpg" />
        </AutoplaySlider>
      </div>
    </section>
  );
}

Intro.propTypes = {};

export default Intro;
