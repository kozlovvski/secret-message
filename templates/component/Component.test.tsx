import { shallow } from "enzyme";
import React from "react";
import { useSelector } from "react-redux";
import defaultState from "store/default-state";

import { findByTestAttr } from "test/testUtils";
import TemplateName, { ITemplateNameProps } from "./TemplateName";

const defaultProps: ITemplateNameProps = {};

describe("<TemplateName />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<TemplateName {...defaultProps} {...props} />);
  let wrapper: ReturnType<typeof setup>;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(defaultState.auth);
    wrapper = setup();
  });

  test("should mount", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "component-TemplateName");
    expect(component.length).toBe(1);
  });
});
