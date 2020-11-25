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
      return { isLogin: true, currentUser: action.payload };
    case types.REGISTER_USER_FAILED:
      return { isLogin: false, currentUser: {} };

    case types.LOGIN_USER_SUCCESS:
      return { isLogin: true, currentUser: action.payload };
    case types.LOGIN_USER_FAILED:
      return { isLogin: false, currentUser: {} };

    case types.UPDATE_PROFILE_SUCCESS:
      return { ...state, isLogin: true, currentUser: action.payload };
    case types.UPDATE_PROFILE_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
