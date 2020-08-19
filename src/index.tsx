import { h, render } from "preact";
import { App } from "./pages/app/index";
import { store } from "./store";
import { GameMode } from "./store/reducers/mode";

// 以前の Dareda Mode 用データが有る場合に再保存
const oldLSDareda = localStorage.getItem("dareda");
if (oldLSDareda !== null) {
  localStorage.removeItem("dareda");
  localStorage.setItem("mode", GameMode.Dareda);
}

// ページ離脱前にデータを保存
window.addEventListener("beforeunload", () => {
  const state = store.getState();

  localStorage.setItem("mode", state.mode);
  localStorage.setItem("answered", JSON.stringify([...state.answered]));
});

render(<App />, document.body);
