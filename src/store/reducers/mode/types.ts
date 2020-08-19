import { Action } from "../../../@types/redux";

export const GameMode = {
  Normal: "Normal",
  Dareda: "Dareda",
} as const;
export type GameMode = keyof typeof GameMode;

export type SetGameModeAction = Action<"SetGameModeAction", GameMode>;

export type State = GameMode;
export type Actions = SetGameModeAction;
