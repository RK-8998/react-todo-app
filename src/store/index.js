import { createStore, combineReducers } from "redux";
import todoReducer from "../redux/reducers/todos";
import filterReducer from "../redux/reducers/filter";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;
