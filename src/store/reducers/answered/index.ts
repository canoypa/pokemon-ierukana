import { Reducer } from "redux";
import { State, Actions } from "./types";

const LSAnswered = localStorage.getItem("answered");
const initStateData = LSAnswered ? JSON.parse(LSAnswered) : [];

export const answered: Reducer<State, Actions> = (state, action) => {
  if (state === undefined) return new Set(initStateData);

  if (action.type === "SetAnsweredAction") {
    action.data.forEach((id) => state.add(id));
    return new Set(state);
  }

  if (action.type === "ResetAnsweredAction") {
    return new Set();
  }

  return state;
};

export * from "./types";
