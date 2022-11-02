import notificationReducer from "./notificationReducer";
import { Map } from "immutable";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { markAsAread, setNotificationFilter,  } from "../actions/notificationActionCreators";



describe("notificationReducer tests", () => {
  let ncAtion = {
    type: 'FETCH_NOTIFICATIONS_SUCCESS',
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ]
  };

  const initialState = Map({
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT,
  });

  let rtnThing = '';

  it("should return the initial state", () => {

    expect(notificationReducer({})).toEqual(initialState);
  });

  it("FETCH_NOTIFICATIONS_SUCCESS", () => {
    rtnThing =notificationReducer(ncAtion, initialState)
    expect(rtnThing).toEqual(Map({
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: false
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
          isRead: false
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false
        }
      ],
    }));

  })

  it('MARK_AS_READ has correct output', () => {
    const action = markAsAread(1);
    const output = notificationReducer(action, rtnThing);
    expect(output.get('notifications')[1].isRead).toEqual(true);
  })
  it('SET_TYPE_FILTER has correct output', () => {
    const action = setNotificationFilter('URGENT');
    const output = notificationReducer(action, rtnThing);
    expect(output.get('filter')).toEqual('URGENT');
  })
});
