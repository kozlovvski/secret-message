import { shallow } from "enzyme";
import React from "react";

import { findByTestAttr, mockRouteChildrenProps } from "../../test/testUtils";
import TemplateNamePage from "./TemplateName";

describe("TemplateName page", () => {
  const renderWrapper = () =>
    shallow(<TemplateNamePage {...mockRouteChildrenProps({})} />);
  let wrapper: ReturnType<typeof renderWrapper>;

  beforeEach(() => {
    wrapper = renderWrapper();
  });

  test("should mount when passed to a Route component", () => {
    expect(wrapper.length).toBe(1);
  });

  test("should render without an error", () => {
    const component = findByTestAttr(wrapper, "page-TemplateName");
    expect(component.length).toBe(1);
  });
});
