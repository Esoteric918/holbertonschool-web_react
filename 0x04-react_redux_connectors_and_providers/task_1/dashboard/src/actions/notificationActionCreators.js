import  {NoteActionTypes, NotificationTypeFilters } from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: NoteActionTypes.MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: NoteActionTypes.SET_TYPE_FILTER,
    filter: NotificationTypeFilters[filter.toUpperCase()],
  };
}
