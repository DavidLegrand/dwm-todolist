import React from "react";
import { shallow } from "enzyme";
import TestComponent from "./PostsComponent";

describe("TestComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TestComponent />);
    expect(wrapper).toMatchSnapshot();
    expect(2 + 2).toBe(4)
  });
});