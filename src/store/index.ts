import { createStore } from "redux";
import { reducers } from "./reducers";

export const store = createStore(reducers);

export const dispatch = store.dispatch;

// Debug
store.subscribe(() => {
  console.log("New Store:\n", store.getState());
});
