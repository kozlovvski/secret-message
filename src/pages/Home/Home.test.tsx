import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr, mockRouteChildrenProps } from "../../test/testUtils";
import HomePage from "./Home";

describe("Home page", () => {
  const renderWrapper = () =>
    shallow(<HomePage {...mockRouteChildrenProps({})} />);
  let wrapper: ReturnType<typeof renderWrapper>;

  beforeEach(() => {
    wrapper = renderWrapper();
  });

  test("should mount when passed to a Route component", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "page-Home");
    expect(component.length).toBe(1);
  });
});
