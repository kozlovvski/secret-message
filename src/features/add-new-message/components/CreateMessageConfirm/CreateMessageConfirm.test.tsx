import "firebase/firestore";

import { shallow } from "enzyme";
import firebase from "firebase-instance";
import React from "react";
import { findByTestAttr } from "test/testUtils";

import CreateMessageConfirm, {
  ICreateMessageConfirmProps,
} from "./CreateMessageConfirm";
import { mockDispatch, useSelector } from "react-redux";
import { clearMessage } from "features/add-new-message/new-message.slice";

const defaultProps: ICreateMessageConfirmProps = {};

describe("<CreateMessageConfirm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<CreateMessageConfirm {...defaultProps} {...props} />);

  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({
      success: true,
      loading: false,
      message: {
        id: "123-test",
        createdAt: new firebase.firestore.Timestamp(1000, 0),
        alreadyViewed: false,
      },
    });
    mockDispatch.mockReturnValue(jest.fn());
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-CreateMessageConfirm");
    expect(component.length).toBe(1);
  });

  test("should render a congrats-title", () => {
    const component = findByTestAttr(wrapper, "congrats-title");
    expect(component.length).toBe(1);
  });

  test("should render a congrats-subtitle", () => {
    const component = findByTestAttr(wrapper, "congrats-subtitle");
    expect(component.length).toBe(1);
  });

  test("should render a message link", () => {
    const component = findByTestAttr(wrapper, "message-link");
    expect(component.length).toBe(1);
  });

  test("should render a correct message link", () => {
    const component = findByTestAttr(wrapper, "message-link");
    expect(component.prop("value")).toBe(
      window.location.host + "/message/123-test"
    );
  });

  test("should render a correct message link", () => {
    const component = findByTestAttr(wrapper, "message-link");
    expect(component.prop("value")).toBe(
      window.location.host + "/message/123-test"
    );
  });

  test("should render a create another message button", () => {
    const component = findByTestAttr(wrapper, "create-another-button");
    expect(component.length).toBe(1);
  });

  test("should dispatch a correct action on button click", () => {
    const button = findByTestAttr(wrapper, "create-another-button");
    button.simulate("click");
    expect(mockDispatch).toBeCalledWith(clearMessage());
  });
});
