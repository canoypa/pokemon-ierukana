import { Reducer } from "redux";
import { State, Actions } from "./types";

export const answered: Reducer<State, Actions> = (state, action) => {
  if (state === undefined) return new Set();

  if (action.type === "SetAnsweredAction") {
    action.data.forEach((id) => state.add(id));
    return new Set(state);
  }

  return state;
};

export * from "./types";
