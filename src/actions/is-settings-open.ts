import { dispatch } from "../store";
import { setIsSettingsOpenActionCreator } from "./creator/is-settings-open";

export const setIsSettingsOpen = (isOpen: boolean) => {
  dispatch(setIsSettingsOpenActionCreator(isOpen));
};
