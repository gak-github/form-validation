import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  account: {},      
  error: {},
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// provider compoment
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // get video search results (videos)
  async function createAccount(account) {
    console.log("========before calling server====");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`/.netlify/functions/account`, account, config);
      dispatch({
        type: "CREATE_ACCOUNT",
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: "CREATE_ERROR",
        payload: error.response.data.error
      })
    }
  }
  
  return (
    <GlobalContext.Provider
      value={{
        users: [],
        account: state.account,
        error: state.error,
        loading: state.loading,
        createAccount
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
