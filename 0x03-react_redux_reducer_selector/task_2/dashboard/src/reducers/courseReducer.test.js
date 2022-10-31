// Test that the default state returns an empty array
// Test that FETCH_COURSE_SUCCESS returns the data passed
// Test that SELECT_COURSE returns the data with the right item updated
// Test that UNSELECT_COURSE returns the data with the right item updated

import { SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { FETCH_COURSE_SUCCESS } from "../actions/courseActionCreators";
import courseReducer from "./courseReducer";
const initialState = {
  courses: [],
  isSelected: false,
};

describe("courseReducer", () => {
  it("Test that the default state returns an empty array", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("Test that FETCH_COURSE_SUCCESS returns the data passed", () => {
    const state = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      courses: ["test"],
    });
    expect(state).toEqual({ ...initialState, courses: ["test"] });
  });

  it("Test that SELECT_COURSE returns the data with the right item updated", () => {
    const state = courseReducer(undefined, {
      type: SELECT_COURSE,
    });
    expect(state).toEqual({ ...initialState, isSelected: true });
  });

  it("Test that UNSELECT_COURSE returns the data with the right item updated", () => {
    const state = courseReducer(undefined, {
      type: UNSELECT_COURSE,
    });
    expect(state).toEqual({ ...initialState, isSelected: false });
  });
});
