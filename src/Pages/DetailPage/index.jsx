import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import InfoProduct from "./components/InfoProduct";
import Comments from "./components/Comments";
import ReComment from "./components/Recomment";

function DetailPage(props) {
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/shops">Sản phẩm</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Tên sản phẩm</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <div className="container">
        <article className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <Gallery />
              </div>
              <div className="col-md-6">
                <InfoProduct />
              </div>
            </div>
          </div>
        </article>
        <Comments />
        <ReComment />
      </div>
    </>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
