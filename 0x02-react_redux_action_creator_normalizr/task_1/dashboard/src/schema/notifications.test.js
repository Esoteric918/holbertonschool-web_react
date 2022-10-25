import getAllNotificationsByUser, { normalizedData } from './notifications';
import * as data from '../../../../notifications.json';

describe('getAllNotificationsByUser', () => {
  it('Verifies that getAllNotificationsByUser returns correct data using arrayContaining', () => {
    expect(getAllNotificationsByUser("5debd764a7c57c7839d722e9")).toEqual(
      expect.arrayContaining([
        expect.objectContaining(data.default[0].context, data.default[2].context)
      ])
    );
  })

  it('Checks if normalizedData is correct', () => {
    expect(normalizedData.result).toEqual([
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ]);
  })

  it('Verifies that normalized data has correct messages entity for given guid', () => {
    const message = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
    expect(normalizedData.entities.messages[message]).toEqual({
      guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
      isRead: false,
      type: 'default',
      value: 'Cursus risus at ultrices mi.',
    });
  });

  it('Verifies that normalized data has correct users entity for given id', () => {
    const user = '5debd7642e815cd350407777';
    expect(normalizedData.entities.notifications[user]).toEqual({
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    });
  });
});
