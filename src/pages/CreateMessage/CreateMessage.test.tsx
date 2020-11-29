import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr, mockRouteChildrenProps } from "test/testUtils";

import CreateMessagePage from "./CreateMessage";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSelector: jest.Mock = require("react-redux").useSelector;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("CreateMessage page", () => {
  const renderWrapper = () =>
    shallow(<CreateMessagePage {...mockRouteChildrenProps({})} />);
  let wrapper: ReturnType<typeof renderWrapper>;

  beforeEach(() => {
    useSelector.mockReturnValue({
      success: false,
      loading: false,
    });
    mockDispatch.mockReturnValue(jest.fn());
    wrapper = renderWrapper();
  });

  test("should mount when passed to a Route component", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "page-CreateMessage");
    expect(component.length).toBe(1);
  });
});
