import { useSelector } from "react-redux";

import useAppSelector from "./useAppSelector";

type DummyState = { testProp: "test value" };

jest.mock("react-redux", () => ({
  useSelector: (call: (state: DummyState) => unknown) =>
    call({ testProp: "test value" }),
}));

describe("useAppSelector", () => {
  test("should return a call to useSelector function", () => {
    expect(useAppSelector((state: DummyState) => state.testProp)).toBe(
      useSelector((state: DummyState) => state.testProp)
    );
  });
});
