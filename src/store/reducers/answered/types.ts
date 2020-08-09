import { Action } from "../../../@types/redux";

export type State = number[];
export type Actions = Action<
  "SetAnsweredAction",
  { multiple: true; id: number[] } | { multiple: false; id: number }
>;
