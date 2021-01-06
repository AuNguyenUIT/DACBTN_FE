import { call, put, takeLatest } from "redux-saga/effects";
import { deleteCartFailed, deleteCartSuccess } from "../../actions/carts";
import { deleteCart } from "../../apis/carts";
import { DELETE_CART } from "../../constants/carts";


async function deleteCartAsync(id){
    const res = await deleteCart(id);
    if(res.status===200|| res.status===304){
        return id;
    }
    throw new Error(res.statusText);
}

function* deleteCartSaga(action) {
    try {
       const data= yield call(deleteCartAsync,action.payload )
        yield put(deleteCartSuccess(data));
    } catch (error) {
        yield put(deleteCartFailed(error))
    }
}   

function* watchDeleteCart(){

    yield takeLatest(DELETE_CART, deleteCartSaga)

}

export default watchDeleteCart;