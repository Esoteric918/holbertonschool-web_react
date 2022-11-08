import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
 } from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

const uiReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}

export default uiReducer;
