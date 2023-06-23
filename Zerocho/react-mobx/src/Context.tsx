import { createContext, PropsWithChildren, useContext } from "react";
import { userStore, postStore } from "@/mobx/store";

export const storeContext = createContext({
  userStore,
  postStore,
});

export const useStore = () => useContext(storeContext);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <storeContext.Provider value={{ userStore, postStore }}>
      {children}
    </storeContext.Provider>
  );
};
