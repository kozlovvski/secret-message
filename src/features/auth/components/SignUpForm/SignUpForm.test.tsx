import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr } from "../../../../test/testUtils";
import SignUpForm, { ISignUpFormProps } from "./SignUpForm";

const defaultProps: ISignUpFormProps = {};

describe("<SignUpForm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignUpForm {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-SignUpForm");
    expect(component.length).toBe(1);
  });
});
