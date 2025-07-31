import { createContext } from "react";
import { useAccountReducer } from "./useAccountReducer ";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const { state, dispatch } = useAccountReducer();

  return (
    <AccountContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountContext.Provider>
  );
};
