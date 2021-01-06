import * as types from "./../constants/carts";

const initialState = [];

const cartsReducer = (state = initialState, action) => {
  let index;
  switch (action.type) {
    case types.GET_CARTS_SUCCESS:
      return [...action.payload];
    case types.GET_CARTS_FAILED:
      return [];
    case types.ADD_CART_SUCCESS:
      return [...state.concat(action.payload)];
    case types.ADD_CART_FAILED:
      return [...state];
    case types.UPDATE_CART_SUCCESS:
      index = state.findIndex((cart) => cart.id === action.payload.id);
      state[index] = action.payload;
      return [...state];
    case types.DELETE_CART_SUCCESS:
      const newState = [...state];
      newState.splice(
        state.findIndex((cart) => cart.id === action.payload),
        1
      );
      return [...newState];
    case types.EMPTY_CART:
      return [];
    default:
      return state;
  }
};

export default cartsReducer;
