import React from "react";
import { shallow } from "enzyme";
import UsersComponent from "./UsersComponent";

describe("UsersComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UsersComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
