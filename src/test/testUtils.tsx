import { ReactWrapper, ShallowWrapper } from "enzyme";
import { createLocation, createMemoryHistory } from "history";
import { match, RouteChildrenProps } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function findByTestAttr<
  O extends ShallowWrapper<any> | ReactWrapper<any>
>(wrapper: O, val: string): ShallowWrapper | ReactWrapper {
  return wrapper.find(`[data-testid="${val}"]`);
}

export function mockRouteChildrenProps({
  path = "",
  params = {},
  url = "",
  isExact = true,
}: Partial<match>): RouteChildrenProps {
  const match: match = { path, params, url, isExact };
  const location = createLocation(match.url);

  return {
    history: createMemoryHistory(),
    location,
    match,
  };
}
