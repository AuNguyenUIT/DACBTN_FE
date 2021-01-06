import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { emptyCart } from "../../actions/carts";
import { addOrder } from "../../apis/order";
import CheckoutInfo from "./components/CheckoutInfo";
import CheckoutList from "./components/CheckoutList";
import CheckoutTotal from "./components/CheckoutTotal";
import "./style.scss";

function CheckoutPage(props) {
  const { history } = props;
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLogin = useSelector((state) => state.user.isLogin);
  const carts = useSelector((state) => state.carts);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const totalPrice = (total) => {
    setPrice(total);
  };
  const [idOrder, setIdOrder] = useState(null);
  const handleCheckout = (data) => {
    const order = {
      uid: data.id,
      phone: data.phoneNum,
      email: data.email,
      address: data.address,
      name: data.surname + " " + data.name,
      amount: price,
      shipFee: 25000,
      create: new Date(),
      status: 0,
    };
    addOrder(order)
      .then((res) => {
        setIdOrder(res.data.id);
      })
      .then(() => {
        dispatch(emptyCart());
        history.push("/order-history");
      });
  };
  return (
    <>
      <Breadcrumb>
        <div className="container d-flex">
          <BreadcrumbItem>
            <Link to="/">Trang Chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Thanh toán</BreadcrumbItem>
        </div>
      </Breadcrumb>
      <section className="container section-name padding-y-sm">
        <div className="row">
          <div className="col-7">
            <div className="card mb-3">
              <article className="card-body">
                <header className="mb-4">
                  <h4 className="card-title">Giỏ Hàng</h4>
                </header>
                <CheckoutList
                  carts={carts}
                  totalPrice={totalPrice}
                  idOrder={idOrder}
                />
              </article>
              <article className="card-body border-top">
                <CheckoutTotal totalPrice={price} items={carts.length} />
              </article>
            </div>
          </div>
          <div className="col-5">
            <CheckoutInfo
              currentUser={currentUser}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
      </section>
    </>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
