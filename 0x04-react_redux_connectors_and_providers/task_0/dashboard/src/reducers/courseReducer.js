import { corTypes } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';


const initialState = Map({
  courses: Map(
    {
      1: Map({
        id: 1,
        name: "ES6",
        credit: 60,
      }),
      2: Map({
        id: 2,
        name: "Webpack",
        credit: 20,
      }),
    }),
});


export default function coursesReducer(action, state = initialState) {
  switch (action.type) {
    case corTypes.FETCH_COURSE_SUCCESS:
      return state.merge(coursesNormalizer(action.data));
    case corTypes.SELECT_COURSE:
      return state.setIn(['entities', "courses", action.index, 'isSelected'], true);
    case corTypes.UNSELECT_COURSE:
      return state.setIn(['entities', "courses", action.index, "isSelected"], false);
    default:
      return state;
  }
}
