import * as cartTypes from "./../constants/carts";

export const addCart = (payload) => ({
  type: cartTypes.ADD_CART,
  payload,
});
export const addCartSuccess = (payload) => ({
  type: cartTypes.ADD_CART_SUCCESS,
  payload,
});
export const addCartFailed = (payload) => ({
  type: cartTypes.ADD_CART_FAILED,
  payload,
});

export const getCarts = (payload) => ({
  type: cartTypes.GET_CARTS,
  payload,
});
export const getCartsSuccess = (payload) => ({
  type: cartTypes.GET_CARTS_SUCCESS,
  payload,
});
export const getCartsFailed = (payload) => ({
  type: cartTypes.GET_CARTS_FAILED,
  payload,
});

export const updateCart = (payload) => ({
  type: cartTypes.UPDATE_CART,
  payload,
});
export const updateCartSuccess = (payload) => ({
  type: cartTypes.UPDATE_CART_SUCCESS,
  payload,
});
export const updateCartFailed = (payload) => ({
  type: cartTypes.UPDATE_CART_FAILED,
  payload,
});

export const deleteCart = (payload) => ({
  type: cartTypes.DELETE_CART,
  payload,
});
export const deleteCartSuccess = (payload) => ({
  type: cartTypes.DELETE_CART_SUCCESS,
  payload,
});
export const deleteCartFailed = (payload) => ({
  type: cartTypes.DELETE_CART_FAILED,
  payload,
});

