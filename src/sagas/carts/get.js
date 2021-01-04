import { call, put, takeLatest } from "redux-saga/effects";
import { getCartsSuccess } from "../../actions/carts";
import { getCarts } from "../../apis/carts";
import { GET_CARTS } from "../../constants/carts";

async function getCartsAsync(payload) {
  const res = await getCarts(payload);
  if (res.status === 200 || res.status === 304) {
    return res.data;
  }
  throw new Error(res.statusText);
}

function* getCartsSaga(action) {
  try {
    const data = yield call(getCartsAsync, action.payload);
    yield put(getCartsSuccess(data));
  } catch (error) {
    yield put(getCartsSuccess(error));
  }
}
function* watchGetCarts() {
  yield takeLatest(GET_CARTS, getCartsSaga);
}

export default watchGetCarts;
