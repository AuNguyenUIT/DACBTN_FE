import { all } from "redux-saga/effects";
import watchCarts from "./carts";
import watchCategories from "./categories";
import watchUser from "./user";

function* rootSaga() {
  yield all([watchUser(), watchCategories(), watchCarts()]);
}

export default rootSaga;
