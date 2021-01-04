import { all } from "redux-saga/effects";
import watchAddCart from "./add";
import watchDeleteCart from "./delete";
import watchGetCarts from "./get";
import watchUpdateCart from "./update";

function* watchCarts() {
  yield all([watchAddCart(), watchGetCarts(), watchUpdateCart(), watchDeleteCart()]);
}
export default watchCarts;
