import { createContext } from "preact";
import { Store } from "redux";

export const StoreContext = createContext<Store<any, any> | null>(null);
