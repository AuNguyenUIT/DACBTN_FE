import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

function Nav(props) {
  const { categories } = props;
  return (
    <nav className="navbar navbar-main navbar-expand-lg border-bottom ">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link to="/shops" className="nav-link">
              <strong>All category</strong>
            </Link>
          </li>
          {categories.map((category) => (
            <li className="nav-item" key={category.id}>
              <Link to={`/shops?category=${category.id}`} className="nav-link">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  categories: PropTypes.array,
};
Nav.defaultProps = {
  categories: [],
};

export default Nav;
