import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import setAuthToken from "../../components/utils/setAuthToken";
import {
  REGISTER_SUCCESs,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  // Load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('/api/auth')

      console.log(res.data._id)

      dispatch({type: USER_LOADED, payload: res.data})
    } catch (err) {
      dispatch({type: AUTH_ERROR})
    }
  }
};
