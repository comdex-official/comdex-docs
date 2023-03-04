import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import axios from "axios";



const store = createStore(applyMiddleware(thunkMiddleware));

export default store;