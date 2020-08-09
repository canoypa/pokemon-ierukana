import { Action } from "../../../@types/redux";

export type SetSettingsOpenAction = Action<"SetSettingsOpenAction", boolean>;

export type State = boolean;
export type Actions = SetSettingsOpenAction;
