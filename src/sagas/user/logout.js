import { call, put, takeLatest } from "redux-saga/effects";
import { userPending } from "../../actions/user";
import { LOG_OUT } from "../../constants/user";

function* logoutUser() {
  yield put(userPending());
}

function* watchLogout() {
  yield takeLatest(LOG_OUT, logoutUser);
}

export default watchLogout;
