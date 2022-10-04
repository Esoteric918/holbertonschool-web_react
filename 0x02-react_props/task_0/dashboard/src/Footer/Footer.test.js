import Footer from "./Footer";
import { shallow } from "enzyme";
import React from "react";

describe("Footer", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });
});
