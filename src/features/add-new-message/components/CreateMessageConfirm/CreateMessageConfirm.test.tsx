import "firebase/firestore";

import { shallow } from "enzyme";
import { clearMessage } from "features/add-new-message/new-message.slice";
import { showAuthScreen } from "features/auth/auth.slice";
import firebase from "firebase-instance";
import React from "react";
import { mockDispatch, useSelector } from "react-redux";
import defaultState from "store/default-state";
import { findByTestAttr } from "test/testUtils";
import merge from "lodash/merge";

import CreateMessageConfirm, {
  ICreateMessageConfirmProps,
} from "./CreateMessageConfirm";
import { message } from "antd";

const defaultProps: ICreateMessageConfirmProps = {};

describe("<CreateMessageConfirm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<CreateMessageConfirm {...defaultProps} {...props} />);

  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock)
      .mockReturnValueOnce({
        success: true,
        loading: false,
        message: {
          id: "123-test",
          createdAt: new firebase.firestore.Timestamp(1000, 0),
          alreadyViewed: false,
        },
      })
      .mockReturnValueOnce(merge({}, defaultState.auth, { isLoggedIn: false }));
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
    const messageLink = findByTestAttr(wrapper, "message-link");
    expect(messageLink.length).toBe(1);
  });

  test("should render a correct message link", () => {
    const messageLink = findByTestAttr(wrapper, "message-link");
    expect(messageLink.prop("value")).toBe(
      window.location.host + "/message/123-test"
    );
  });

  test("should fire correct funcitons on message link click", () => {
    document.execCommand = jest.fn();
    const messageLink = findByTestAttr(wrapper, "message-link");
    messageLink.simulate("click", {
      persist: jest.fn(),
      currentTarget: {
        select: jest.fn(),
        setSelectionRange: jest.fn(),
      },
    });
    expect(document.execCommand).toBeCalled();
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

  test("should render a footnote link click", () => {
    const footnoteLink = findByTestAttr(wrapper, "footnote-link");
    expect(footnoteLink.length).toBe(1);
  });
  test("should dispatch a correct action on footnote link click", () => {
    const footnoteLink = findByTestAttr(wrapper, "footnote-link");
    footnoteLink.simulate("click");
    expect(mockDispatch).toBeCalledWith(showAuthScreen());
  });
});
