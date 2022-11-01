import { corTypes } from "./courseActionTypes";
import { bindActionCreators } from "redux";

// bound the selectCourse action creator
export const selectCourse = (index) => {
  return {
    type: corTypes.SELECT_COURSE,
    index,
    // payload: { course, selected: true },
  };
}
// bound the unSelectCourse action creator

export const unSelectCourse = (index) => {
  return {
    type: corTypes.UNSELECT_COURSE,
    index,
    // payload: { course, selected: false },
  };
}

// create a bindActionCreators function

export const boundActionCreators = (dispatch) =>
  bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
