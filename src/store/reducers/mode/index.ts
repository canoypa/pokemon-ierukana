import { Reducer } from "redux";
import { State, Actions, GameMode } from "./types";

const LSMode = localStorage.getItem("mode");
const initState =
  LSMode === GameMode.Normal || LSMode === GameMode.Dareda
    ? LSMode
    : GameMode.Normal;

export const mode: Reducer<State, Actions> = (state, action) => {
  if (state === undefined) return initState;

  if (action.type === "SetGameModeAction") {
    return action.data;
  }

  return state;
};

export * from "./types";
