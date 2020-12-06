import { shallow } from "enzyme";
import React from "react";
import { useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "../../../../test/testUtils";
import SignInForm, { ISignInFormProps } from "./SignInForm";

const defaultProps: ISignInFormProps = {};

describe("<SignInForm />", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
  });

  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignInForm {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-SignInForm");
    expect(component.length).toBe(1);
  });
});
