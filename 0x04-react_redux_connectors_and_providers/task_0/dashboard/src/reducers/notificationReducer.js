import {
  NoteActionTypes,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import {  notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';



const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

export default function notificationsReducer(action, state = initialState) {
  const filter = {
    type: "SET_TYPE_FILTER",
    filter: "URGENT"
  }
  switch (action.type) {
    case NoteActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return Map({
        filter: "DEFAULT",
        notifications: state.toJS().notifications.concat(
          Object.values(notificationsNormalizer(action.data).entities.notifications)
          .map((note) => ({
            ...note,
            isRead: false,
          }))
      ),
      });
    case NoteActionTypes.MARK_AS_READ:
      return state.setIn(["notifications", action.index, 'isRead'], true);
    case NoteActionTypes.SET_TYPE_FILTER:
      return state.set('filter', action.filter);
      default:
        return state;
      }
}


//Rewrote  fuctions to use immutable.js and normalizr

// export default function notificationReducer(state = initialState, action) {
//   const filter = {
//     type: 'SET_TYPE_FILTER',
//     filter: 'URGENT'
//   }
//   switch (action.type) {
//     case NoteActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
//       return {
//         ...state,
//         notifications: action.data,
//         isRead: false
//       }
//     case NoteActionTypes.MARK_AS_READ:
//       return {
//         ...state,
//         notifications: state.notifications.map((notification) => {
//           if (notification.id === action.index) {
//             return {
//               ...notification,
//               isRead: true
//             }
//           }
//           return notification
//         })
//       }
//     case NoteActionTypes.SET_TYPE_FILTER:
//       return {
//         ...state,
//         filter: action.filter
//       }
//     default:
//       return state;
//   }
// }
