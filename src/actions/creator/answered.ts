import {
  SetAnsweredAction,
  ResetAnsweredAction,
} from "../../store/reducers/answered";
import { ActionCreator } from "redux";

export const setAnsweredActionCreator: ActionCreator<SetAnsweredAction> = (
  id: number[]
) => ({
  type: "SetAnsweredAction",
  data: id,
});

export const resetAnsweredActionCreator: ActionCreator<ResetAnsweredAction> = () => ({
  type: "ResetAnsweredAction",
});
