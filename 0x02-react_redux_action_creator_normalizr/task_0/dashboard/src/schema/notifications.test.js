import getAllNotificationsByUser from './notifications';
import * as data from '../../../../notifications.json';

console.log(data.default[0].context, data.default[2].context);

describe('getAllNotificationsByUser', () => {
  it('Verifies that getAllNotificationsByUser returns correct data using arrayContaining', () => {
    expect(getAllNotificationsByUser("5debd764a7c57c7839d722e9")).toEqual(
      expect.arrayContaining([
        expect.objectContaining(data.default[0].context, data.default[2].context)
      ])
    );
  })
});


