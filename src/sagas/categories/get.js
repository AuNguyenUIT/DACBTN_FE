import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCategoriesFailed,
  getCategoriesSuccess,
} from "../../actions/categories";
import { getCategories } from "../../apis/categories";
import { GET_CATEGORIES } from "../../constants/categories";

async function getCategoriesAsync() {
  const res = await getCategories();

  if (res.status === 200) {
    return res.data;
  }
  throw new Error(res.statusText);
}

function* getCategoriesSaga() {
  try {
    const data = yield call(getCategoriesAsync);
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getCategoriesFailed(error));
  }
}

function* watchGetCategories() {
  yield takeLatest(GET_CATEGORIES, getCategoriesSaga);
}
export default watchGetCategories;
