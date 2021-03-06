import * as types from "./../constants/loading";
const initialState = false;
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return true;
    case types.HIDE_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
