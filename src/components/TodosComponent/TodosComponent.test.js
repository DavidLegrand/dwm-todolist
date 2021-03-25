import React from "react";
import { shallow } from "enzyme";
import TodosComponent from "./TodosComponent";

describe("TodosComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TodosComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
