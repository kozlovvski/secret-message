import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr } from "../../test/testUtils";
import AuthScreenTitle, { IAuthScreenTitleProps } from "./AuthScreenTitle";

const defaultProps: IAuthScreenTitleProps = {};

describe("<AuthScreenTitle />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<AuthScreenTitle {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-AuthScreenTitle");
    expect(component.length).toBe(1);
  });
});
