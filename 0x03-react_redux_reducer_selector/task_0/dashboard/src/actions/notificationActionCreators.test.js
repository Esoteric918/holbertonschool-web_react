import { markAsAread, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('markAsAread', () => {
    expect(markAsAread(1)).toEqual({
      type: 'MARK_AS_READ',
      index: 1,
    });
  });

  it('setNotificationFilter', () => {
    expect(setNotificationFilter('DEFAULT')).toEqual({
      type: 'SET_TYPE_FILTER',
      filter: 'DEFAULT',
    });
  });
});
