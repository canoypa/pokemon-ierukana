import { useContext } from "preact/hooks";
import { StoreContext } from "./provider";
import { Store } from "redux";

export const useSelector = (selector: (store: Store) => unknown) => {
  const store = useContext(StoreContext);
  if (!store) throw new Error("Store not found.");

  return selector(store.getState());
};
