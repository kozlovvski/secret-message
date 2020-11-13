import { mount } from "enzyme";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { findByTestAttr } from "../../test/testUtils";
import TemplateNameLayout, { TemplateNameLayoutRoute } from "./TemplateName";

const ChildComponent = () => <div data-testid="child-component" />;

describe("TemplateName layout", () => {
  const mountWrapper = () =>
    mount(
      <TemplateNameLayout>
        <ChildComponent />
      </TemplateNameLayout>
    );
  let wrapper: ReturnType<typeof mountWrapper>;

  beforeEach(() => {
    wrapper = mountWrapper();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "layout-TemplateName");
    expect(component.length).toBe(1);
  });

  test("should render passed children", () => {
    const childMatch = findByTestAttr(wrapper, "child-component");
    expect(childMatch.length).toBe(1);
  });
});

describe("TemplateName layout route component", () => {
  const mountWrapper = () =>
    mount(
      <BrowserRouter>
        <TemplateNameLayoutRoute component={ChildComponent} />
      </BrowserRouter>
    ).find(TemplateNameLayoutRoute);
  let wrapper: ReturnType<typeof mountWrapper>;

  beforeEach(() => {
    wrapper = mountWrapper();
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "layout-route-TemplateName");
    expect(component.length).toBe(1);
  });

  test("should render a Route component", () => {
    expect(wrapper.find("Route").exists()).toBeTruthy();
  });

  test("should have a defined render method", () => {
    const component = findByTestAttr(wrapper, "layout-route-TemplateName");
    expect(component.prop("render")).not.toBe(undefined);
  });

  test("should render a TemplateName layout component inside", () => {
    const component = findByTestAttr(wrapper, "layout-route-TemplateName");
    const layoutComponent = findByTestAttr(component, "layout-TemplateName");
    expect(layoutComponent.length).toBe(1);
  });
});
