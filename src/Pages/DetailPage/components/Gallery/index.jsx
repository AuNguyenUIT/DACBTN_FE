import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Gallery(props) {
  const { images, name } = props;
  const [active, setActive] = useState(0);
  return (
    <article className="gallery-wrap">
      <div className="card img-big-wrap">
        <div>
          <img src={`${images[active]}`} alt={name} />
        </div>
      </div>
      <div className="thumbs-wrap">
        {images.map((image, index) =>
          index === active ? (
            <div className="item-thumb item-thumb--active" key={index}>
              <img src={`${image}`} alt={name} />
            </div>
          ) : (
            <div
              className="item-thumb"
              key={index}
              onClick={() => {
                setActive(index);
              }}
            >
              <img src={`${image}`} alt={name} />
            </div>
          )
        )}
      </div>
      {/* thumbs-wrap .// */}
    </article>
  );
}

Gallery.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
};
Gallery.defaultProps = {
  images: [],
  name: "",
};

export default Gallery;
