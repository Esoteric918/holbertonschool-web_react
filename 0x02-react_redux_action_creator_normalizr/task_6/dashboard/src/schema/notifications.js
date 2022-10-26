import { normalize, schema } from 'normalizr';
import * as data from '../../../../notifications.json';

// define schemas
const user = new schema.Entity("users");

// sets idAttribute to guid in messages schema
const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });

//define notification schema
const notification = new schema.Entity(
  "notifications",
  {"author": user, "context": message}
);

export const notifSchema = normalize(data.default, [notification]);

export default function getAllNotificationsByUser(userId) {
  return notifSchema.entities.notifications
    .filter((notifSchema) => notification.author.id === userId)
    .map((notifSchema) => notification.context);
}
