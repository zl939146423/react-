import {createStore, applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"
const store = createStore(reducer,applyMiddleware(thunk)); //store的创建需要reducer的配合
export default store;  //创建一个stor e