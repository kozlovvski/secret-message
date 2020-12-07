import { Store } from "antd/lib/form/interface";
import { shallow } from "enzyme";
import { signInAction } from "features/auth/auth.slice";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "../../../../test/testUtils";
import SignInForm, { ISignInFormProps } from "./SignInForm";

const defaultProps: ISignInFormProps = {};

jest.mock("features/auth/auth.slice", () => ({
  signInAction: jest.fn(),
}));

describe("<SignInForm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignInForm {...defaultProps} {...props} />);
  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-SignInForm");
    expect(component.length).toBe(1);
  });

  test("should render an email input", () => {
    const emailInput = findByTestAttr(wrapper, "email-input");
    expect(emailInput.length).toBe(1);
  });

  test("should render a password input", () => {
    const passwordInput = findByTestAttr(wrapper, "password-input");
    expect(passwordInput.length).toBe(1);
  });

  test("should render a submit button", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.length).toBe(1);
  });

  test("should not submit with empty inputs", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click");
    expect(mockDispatch).not.toBeCalled();
  });

  test("should dispatch a correct action on submit", () => {
    const form = findByTestAttr(wrapper, "form");
    const finishHandler: (data: Store) => void = form.prop("onFinish");
    const examplePayload = {
      email: "test@gmail.com",
      password: "test123",
    };
    finishHandler(examplePayload);
    expect(mockDispatch).toBeCalledWith(signInAction(examplePayload));
  });
});
