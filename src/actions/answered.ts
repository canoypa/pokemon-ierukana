import { dispatch } from "../store";
import { setAnsweredActionCreator } from "./creator/answered";

export const SetAnswered = (...id: number[]) => {
  dispatch(setAnsweredActionCreator(id));
};
