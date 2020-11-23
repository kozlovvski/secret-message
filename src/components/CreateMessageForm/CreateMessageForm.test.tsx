import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr } from "../../test/testUtils";
import CreateMessageForm, {
  ICreateMessageFormProps,
} from "./CreateMessageForm";

const defaultProps: ICreateMessageFormProps = {
  success: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNewCard: () => {},
};

describe("<CreateMessageForm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<CreateMessageForm {...defaultProps} {...props} />);

  let wrapper: ReturnType<typeof setup>;

  describe("if `success` is false", () => {
    beforeEach(() => {
      wrapper = setup();
    });

    test("should mount", () => {
      const wrapper = setup();
      expect(wrapper.length).toBe(1);
    });

    test("should render without an error", () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, "component-CreateMessageForm");
      expect(component.length).toBe(1);
    });

    test("should render a message input", () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, "message-input");
      expect(component.length).toBe(1);
    });

    test("should render a submit button", () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(1);
    });

    test("should render a submit button", () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(1);
    });

    // TODO: write tests for calling the API with `createMessage` cloud function
  });

  describe("if `success` is true", () => {
    beforeEach(() => {
      wrapper = setup({ success: true });
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
