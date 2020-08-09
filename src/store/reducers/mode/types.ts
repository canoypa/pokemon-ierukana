import { Action } from "../../../@types/redux";

export const GameMode = {
  Normal: "Normal",
  Dareda: "Dareda",
} as const;
export type GameMode = keyof typeof GameMode;

export type State = GameMode;
export type Actions = Action<"SetGameModeAction", GameMode>;
