import { mount } from "enzyme";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { findByTestAttr } from "test/testUtils";
import AppLayout, { AppLayoutRoute } from "./App";

const ChildComponent = () => <div data-testid="child-component" />;

describe("App layout", () => {
  const mountWrapper = () =>
    mount(
      <AppLayout>
        <ChildComponent />
      </AppLayout>
    );
  let wrapper: ReturnType<typeof mountWrapper>;

  beforeEach(() => {
    wrapper = mountWrapper();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "layout-App");
    expect(component.length).toBe(1);
  });

  test("should render passed children", () => {
    const childMatch = findByTestAttr(wrapper, "child-component");
    expect(childMatch.length).toBe(1);
  });
});

describe("App layout route component", () => {
  const mountWrapper = () =>
    mount(
      <BrowserRouter>
        <AppLayoutRoute component={ChildComponent} />
      </BrowserRouter>
    ).find(AppLayoutRoute);
  let wrapper: ReturnType<typeof mountWrapper>;

  beforeEach(() => {
    wrapper = mountWrapper();
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "layout-route-App");
    expect(component.length).toBe(1);
  });

  test("should render a Route component", () => {
    expect(wrapper.find("Route").exists()).toBeTruthy();
  });

  test("should have a defined render method", () => {
    const component = findByTestAttr(wrapper, "layout-route-App");
    expect(component.prop("render")).not.toBe(undefined);
  });

  test("should render a App layout component inside", () => {
    const component = findByTestAttr(wrapper, "layout-route-App");
    const layoutComponent = findByTestAttr(component, "layout-App");
    expect(layoutComponent.length).toBe(1);
  });
});
