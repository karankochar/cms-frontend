import { combineReducers } from "redux";
import PageReducer from "./PageReducer"
const rootReducer = combineReducers({
  pages: PageReducer,
});

export default rootReducer;
