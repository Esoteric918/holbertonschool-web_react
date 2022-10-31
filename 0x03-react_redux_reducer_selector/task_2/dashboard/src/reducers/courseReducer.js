import { corActTypes } from '../actions/courseActionTypes';


// When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends the list of courses in a data attribute. The action would look

const initialState = {
  courses: [],
  isSelected: false,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case corActTypes.FETCH_COURSE_SUCCESS:
      return {
        ...state,
        courses: action.courses,

      };
    case corActTypes.SELECT_COURSE:
      return {
        ...state,
        isSelected: true,
        courses: state.courses.map((course) => {
          if (course.id === action.id) {
            return {
              ...course,
              isSelected: true,
            };
          }
          return course;
        }),
      };
    case corActTypes.UNSELECT_COURSE:
      return {
        ...state,
        isSelected: false,
        courses: state.courses.map((course) => {
          if (course.id === action.id) {
            return {
              ...course,
              isSelected: false,
            };
          }
          return course;
        }),
      };
    default:
      return state;
  }
}
export default courseReducer;
