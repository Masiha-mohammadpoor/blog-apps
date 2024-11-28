"use client";

import { signinUser, signupUser } from "@/services/authServices";
import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return initialState;
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "signup":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
  }
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const signin = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signinUser(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
    } catch (err) {
      const error = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
      toast.error(error);
    }
  };
  const signup = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupUser(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
    } catch (err) {
      const error = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
      toast.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found auth context");
  return context;
};
