import { h, render } from "preact";
import { App } from "./pages/app/index";
import { store } from "./store";
import { GameMode } from "./store/reducers/mode";

// 以前の Dareda Mode 用データが有る場合に再保存
const oldLSDareda = localStorage.getItem("dareda");
if (oldLSDareda !== null) {
  localStorage.removeItem("dareda");
  localStorage.setItem("mode", oldLSDareda ? GameMode.Dareda : GameMode.Normal);
}

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js", { scope: "/pokemon-ierukana/" })
    .then((reg) =>
      console.log(
        "ServiceWorker registration successful with scope: ",
        reg.scope
      )
    )
    .catch((err) => console.log("ServiceWorker registration failed: ", err));
}

render(<App />, document.body);
