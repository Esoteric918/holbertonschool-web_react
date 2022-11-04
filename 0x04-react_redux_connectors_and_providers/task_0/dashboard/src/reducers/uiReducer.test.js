import uiReducer from "./uiReducer.js";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";
// Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

describe("uiReducer", () => {
  it("returns the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
  // Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
  it("returns the initial state when the action SELECT_COURSE is passed", () => {
    expect(uiReducer(initialState, { type: "SELECT_COURSE" })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  })
  // Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property
  it("returns the initial state when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    expect(uiReducer(initialState, { type: "DISPLAY_NOTIFICATION_DRAWER" })).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  })

});
