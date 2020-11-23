import { all } from "redux-saga/effects";
import watchCreate from "./create";
import watchLogin from "./login";
import watchLogout from "./logout";
export default function* watchUser() {
  yield all([watchCreate(), watchLogout(), watchLogin()]);
}
