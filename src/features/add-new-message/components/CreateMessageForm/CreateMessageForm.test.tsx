import { Form } from "antd";
import { shallow } from "enzyme";
import { createMessage } from "features/add-new-message/new-message.slice";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";

import { findByTestAttr } from "test/testUtils";
import { CreateSMessagePayload } from "typings/secret-message";
import CreateMessageForm, {
  ICreateMessageFormProps,
} from "./CreateMessageForm";

jest.mock("features/add-new-message/new-message.slice", () => ({
  createMessage: jest.fn(),
}));

const defaultProps: ICreateMessageFormProps = {};

describe("<CreateMessageForm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<CreateMessageForm {...defaultProps} {...props} />);

  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({
      success: false,
      loading: false,
    });
    mockDispatch.mockReturnValue(jest.fn());
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-CreateMessageForm");
    expect(component.length).toBe(1);
  });

  test("should render a Form component", () => {
    const component = findByTestAttr(wrapper, "form");
    expect(component.length).toBe(1);
    expect(wrapper.find(Form).length).toBe(1);
  });

  test("should render a message input", () => {
    const component = findByTestAttr(wrapper, "message-input");
    expect(component.length).toBe(1);
  });

  test("should render a submit button", () => {
    const component = findByTestAttr(wrapper, "submit-button");
    expect(component.length).toBe(1);
  });

  test("should not submit with empty input", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click");
    expect(mockDispatch).not.toBeCalled();
  });

  test("should dispatch a correct action on submit", () => {
    const form = findByTestAttr(wrapper, "form");
    const finishHandler: (data: CreateSMessagePayload) => void = form.prop(
      "onFinish"
    );
    finishHandler({ message: "test message" });
    expect(mockDispatch).toBeCalledWith(
      createMessage({ message: "test message" })
    );
  });
});
