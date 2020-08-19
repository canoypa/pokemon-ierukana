import { combineReducers } from "redux";
import { mode } from "./mode";
import { answered } from "./answered";
import { isSettingsOpen } from "./is-settings-open";

export const reducers = combineReducers({ mode, answered, isSettingsOpen });
