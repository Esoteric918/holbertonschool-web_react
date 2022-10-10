import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a table with 5 rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow").length).toBe(5);
  });
})
