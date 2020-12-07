import { useSelector } from "react-redux";

import useAppSelector from "./useAppSelector";

type DummyState = { testProp: "test value" };

describe("useAppSelector", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation(
      (call: (state: DummyState) => unknown) => call({ testProp: "test value" })
    );
  });

  test("should return a call to useSelector function", () => {
    expect(useAppSelector((state: DummyState) => state.testProp)).toBe(
      useSelector((state: DummyState) => state.testProp)
    );
  });
});
