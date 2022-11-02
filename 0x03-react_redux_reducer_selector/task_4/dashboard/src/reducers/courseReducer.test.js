import {corTypes } from "../actions/courseActionTypes";
import courseReducer from "./courseReducer";


describe("courseReducer tests", () => {
  const typeAction = {
    type: corTypes.FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "test",
        isSelected: false,
      },
    ],
  };

  let rtnAction = [];

  it("should return the initial state", () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it("should return the new state", () => {
    expect(courseReducer([], typeAction)).toEqual([
      {
        id: 1,
        name: "test",
        isSelected: false,
      },
    ]);
  });

  it('test SELECT_COURSE returns action with correct data', () => {
    rtnAction = courseReducer( [{
      id: 1,
      name: "test",
      isSelected: false,
    }], { type: corTypes.SELECT_COURSE, index: 1});
    expect(rtnAction).toEqual([{ id: 1, isSelected: true , name: "test"}]);
  });

  it('test UNSELECT_COURSE returns action with correct data', () => {
    rtnAction = courseReducer( [{
      id: 1,
      name: "test",
      isSelected: false,
    }], { type: corTypes.UNSELECT_COURSE, index: 1});
    expect(rtnAction).toEqual([{ id: 1, isSelected: false , name: "test"}]);
  });

});

