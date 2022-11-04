import { filterTypeSelected ,getNotifications, getUnreadNotifications } from "./notificationSelector";
import { Map, fromJS } from "immutable";


describe("notificationSelector", () => {
  // create a test for the filterTypeSelected function
  describe("filterTypeSelected", () => {
    it("should return the filter type selected", () => {
      const state = {
        filter: "DEFAULT",
      };
      const result = filterTypeSelected(state);
      expect(result).toEqual("DEFAULT");
    });
  });

  // create a test for the getNotifications function
  describe("getNotifications", () => {
    it("should return the notifications", () => {
      const state = {
        notifications: [
          {
            id: 1,
            type: "default",
            value: "New course available",
          },
          {
            id: 2,
            type: "urgent",
            value: "New resume available",
          },
          {
            id: 3,
            type: "urgent",
            html: {
              __html: `<strong>Urgent requirement</strong> - complete by EOD`,
            },
          },
        ],
      };
      const result = getNotifications(state);
      expect(result).toEqual(
        Map(state.notifications)
      );
    });
  });

  // create a test for the getUnreadNotifications function
  describe("getUnreadNotifications", () => {
    it("should return the unread notifications", () => {
      const state = {
        notifications: [
          {
            id: 1,
            type: "default",
            value: "New course available",
            isRead: false,
          },
          {
            id: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          {
            id: 3,
            type: "urgent",
            html: {
              __html: `<strong>Urgent requirement</strong> - complete by EOD`,
            },
            isRead: true,
          },
        ],
      };
      const result = getUnreadNotifications(state);
      expect(result).toEqual(
        Map(state.notifications.filter((notification) => notification.isRead === false))
      );
    });
  });
});

