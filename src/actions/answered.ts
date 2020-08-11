import { dispatch } from "../store";
import { setAnsweredActionCreator } from "./creator/answered";

export const setAnswered = (...id: number[]) => {
  dispatch(setAnsweredActionCreator(id));
};
