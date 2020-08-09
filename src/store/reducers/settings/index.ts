import { Reducer } from "redux";
import { State, Actions } from "./types";

export const isSettingsOpen: Reducer<State, Actions> = (state, action) => {
  if (state === undefined) return false;

  if (action.type === "SetSettingsOpenAction") {
    return action.data;
  }

  return state;
};
