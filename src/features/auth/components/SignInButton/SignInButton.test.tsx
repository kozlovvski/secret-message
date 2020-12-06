import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr } from "test/testUtils";
import SignInButton, { ISignInButtonProps } from "./SignInButton";

const defaultProps: ISignInButtonProps = {};

describe("<SignInButton />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignInButton {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-SignInButton");
    expect(component.length).toBe(1);
  });
});
