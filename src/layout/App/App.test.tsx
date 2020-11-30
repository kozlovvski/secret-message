import { Button } from "antd";
import { mount, shallow } from "enzyme";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { findByTestAttr } from "test/testUtils";
import AppLayout, { AppLayoutRoute } from "./App";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSelector: jest.Mock = require("react-redux").useSelector;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

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
    useSelector.mockReturnValue({
      isLoggedIn: false,
      showScreen: false,
    });
    mockDispatch.mockReturnValue(jest.fn());
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

describe("App layout components", () => {
  const setup = () =>
    shallow(
      <AppLayout>
        <ChildComponent />
      </AppLayout>
    );
  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    useSelector.mockReturnValue({
      isLoggedIn: false,
      showScreen: false,
    });
    mockDispatch.mockReturnValue(jest.fn());
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render logo", () => {
    const childMatch = findByTestAttr(wrapper, "logo");
    expect(childMatch.length).toBe(1);
  });

  describe("if loggedIn is false", () => {
    beforeEach(() => {
      useSelector.mockReturnValue({
        isLoggedIn: false,
        showScreen: false,
      });
      mockDispatch.mockReturnValue(jest.fn());
      wrapper = setup();
    });
    test("should render sign in / sing up button", () => {
      console.log(wrapper.find(Button).prop("data-test-id"));
      const childMatch = findByTestAttr(wrapper, "sign-in-up");
      expect(childMatch.length).toBe(1);
    });
  });

  describe("if loggedIn is true", () => {
    beforeEach(() => {
      useSelector.mockReturnValue({
        isLoggedIn: true,
        showScreen: false,
      });
      mockDispatch.mockReturnValue(jest.fn());
      wrapper = setup();
    });
    test("should render sign out button", () => {
      const childMatch = findByTestAttr(wrapper, "sign-out");
      expect(childMatch.length).toBe(1);
    });
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
    useSelector.mockReturnValue({
      isLoggedIn: false,
      showScreen: false,
    });
    mockDispatch.mockReturnValue(jest.fn());
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
