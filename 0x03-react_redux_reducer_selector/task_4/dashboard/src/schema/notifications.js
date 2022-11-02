import { normalize, schema } from 'normalizr';
import * as data from '../../dist/notifications.json';

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

export function getAllNotificationsByUser(userId) {
  return Object.values(notifSchema.entities.notifications)
    .filter((note) => note.author == userId)
    .map((note) => notifSchema.entities.messages[note.context]);
}
