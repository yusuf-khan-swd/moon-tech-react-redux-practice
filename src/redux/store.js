import { createStore } from "redux";
import { productReducer } from "./reuducers/productReducer";

export const store = createStore(productReducer);
