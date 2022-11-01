import notificationReducer from "./notificationReducer";

describe("notificationReducer test suite", () => {
  it("should return the initial state", () => {
    expect(notificationReducer(undefined, {})).toEqual({
      notifications: [],
      filter: "DEFAULT",
    });
  });
  it('should return the correct state when receiving a "MARK_AS_READ" action', () => {
    const state = {
      notifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" },
      ],
    };
    const action = {
      type: "MARK_AS_READ",
      index: 2,
    };
    expect(notificationReducer(state, action)).toEqual({
      notifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available" },
      ],
    });
  });

  it('should send the correct attibute filter when receiving a "SET_TYPE_FILTER" action', () => {
    const state = {
      filter: "DEFAULT",
    };
    const action = {
      type: "SET_TYPE_FILTER",
      filter: "URGENT",
    };
    expect(notificationReducer(state, action)).toEqual({
      filter: "URGENT",
    });
  })
});
