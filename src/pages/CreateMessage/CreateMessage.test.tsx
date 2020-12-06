import { shallow } from "enzyme";
import React from "react";
import { useSelector, mockDispatch } from "react-redux";
import { findByTestAttr, mockRouteChildrenProps } from "test/testUtils";

import CreateMessagePage from "./CreateMessage";

describe("CreateMessage page", () => {
  const renderWrapper = () =>
    shallow(<CreateMessagePage {...mockRouteChildrenProps({})} />);
  let wrapper: ReturnType<typeof renderWrapper>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({
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
