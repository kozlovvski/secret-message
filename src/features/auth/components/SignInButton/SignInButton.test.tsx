import { shallow } from "enzyme";
import { showAuthScreen } from "features/auth/auth.slice";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "test/testUtils";
import SignInButton, { ISignInButtonProps } from "./SignInButton";

const defaultProps: ISignInButtonProps = {};

describe("<SignInButton />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignInButton {...defaultProps} {...props} />);
  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-SignInButton");
    expect(component.length).toBe(1);
  });

  test("should dispatch a correct action on click", () => {
    const component = findByTestAttr(wrapper, "component-SignInButton");
    component.simulate("click");
    expect(mockDispatch).toBeCalledWith(showAuthScreen());
  });
});
