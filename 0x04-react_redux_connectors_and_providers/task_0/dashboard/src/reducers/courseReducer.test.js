import {corTypes } from "../actions/courseActionTypes";
import courseReducer from "./courseReducer";
import { Map } from "immutable";

const initialState = Map({});

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

  let rtnState = [];
  let mapState = Map({"entities": {"courses": {"1": {"id": 1, "isSelected": false, "name": "test"}}}, "result": [1]});

  it("should return the initial state", () => {
    expect(courseReducer({}, initialState)).toEqual(initialState);
  });

  it("should return the new state", () => {
    expect(courseReducer(typeAction, initialState)).toEqual(mapState);
  });

  it('test SELECT_COURSE returns action with correct data', () => {
    rtnState = courseReducer({ type: corTypes.SELECT_COURSE, index: 1},
      mapState);
      // console.log(rtnState, 'is this what we are looking for?');
    expect(rtnState.toJS().entities.courses[1].isSelected).toEqual(true);
  });

  it('test UNSELECT_COURSE returns action with correct data', () => {
    rtnState = courseReducer({ type: corTypes.UNSELECT_COURSE, index: 1},
      rtnState);
    expect(rtnState.toJS().entities.courses[1].isSelected).toEqual(false);
  });

});

