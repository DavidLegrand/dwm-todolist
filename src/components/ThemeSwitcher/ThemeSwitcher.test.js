import React from "react";
import { shallow } from "enzyme";
import ThemeSwitcher from "./ThemeSwitcher";

describe("ThemeSwitcher", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper).toMatchSnapshot();
  });
});
