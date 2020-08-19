import { createContext } from "preact";
import { Store } from "../../store/types";

export const StoreContext = createContext<Store | null>(null);
