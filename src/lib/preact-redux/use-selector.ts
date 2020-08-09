import { useContext } from "preact/hooks";
import { StoreContext } from "./store";
import { Stores } from "../../store/types";

export const useSelector = <S>(selector: (store: Stores) => S) => {
  const store = useContext(StoreContext);
  if (!store) throw new Error("Store not found.");

  return selector(store.getState());
};
