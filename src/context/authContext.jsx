"use client";

import {
  getUserApi,
  logoutUser,
  signinUser,
  signupUser,
} from "@/services/authServices";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
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
    case "logout":
      return {
        user: null,
        isAuthenticated: false,
      };
    case "user/loaded":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
  }
};

const AuthProvider = ({ children }) => {
  const router = useRouter();
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
      router.push("/profile");
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
      router.push("/profile");
    } catch (err) {
      const error = err?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
      toast.error(error);
    }
  };

  async function logout() {
    try {
      await logoutUser();
      router.push("/");
      dispatch({ type: "logout" });
      toast.success("خارج شدید");
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    const getUser = async () => {
      dispatch({ type: "loading" });
      try {
        const { user } = await getUserApi();
        dispatch({ type: "user/loaded", payload: user });
      } catch (err) {
        const error = err?.response?.data?.message;
        dispatch({ type: "rejected", payload: error });
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup, logout }}
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
