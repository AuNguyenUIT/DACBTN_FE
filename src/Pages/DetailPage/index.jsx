import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { addCart, updateCart } from "../../actions/carts";
import { getCarts } from "../../apis/carts";
import { getProduct, getProducts } from "../../apis/products";
import Comments from "./components/Comments";
import Gallery from "./components/Gallery";
import InfoProduct from "./components/InfoProduct";
import ReComment from "./components/ReComment";

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

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    if (!user.isLogin) {
      history.push("/login");
      return;
    }

    getCarts({
      color: data.color,
      size: data.size,
      pid: product.id,
      uid: user.currentUser.id,
    })
      .then((res) => {
        if (!res.data.length) {
          dispatch(
            addCart({ ...data, pid: product.id, uid: user.currentUser.id })
          );
        } else {
          const payload = {
            data: {
              ...res.data[0],
              quantity: res.data[0].quantity + data.quantity,
            },
            id: res.data[0].id,
          };
          dispatch(updateCart(payload));
        }
      })
      .catch((err) => {});
  };

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
                <InfoProduct
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </article>
        <Comments />
        <ReComment
          products={productRe}
          productId={product.id}
          category={product.category}
        />
      </div>
    </>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
