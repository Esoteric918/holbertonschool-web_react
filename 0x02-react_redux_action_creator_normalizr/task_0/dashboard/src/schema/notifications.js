import * as data from '../../../../notifications.json';



function getAllNotificationsByUser(userId) {

  return data.default.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export default getAllNotificationsByUser;
