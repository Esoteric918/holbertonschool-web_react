import { corTypes } from '../actions/courseActionTypes';


// When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends the list of courses in a data attribute. The action would look

const initialState = [];


const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case corTypes.FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
    case corTypes.SELECT_COURSE:
      return state.map((course) => {
          if (course.id === action.index) {
            return {
              ...course,
              isSelected: true,
            };
        }
        return course;
      });
    case corTypes.UNSELECT_COURSE:
      return state.map((course) => {
        if (course.id === action.index) {
          return {
            ...course,
            isSelected: false,
          };
      }
      return course;
    });
    default:
      return state;
  }
}
export default courseReducer;
