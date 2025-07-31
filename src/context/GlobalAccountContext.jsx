import { createContext } from "react";
import { useGlobalAccountReducer } from "./useGlobalAccountReducer ";

// Create the context
export const GlobalAccountContext = createContext();

// Create the provider component
export const GlobalAccountProvider = ({ children }) => {
  const { state, dispatch } = useGlobalAccountReducer();

  return (
    <GlobalAccountContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalAccountContext.Provider>
  );
};
