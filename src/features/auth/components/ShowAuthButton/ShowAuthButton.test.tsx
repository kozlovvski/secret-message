import { shallow } from "enzyme";
import { showAuthScreen } from "features/auth/auth.slice";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "test/testUtils";
import ShowAuthButton, { IShowAuthButtonProps } from "./ShowAuthButton";

const defaultProps: IShowAuthButtonProps = {};

describe("<ShowAuthButton />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<ShowAuthButton {...defaultProps} {...props} />);
  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-ShowAuthButton");
    expect(component.length).toBe(1);
  });

  test("should dispatch a correct action on click", () => {
    const component = findByTestAttr(wrapper, "component-ShowAuthButton");
    component.simulate("click");
    expect(mockDispatch).toBeCalledWith(showAuthScreen());
  });
});
