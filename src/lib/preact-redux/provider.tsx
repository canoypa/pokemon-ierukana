import { h, FC } from "preact";
import { StoreContext } from "./store";
import { Store } from "../../store/types";

type Props = {
  store: Store;
};
export const Provider: FC<Props> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
