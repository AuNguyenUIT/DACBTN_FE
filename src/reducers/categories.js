import * as types from "./../constants/categories";

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      return [...action.payload];
    case types.GET_CATEGORIES_FAILED:
      return [...state];
    default:
      return state;
  }
};

export default categoriesReducer;
