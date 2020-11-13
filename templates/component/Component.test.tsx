import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr } from "../../test/testUtils";
import TemplateName, { ITemplateNameProps } from "./TemplateName";

const defaultProps: ITemplateNameProps = {};

describe("<TemplateName />", () => {
  const setup = (props?: Record<string, unknown>) =>
    shallow(<TemplateName {...defaultProps} {...props} />);

  test("should mount", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-TemplateName");
    expect(component.length).toBe(1);
  });
});
