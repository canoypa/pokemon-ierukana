import { createStore } from "redux";
import { reducers } from "./reducers";

export const store = createStore(reducers);

export const dispatch = store.dispatch;

// Fixme: いい感じの場所に移動して...
store.subscribe(() => {
  const state = store.getState();

  // データ永続化
  localStorage.setItem("mode", state.mode);
  localStorage.setItem("answered", JSON.stringify([...state.answered]));
});
