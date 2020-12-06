import { shallow } from "enzyme";
import React from "react";
import { useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "test/testUtils";
import AuthScreen, { IAuthScreenProps } from "./AuthScreen";

const defaultProps: IAuthScreenProps = {};

describe("<AuthScreen />", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
  });

  const setup = (props?: Record<string, unknown>) =>
    shallow(<AuthScreen {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-AuthScreen");
    expect(component.length).toBe(1);
  });
});
