import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import courseReducer from "./courseReducer";

const initialState = {
  courses: [],
  isSelected: false,
};

const data = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40,
  },
];

describe("courseReducer", () => {
  it("Test that the default state returns an empty array", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("Test that FETCH_COURSE_SUCCESS returns the data passed", () => {
    const action = { type: FETCH_COURSE_SUCCESS, data };
    const newState = courseReducer(data, action);
    expect(newState).toEqual(data);
  });

  it("Test that SELECT_COURSE returns the data with the right item updated", () => {
    const index = 2
    const action = { type: SELECT_COURSE, index };
    expect(courseReducer(data, action)).toEqual(data);
  });

  it("Test that UNSELECT_COURSE returns the data with the right item updated", () => {
    const state = courseReducer(undefined, {
      type: UNSELECT_COURSE,
    });
    expect(state).toEqual({ ...initialState, isSelected: false });
  });
});
