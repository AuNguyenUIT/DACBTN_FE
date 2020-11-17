import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Gallery(props) {
  return (
    <article className="gallery-wrap">
      <div className="card img-big-wrap">
        <a>
          <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/12.jpg" />
        </a>
      </div>
      {/* card img-big-wrap.// */}
      <div className="thumbs-wrap">
        <div className="item-thumb item-thumb--active">
          <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/12-1.jpg" />
        </div>
        <div className="item-thumb">
          <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/12-2.jpg" />
        </div>
        <div className="item-thumb">
          <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" />
        </div>
        <div className="item-thumb">
          <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg" />
        </div>
      </div>
      {/* thumbs-wrap .// */}
    </article>
  );
}

Gallery.propTypes = {};

export default Gallery;
