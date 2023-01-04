import { createStore } from "redux";
import { midReducer } from "../reducers/reducer";

const store = createStore(midReducer);

export default store;