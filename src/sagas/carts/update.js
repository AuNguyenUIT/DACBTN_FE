import { call, put, takeLatest } from "redux-saga/effects";
import { updateCartFailed, updateCartSuccess } from "../../actions/carts";
import { updateCart } from "../../apis/carts";
import { UPDATE_CART } from "../../constants/carts";

async function updateCartAsync(payload) {
  const res = await updateCart(payload.id, payload.data);
  if (res.status === 200 || res.status === 304) {
    return res.data;
  }
  throw new Error(res.statusText);
}

function* updateCartSaga(action) {
  try {
    const data = yield call(updateCartAsync, action.payload);
    yield put(updateCartSuccess(data));
  } catch (error) {
    yield put(updateCartFailed(error));
  }
}

function* watchUpdateCart() {
  yield takeLatest(UPDATE_CART, updateCartSaga);
}

export default watchUpdateCart;
