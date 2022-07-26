import { createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
// 引入reduce
import rootReducer from "../reducers";

 const store = createStore(rootReducer,composeWithDevTools())

 export default store