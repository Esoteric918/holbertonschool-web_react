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
  type: LOGIN_SUCCESS,
});

export const logginFailure = () => ({
  type: LOGIN_FAILURE,
});



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
