import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr } from "test/testUtils";
import SignInButton, { ISignInButtonProps } from "./SignInButton";

const defaultProps: ISignInButtonProps = {};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSelector: jest.Mock = require("react-redux").useSelector;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("<SignInButton />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<SignInButton {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-SignInButton");
    expect(component.length).toBe(1);
  });
});
