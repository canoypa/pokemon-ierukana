import { createStore } from "redux";
import { reducers } from "./reducers";

export const store = createStore(reducers);

export const dispatch = store.dispatch;

// Dev
store.subscribe(() => {
  console.log("new store: ", store.getState());
});
