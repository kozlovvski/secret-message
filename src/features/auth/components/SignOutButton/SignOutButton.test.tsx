import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr } from "../../../../test/testUtils";
import SignOutButton, { ISignOutButtonProps } from "./SignOutButton";

const defaultProps: ISignOutButtonProps = {};

describe("<SignOutButton />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignOutButton {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-SignOutButton");
    expect(component.length).toBe(1);
  });
});
