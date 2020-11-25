import { ReactWrapper, ShallowWrapper } from "enzyme";
import { createLocation, createMemoryHistory } from "history";
import { RootStateOrAny } from "react-redux";
import { match, RouteChildrenProps } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AppDispatch, RootState } from "typings/store";

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

export const mockStore = configureMockStore<RootState, AppDispatch>([thunk]);
