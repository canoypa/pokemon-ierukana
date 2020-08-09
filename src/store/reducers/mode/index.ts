import { Reducer } from "redux";
import { State, Actions, GameMode } from "./types";

export const mode: Reducer<State, Actions> = (state, action) => {
  if (state === undefined) return GameMode.Normal;

  if (action.type === "SetGameModeAction") {
    return action.data;
  }

  return state;
};

export * from "./types";
