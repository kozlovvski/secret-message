import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr, mockRouteChildrenProps } from "test/testUtils";

import HomePage from "./Home";
import LazyHomePage from "./Home.lazy";

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

describe("LazyHome page", () => {
  const renderWrapper = () =>
    shallow(<LazyHomePage {...mockRouteChildrenProps({})} />);
  let wrapper: ReturnType<typeof renderWrapper>;

  beforeEach(() => {
    wrapper = renderWrapper();
  });

  test("should mount when passed to a Route component", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render a Suspense component", () => {
    const component = findByTestAttr(wrapper, "suspense");
    expect(component.length).toBe(1);
    expect(wrapper.find("Suspense").length).toBe(1);
  });
});
