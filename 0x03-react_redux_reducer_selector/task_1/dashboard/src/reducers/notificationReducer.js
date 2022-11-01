import {
  NoteActionTypes,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export default function notificationReducer(state = initialState, action) {
  const filter = {
    type: 'SET_TYPE_FILTER',
    filter: 'URGENT'
  }
  switch (action.type) {
    case NoteActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data,
        isRead: false
      }
    case NoteActionTypes.MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          if (notification.id === action.index) {
            return {
              ...notification,
              isRead: true
            }
          }
          return notification
        })
      }
    case NoteActionTypes.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state;
  }
}
