import { ActionCreator } from "redux";
import { SetSettingsOpenAction } from "../../store/reducers/is-settings-open";

export const setIsSettingsOpenActionCreator: ActionCreator<SetSettingsOpenAction> = (
  isOpen: boolean
) => ({
  type: "SetSettingsOpenAction",
  data: isOpen,
});
