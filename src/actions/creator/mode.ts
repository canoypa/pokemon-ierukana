import { ActionCreator } from "redux";
import { SetGameModeAction, GameMode } from "../../store/reducers/mode";

export const setGameModeActionCreator: ActionCreator<SetGameModeAction> = (
  mode: GameMode
) => ({
  type: "SetGameModeAction",
  data: mode,
});
