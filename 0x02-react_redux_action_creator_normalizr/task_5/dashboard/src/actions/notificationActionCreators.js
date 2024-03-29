import noteTypes, { NotificationTypeFilters } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export function markAsAread(index) {
  return {
    type: noteTypes.MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: noteTypes.SET_TYPE_FILTER,
    filter: NotificationTypeFilters[filter.toUpperCase()],
  };
}

// creatre a boundActionCreators function

export const boundActionCreators = (dispatch) =>
  bindActionCreators({ markAsAread, setNotificationFilter }, dispatch);
