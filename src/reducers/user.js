import { toastSuccess } from "../Helpers/toastHelper";
import * as types from "./../constants/user";
const initialState = {
  isLogin: false,
  currentUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_PENDING:
      return { isLogin: false, currentUser: {} };
    case types.REGISTER_USER_SUCCESS:
      toastSuccess("Đăng ký thành công!");
      return { isLogin: true, currentUser: action.payload };
    case types.REGISTER_USER_FAILED:
      return { isLogin: false, currentUser: {} };

    case types.LOGIN_USER_SUCCESS:
      toastSuccess("Đăng nhập thành công!");
      return { isLogin: true, currentUser: action.payload };
    case types.LOGIN_USER_FAILED:
      return { isLogin: false, currentUser: {} };

    case types.UPDATE_PROFILE_SUCCESS:
      toastSuccess("Cập nhật tài khoản thành công!");
      return { ...state, isLogin: true, currentUser: action.payload };
    case types.UPDATE_PROFILE_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
