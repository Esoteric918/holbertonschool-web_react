import { Map } from 'immutable';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
 } from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

const uiReducer = (state = initialState, action) => {
  // Update the different part of the reducer function to use set from Map
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Map(state).set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return Map(state).set('isUserLoggedIn', false);
    case LOGOUT:
      return Map(state).set('isUserLoggedIn', false);
    case LOGIN:
      return Map(state).set('user', action.user);
    case DISPLAY_NOTIFICATION_DRAWER:
      return Map(state).set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return Map(state).set('isNotificationDrawerVisible', false);
    default:
      return state;
  }
};

export default uiReducer;
