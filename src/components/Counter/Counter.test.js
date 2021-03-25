import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("Counter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
});
