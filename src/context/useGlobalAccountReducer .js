import { useReducer } from "react";

// Define initial state
const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, isLoading: false, error: null };

    case "FETCH_ERROR":
      return { ...state, data: [], isLoading: false, error: action.payload };

    case "LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export const useGlobalAccountReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const handleComplete = (todo) => {
  //     dispatch({ type: "COMPLETE", id: todo.id });
  //   };

  return { state, dispatch };
};
