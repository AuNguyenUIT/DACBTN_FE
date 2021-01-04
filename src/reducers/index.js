import cartsReducer from "./carts";
import categoriesReducer from "./categories";
import userReducer from "./user";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  carts: cartsReducer,
});

export default rootReducer;
