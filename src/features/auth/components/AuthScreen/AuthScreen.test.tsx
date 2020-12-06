import { shallow } from "enzyme";
import { hideAuthScreen } from "features/auth/auth.slice";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "test/testUtils";
import AuthScreen, { IAuthScreenProps } from "./AuthScreen";

const defaultProps: IAuthScreenProps = {};

describe("<AuthScreen />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<AuthScreen {...defaultProps} {...props} />);

  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-AuthScreen");
    expect(component.length).toBe(1);
  });

  test("should render a close button", () => {
    const closeButton = findByTestAttr(wrapper, "close-button");
    expect(closeButton.length).toBe(1);
  });

  test("should dispatch a correct action on close button click", () => {
    const closeButton = findByTestAttr(wrapper, "close-button");
    closeButton.simulate("click");
    expect(mockDispatch).toBeCalledWith(hideAuthScreen());
  });

  describe("if `authScreen` is signUp", () => {
    beforeEach(() => {
      (useSelector as jest.Mock).mockReturnValue({
        ...defaultState.auth,
        authScreen: "signUp",
      });
      wrapper = setup();
    });

    test("should display a sign up form", () => {
      const signUpForm = findByTestAttr(wrapper, "signup-form");
      expect(signUpForm.length).toBe(1);
    });
  });

  describe("if `authScreen` is signIn", () => {
    beforeEach(() => {
      (useSelector as jest.Mock).mockReturnValue({
        ...defaultState.auth,
        authScreen: "signIn",
      });
      wrapper = setup();
    });

    test("should display a sign in form", () => {
      const signInForm = findByTestAttr(wrapper, "signin-form");
      expect(signInForm.length).toBe(1);
    });
  });
});
