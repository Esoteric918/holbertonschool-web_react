import { Map } from 'immutable';
import { schema, normalize } from 'normalizr';




export const coursesSchema = new schema.Entity("courses", {
  name: new schema.Entity("name"),
  credit: new schema.Entity("credit"),
});

export const coursesNormalizer = (data) => {
  return normalize(data, [coursesSchema]);
}
