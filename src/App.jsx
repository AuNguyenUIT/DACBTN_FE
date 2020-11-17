import { lazy, Suspense, useEffect } from "react";
import "./App.scss";

import Footer from "./shares/Footer";
import Header from "./shares/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/Homepage"));
const ShopPage = lazy(() => import("./Pages/ShopPage"));
const DetailPage = lazy(() => import("./Pages/DetailPage"));
const ShoppingCartPage = lazy(() => import("./Pages/ShoppingCartPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const CheckoutPage = lazy(() => import("./Pages/CheckoutPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));
const OrdersHistoryPage = lazy(() => import("./Pages/OrdersHistoryPage"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shops" component={ShopPage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/cart" component={ShoppingCartPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/orders-history" component={OrdersHistoryPage} />
        </Switch>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
