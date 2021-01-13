import cartsReducer from "./carts";
import categoriesReducer from "./categories";
import loadingReducer from "./loading";
import userReducer from "./user";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  carts: cartsReducer,
  loading: loadingReducer,
});

export default rootReducer;
