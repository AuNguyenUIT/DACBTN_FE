import { all } from "redux-saga/effects";
import watchGetCategories from "./get";

function* watchCategories() {
  yield all([watchGetCategories()]);
}
export default watchCategories;
