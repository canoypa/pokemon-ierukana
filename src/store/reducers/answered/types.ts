import { Action } from "../../../@types/redux";

export type SetAnsweredAction = Action<"SetAnsweredAction", number[]>;

export type State = Set<number>;
export type Actions = SetAnsweredAction;
