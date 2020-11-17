import React from "react";
import PropTypes from "prop-types";

import "./style.scss";
import Comment from "./Comment";
import Rating from "../../../../shares/Rating";

function Comments(props) {
  return (
    <div className="padding-y-sm">
      <header className="section-heading">
        <h3>Đánh giá của người dùng</h3>
        <div className="rating-wrap">
          <Rating />
          <strong className="label-rating text-lg">
            4.5 <span className="text-muted">| 112 Đánh giá</span>
          </strong>
        </div>
      </header>
      <article className="box padding-y-sm">
        <Comment />
      </article>
      <article className="box padding-y-sm">
        <Comment />
      </article>
      <article className="box padding-y-sm">
        <Comment />
      </article>
      <article className="box padding-y-sm">
        <Comment />
      </article>
      <article className="box padding-y-sm">
        <Comment />
      </article>
      <article className="box padding-y-sm">
        <Comment />
      </article>
      <article className="box padding-y-sm">
        <Comment />
      </article>
    </div>
  );
}

Comments.propTypes = {};

export default Comments;
