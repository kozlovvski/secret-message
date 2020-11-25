import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "test/testUtils";

import CreateMessageConfirm, {
  ICreateMessageConfirmProps,
} from "./CreateMessageConfirm";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSelector: jest.Mock = require("react-redux").useSelector;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const defaultProps: ICreateMessageConfirmProps = {};

describe("<CreateMessageConfirm />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<CreateMessageConfirm {...defaultProps} {...props} />);

  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    useSelector.mockReturnValue({ success: false, loading: false });
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
});
