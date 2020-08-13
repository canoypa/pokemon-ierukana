import { useContext, useReducer, useMemo } from "preact/hooks";
import { StoreContext } from "./store";
import { Stores } from "../../store/types";

export const useSelector = <S>(selector: (store: Stores) => S) => {
  const store = useContext(StoreContext);
  if (!store) throw new Error("Store not found.");

  const [select, update] = useReducer<S, S>(
    (pre, cur) => (pre !== cur ? cur : pre),
    selector(store.getState())
  );

  useMemo(() => {
    store.subscribe(() => update(selector(store.getState())));
  }, [store]);

  return select;
};
