import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,

 } from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: {
    email,
    password
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const logginSuccess = () => ({
  type: LOGGIN_SUCCESS,
});

export const logginFailure = () => ({
  type: LOGGIN_FAILURE,
});

export function logginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('../login-success.json');
      const body = await response.json();
      if (body.data) {
        dispatch(logginSuccess());
      } else {
        dispatch(logginFailure());
      }
    } catch {
      dispatch(logginFailure());
    }
  };
}

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const boundActionCreators = (dispatch) =>
  bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  }, dispatch);
