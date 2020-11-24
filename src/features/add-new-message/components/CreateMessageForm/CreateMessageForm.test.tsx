import { shallow } from "enzyme";
import React from "react";
// import { useSelector } from "react-redux";

import { findByTestAttr } from "test/testUtils";
import CreateMessageForm, {
  ICreateMessageFormProps,
} from "./CreateMessageForm";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSelector: jest.Mock = require("react-redux").useSelector;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const defaultProps: ICreateMessageFormProps = {};

describe("<CreateMessageForm />", () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ success: false, loading: false });
    mockDispatch.mockReturnValue(jest.fn());
  });

  const setup = (props?: Record<string, unknown>) =>
    shallow(<CreateMessageForm {...defaultProps} {...props} />);

  let wrapper: ReturnType<typeof setup>;

  describe("if `success` is false", () => {
    beforeEach(() => {
      wrapper = setup();
    });

    test("should mount", () => {
      expect(wrapper.length).toBe(1);
    });

    test("should render without an error", () => {
      const component = findByTestAttr(wrapper, "component-CreateMessageForm");
      expect(component.length).toBe(1);
    });

    test("should render a message input", () => {
      const component = findByTestAttr(wrapper, "message-input");
      expect(component.length).toBe(1);
    });

    test("should render a submit button", () => {
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(1);
    });

    // TODO: write tests for calling the API with `createMessage` cloud function
  });

  describe("if `success` is true", () => {
    beforeEach(() => {
      useSelector.mockReturnValue({ success: true, loading: false });
      wrapper = setup();
    });

    test("should mount", () => {
      expect(wrapper.length).toBe(1);
    });

    test("should not render", () => {
      const component = findByTestAttr(wrapper, "component-CreateMessageForm");
      expect(component.length).toBe(0);
    });
  });
});
