import { SetAnsweredAction } from "../../store/reducers/answered";
import { ActionCreator } from "redux";

export const setAnsweredActionCreator: ActionCreator<SetAnsweredAction> = (
  id: number | number[]
) => ({
  type: "SetAnsweredAction",
  data: id,
});
