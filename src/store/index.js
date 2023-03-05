import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import todoReducer from "./reducers/todoReducer";
import thunk from "redux-thunk";
import categoryReducer from "./reducers/categoryReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  category: categoryReducer,
});
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;