import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
 } from "./uiActionCreators";

describe("uiActionCreators", () => {
  it("login", () => {
    const email = "";
    const password = "";
    const expectedAction = {
      type: "LOGIN",
      user: {
        email,
        password
      }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it("logout", () => {
    const expectedAction = {
      type: "LOGOUT"
    };
    expect(logout()).toEqual(expectedAction);
  });

  it("displayNotificationDrawer", () => {
    const expectedAction = {
      type: "DISPLAY_NOTIFICATION_DRAWER"
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it("hideNotificationDrawer", () => {
    const expectedAction = {
      type: "HIDE_NOTIFICATION_DRAWER"
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

});
