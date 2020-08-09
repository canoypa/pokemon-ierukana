import { Reducer } from "redux";
import { State, Actions } from "./types";

export const answered: Reducer<State, Actions> = (state, action) => {
  if (state === undefined) return [];

  if (action.type === "SetAnsweredAction") {
    if (action.data.multiple) return [...state, ...action.data.id];
    else return [...state, action.data.id];
  }

  return state;
};

export * from "./types";
