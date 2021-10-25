import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  updateStart,
  updateSuccess,
  updateFailure,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch, user) => {
  dispatch(logoutStart());
  try {
    const res = await publicRequest.get("/auth/logout", user);
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(logoutFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const update = async (dispatch, user, id) => {
  dispatch(updateStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure());
  }
};
