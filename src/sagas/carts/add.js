import { call, put, takeLatest } from "redux-saga/effects";
import { addCartFailed, addCartSuccess } from "../../actions/carts";
import { addCart } from "../../apis/carts";
import { ADD_CART } from "../../constants/carts";

async function addCartAsync(payload) {
  const res = await addCart(payload);
  if (res.status === 201 || res.status === 304) {
    return res.data;
  }
  throw new Error(res.statusText);
}

function* addCartSaga(action) {
  try {
    const data = yield call(addCartAsync, action.payload);
    yield put(addCartSuccess(data));
  } catch (error) {
    // console.log(error);
    yield put(addCartFailed(error));
  }
}

function* watchAddCart() {
  yield takeLatest(ADD_CART, addCartSaga);
}

export default watchAddCart;
