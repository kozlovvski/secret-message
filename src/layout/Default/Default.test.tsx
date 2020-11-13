import { mount } from "enzyme";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { findByTestAttr } from "../../test/testUtils";
import DefaultLayout, { DefaultLayoutRoute } from "./Default";

const ChildComponent = () => <div data-testid="child-component" />;

describe("Default layout", () => {
  const mountWrapper = () =>
    mount(
      <DefaultLayout>
        <ChildComponent />
      </DefaultLayout>
    );
  let wrapper: ReturnType<typeof mountWrapper>;

  beforeEach(() => {
    wrapper = mountWrapper();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "layout-Default");
    expect(component.length).toBe(1);
  });

  test("should render passed children", () => {
    const childMatch = findByTestAttr(wrapper, "child-component");
    expect(childMatch.length).toBe(1);
  });
});

describe("Default layout route component", () => {
  const mountWrapper = () =>
    mount(
      <BrowserRouter>
        <DefaultLayoutRoute component={ChildComponent} />
      </BrowserRouter>
    ).find(DefaultLayoutRoute);
  let wrapper: ReturnType<typeof mountWrapper>;

  beforeEach(() => {
    wrapper = mountWrapper();
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "layout-route-Default");
    expect(component.length).toBe(1);
  });

  test("should render a Route component", () => {
    expect(wrapper.find("Route").exists()).toBeTruthy();
  });

  test("should have a defined render method", () => {
    const component = findByTestAttr(wrapper, "layout-route-Default");
    expect(component.prop("render")).not.toBe(undefined);
  });

  test("should render a Default layout component inside", () => {
    const component = findByTestAttr(wrapper, "layout-route-Default");
    const layoutComponent = findByTestAttr(component, "layout-Default");
    expect(layoutComponent.length).toBe(1);
  });
});
