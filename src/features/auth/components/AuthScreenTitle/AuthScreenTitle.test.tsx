import { shallow } from "enzyme";
import { changeAuthScreen } from "features/auth/auth.slice";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "test/testUtils";
import AuthScreenTitle, { IAuthScreenTitleProps } from "./AuthScreenTitle";
import styles from "./AuthScreenTitle.module.scss";

const defaultProps: IAuthScreenTitleProps = {};

describe("<AuthScreenTitle />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<AuthScreenTitle {...defaultProps} {...props} />);
  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-AuthScreenTitle");
    expect(component.length).toBe(1);
  });

  test("should render a sign in title", () => {
    const signInTitle = findByTestAttr(wrapper, "sign-in-title");
    expect(signInTitle.length).toBe(1);
  });

  test("should render a sign up title", () => {
    const signUpTitle = findByTestAttr(wrapper, "sign-up-title");
    expect(signUpTitle.length).toBe(1);
  });

  test("should render an or title", () => {
    const orTitle = findByTestAttr(wrapper, "or-title");
    expect(orTitle.length).toBe(1);
  });

  describe("if authScreen is signIn", () => {
    beforeEach(() => {
      (useSelector as jest.Mock).mockReturnValue({
        ...defaultState.auth,
        authScreen: "signIn",
      });
      wrapper = setup();
    });

    test("sign in title should have an active class", () => {
      const signInTitle = findByTestAttr(wrapper, "sign-in-title");
      expect(signInTitle.hasClass(styles["active"])).toBe(true);
    });

    test("sign in title should dispatch a correct action on click", () => {
      const signInTitle = findByTestAttr(wrapper, "sign-in-title");
      signInTitle.simulate("click");
      expect(mockDispatch).toBeCalledWith(changeAuthScreen("signIn"));
    });

    test("sign up title should NOT have an active class", () => {
      const signInTitle = findByTestAttr(wrapper, "sign-up-title");
      expect(signInTitle.hasClass(styles["active"])).toBe(false);
    });

    test("sign up title should dispatch a correct action on click", () => {
      const signInTitle = findByTestAttr(wrapper, "sign-up-title");
      signInTitle.simulate("click");
      expect(mockDispatch).toBeCalledWith(changeAuthScreen("signUp"));
    });
  });

  describe("if authScreen is signUp", () => {
    beforeEach(() => {
      (useSelector as jest.Mock).mockReturnValue({
        ...defaultState.auth,
        authScreen: "signUp",
      });
      wrapper = setup();
    });

    test("sign up title should have an active class", () => {
      const signInTitle = findByTestAttr(wrapper, "sign-up-title");
      expect(signInTitle.hasClass(styles["active"])).toBe(true);
    });

    test("sign in title should NOT have an active class", () => {
      const signInTitle = findByTestAttr(wrapper, "sign-in-title");
      expect(signInTitle.hasClass(styles["active"])).toBe(false);
    });
  });
});
