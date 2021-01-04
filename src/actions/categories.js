import * as types from "./../constants/categories";

export const getCategories = () => {
  return {
    type: types.GET_CATEGORIES,
  };
};

export const getCategoriesSuccess = (payload) => {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    payload,
  };
};

export const getCategoriesFailed = (payload) => {
  return {
    type: types.GET_CATEGORIES_FAILED,
    payload,
  };
};
