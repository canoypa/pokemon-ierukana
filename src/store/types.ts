import { reducers } from "./reducers";
import { store } from ".";

export type Store = typeof store;
export type Stores = ReturnType<typeof reducers>;
