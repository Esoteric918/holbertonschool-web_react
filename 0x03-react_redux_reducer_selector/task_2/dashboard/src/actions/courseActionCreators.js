import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { bindActionCreators } from "redux";

// bound the selectCourse action creator
export const selectCourse = (course) => {
  return {
    type: SELECT_COURSE,
    index: 2,
    // payload: { course, selected: true },
  };
}
// bound the unSelectCourse action creator

export const unSelectCourse = (course) => {
  return {
    type: UNSELECT_COURSE,
    index: 2,
    // payload: { course, selected: false },
  };
}

// create a bindActionCreators function

export const boundActionCreators = (dispatch) =>
  bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
