import { normalize, schema } from 'normalizr';
import * as data from '../../../../notifications.json';

// define schemas
const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });

const notification = new schema.Entity(
  "notifications",
  {"author": user, "context": message}
);

const getAllNotificationsByUser = (userId) => {
  const notifications = normalize(data.default, [notification]);
  return notifications.entities.notifications.filter(
    (notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export default getAllNotificationsByUser;
