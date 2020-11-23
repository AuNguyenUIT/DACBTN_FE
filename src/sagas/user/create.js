import { call, put, takeLatest } from "redux-saga/effects";
import {
  registerUserFailed,
  registerUserSuccess,
  userPending
} from "../../actions/user";
import { postUser } from "../../apis/user";
import { REGISTER_USER } from "../../constants/user";

async function createUserAsync(user) {
  const res = await postUser({
    ...user,
    id: user.email,
  });

  if (res.status === 201) {
    return res.data;
  }
  throw new Error(res.statusText);
}

function* createUser(action) {
  yield put(userPending());
  try {
    const data = yield call(createUserAsync, action.payload);
    yield put(registerUserSuccess(data));
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}

export default function* watchCreate() {
  yield takeLatest(REGISTER_USER, createUser);
}
