import { call, put, takeLatest } from "redux-saga/effects";
import { loginUserFailed, loginUserSuccess } from "../../actions/user";
import { getUser } from "../../apis/user";
import { LOGIN_USER } from "../../constants/user";

async function loginUserAsync(user) {
  const res = await getUser({
    email: user.email,
    password: user.password,
  });

  if (res.status === 200 || res.status === 304) {
    return res.data;
  }
  throw new Error(res.statusText);
}

function* loginUser(action) {
  try {
    const data = yield call(loginUserAsync, action.payload);
    if (data.length) {
      yield put(loginUserSuccess(data[0]));
    } else {
      yield put(loginUserFailed({ message: "Email hoặc mật khẩu sai" }));
    }
  } catch (error) {
    yield put(loginUserFailed(error));
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_USER, loginUser);
}
export default watchLogin;
