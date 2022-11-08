import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import {  NotificationTypeFilters } from './notificationActionTypes';
describe('notificationActionCreators', () => {
  it('markAsAread to return an action', () => {
    const index = 1;
    const action = markAsAread(index);
    expect(action).toEqual({
      type: 'MARK_AS_READ',
      index,
    });
  });

  it('setNotificationFilter to return an action', () => {
    const filter = NotificationTypeFilters.URGENT;
    const action = setNotificationFilter(filter);
    expect(action).toEqual({
      type: 'SET_TYPE_FILTER',
      filter
    });
  });
});
