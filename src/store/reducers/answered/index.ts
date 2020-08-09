import { Reducer } from "redux";
import { State, Actions } from "./types";

export const answered: Reducer<State, Actions> = (state, action) => {
  if (state === undefined) return [];

  if (action.type === "SetAnsweredAction") {
    return [...state, action.data];
  }

  return state;
};

export * from "./types";
