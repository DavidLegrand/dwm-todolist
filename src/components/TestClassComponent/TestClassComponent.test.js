import React from "react";
import { shallow } from "enzyme";
import TestClassComponent from "./TestClassComponent";

describe("TestClassComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TestClassComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
