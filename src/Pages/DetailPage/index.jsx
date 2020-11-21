import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { getProduct, getProducts } from "../../apis/products";
import Comments from "./components/Comments";
import Gallery from "./components/Gallery";
import InfoProduct from "./components/InfoProduct";
import ReComment from "./components/Recomment";

function DetailPage(props) {
  const { match, history } = props;
  const [product, setProduct] = useState({});
  const [productRe, setProductRe] = useState([]);
  useEffect(() => {
    getProduct(match.params.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        history.push("/shops");
      });
  }, []);
  useEffect(() => {
    getProducts({ category: product.category, _limit: 4 }).then((res) => {
      setProductRe(res.data);
    });
  }, [product.category]);

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
          <BreadcrumbItem active>{product.name}</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <div className="container">
        <article className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <Gallery images={product.images} name={product.name} />
              </div>
              <div className="col-md-6">
                <InfoProduct product={product} />
              </div>
            </div>
          </div>
        </article>
        <Comments />
        <ReComment products={productRe} productId={product.id} />
      </div>
    </>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
