import { dispatch } from "../store";
import {
  setAnsweredActionCreator,
  resetAnsweredActionCreator,
} from "./creator/answered";

export const setAnswered = (...id: number[]) => {
  dispatch(setAnsweredActionCreator(id));
};

export const resetAnswered = () => {
  dispatch(resetAnsweredActionCreator());
};
