export const fetchAccounts = async (dispatch) => {
  dispatch({ type: "LOADING" });

  try {
    const response = await fetch("./api.json");
    const { accounts } = await response.json();

    dispatch({ type: "FETCH_SUCCESS", payload: accounts });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error.message });
  }
};

export const activeAccount = async (dispatch, account) => {
  dispatch({ type: "LOADING" });
  try {
    dispatch({ type: "SET_ACTIVE_ACCOUNT", payload: account });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error.message });
  }
};
