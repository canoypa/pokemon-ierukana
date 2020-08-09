import { GameMode } from "../store/reducers/mode";
import { dispatch } from "../store";
import { setGameModeActionCreator } from "./creator/mode";

export const setGameMode = (mode: GameMode) => {
  dispatch(setGameModeActionCreator(mode));
};
