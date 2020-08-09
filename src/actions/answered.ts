import { dispatch } from "../store";
import { setAnsweredActionCreator } from "./creator/answered";

export const SetAnswered = (answered: boolean) => {
  dispatch(setAnsweredActionCreator(answered));
};
