import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar navbar-main navbar-expand-lg border-bottom ">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link to="/shops?cate=ao" className="nav-link">
              <strong>All category</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shops?cate=ao" className="nav-link">
              Áo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shops?cate=ao" className="nav-link">
              Quần
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shops?cate=ao" className="nav-link">
              Giày
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shops?cate=ao" className="nav-link">
              Baby &amp; Toys
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
