import { call, put, takeLatest } from "redux-saga/effects";
import { updateProfileSuccess } from "../../actions/user";
import { UPDATE_PROFILE } from "../../constants/user";
import { putUser } from "./../../apis/user";

async function updateProfileUserAsync(user) {
  const res = await putUser(user.id, {
    ...user,
  });

  if (res.status === 200) {
    return res.data;
  }
  throw new Error(res.statusText);
}

function* updateProfile(action) {
  try {
    const res = yield call(updateProfileUserAsync, action.payload);
    yield put(updateProfileSuccess(res));
  } catch (error) {
    console.log(error);
  }
}

function* watchUpdate() {
  yield takeLatest(UPDATE_PROFILE, updateProfile);
}

export default watchUpdate;
