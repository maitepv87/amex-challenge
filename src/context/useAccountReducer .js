import { useReducer } from "react";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
  activeAccount: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, isLoading: false, error: null };

    case "FETCH_ERROR":
      return { ...state, data: [], isLoading: false, error: action.payload };

    case "LOADING":
      return { ...state, isLoading: true };

    case "SET_ACTIVE_ACCOUNT":
      return {
        ...state,
        activeAccount: action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const useAccountReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
