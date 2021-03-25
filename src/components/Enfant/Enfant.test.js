import React from "react";
import { shallow } from "enzyme";
import Enfant from "./Enfant";

describe("Enfant", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Enfant />);
    expect(wrapper).toMatchSnapshot();
  });
});
