import { Action } from "../../../@types/redux";

export type SetAnsweredAction = Action<"SetAnsweredAction", number[]>;
export type ResetAnsweredAction = Action<"ResetAnsweredAction">;

export type State = Set<number>;
export type Actions = SetAnsweredAction | ResetAnsweredAction;
