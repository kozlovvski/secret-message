import { Form } from "antd";
import { Store } from "antd/lib/form/interface";
import { shallow } from "enzyme";
import { signUpAction } from "features/auth/auth.slice";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "test/testUtils";
import SignUpForm, { ISignUpFormProps } from "./SignUpForm";

const defaultProps: ISignUpFormProps = {};

jest.mock("features/auth/auth.slice", () => ({
  signUpAction: jest.fn(),
}));

describe("<SignUpForm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignUpForm {...defaultProps} {...props} />);
  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-SignUpForm");
    expect(component.length).toBe(1);
  });

  test("should render a Form component", () => {
    const form = findByTestAttr(wrapper, "form");
    expect(form.length).toBe(1);
    expect(wrapper.find(Form).length).toBe(1);
  });

  test("should render a name input", () => {
    const nameInput = findByTestAttr(wrapper, "name-input");
    expect(nameInput.length).toBe(1);
  });

  test("should render an email input", () => {
    const emailInput = findByTestAttr(wrapper, "email-input");
    expect(emailInput.length).toBe(1);
  });

  test("should render a password input", () => {
    const passwordInput = findByTestAttr(wrapper, "password-input");
    expect(passwordInput.length).toBe(1);
  });

  test("should render a confirm password input", () => {
    const confirmPasswordInput = findByTestAttr(
      wrapper,
      "confirm-password-input"
    );
    expect(confirmPasswordInput.length).toBe(1);
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
      displayName: "testName",
    };
    finishHandler(examplePayload);
    expect(mockDispatch).toBeCalledWith(signUpAction(examplePayload));
  });
});
