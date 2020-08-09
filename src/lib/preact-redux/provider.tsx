import { h, FC } from "preact";
import { Store } from "redux";
import { StoreContext } from "./store";

type Props = {
  store: Store<unknown, any>;
};
export const Provider: FC<Props> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
