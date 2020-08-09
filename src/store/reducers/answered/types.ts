import { Action } from "../../../@types/redux";

export type SetAnsweredAction = Action<"SetAnsweredAction", number | number[]>;

export type State = number[];
export type Actions = SetAnsweredAction;
