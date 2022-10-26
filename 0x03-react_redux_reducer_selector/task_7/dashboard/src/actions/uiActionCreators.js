import { bindActionCreators } from 'redux';
import { UIActType } from './uiActionTypes';

export const login = (email, password) => ({
  type: UIActType.LOGIN,
  user: {
    email,
    password
  },
});

export const logout = () => ({
  type: UIActType.LOGOUT,
});

export const logginSuccess = () => ({
  type: UIActType.LOGGIN_SUCCESS,
});

export const logginFailure = () => ({
  type: UIActType.LOGGIN_FAILURE,
});

export function logginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('http://localhost:3000/login-success.json');
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
  type: UIActType.DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: UIActType.HIDE_NOTIFICATION_DRAWER,
});

export const boundActionCreators = (dispatch) =>
  bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  }, dispatch);
