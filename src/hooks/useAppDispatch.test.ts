import { useDispatch } from "react-redux";
import useAppDispatch from "./useAppDispatch";

describe("useAppDispatch", () => {
  test("should return a function", () => {
    expect(typeof useAppDispatch()).toBe("function");
  });

  test("should return a useDispatch function", () => {
    expect(useAppDispatch()).toBe(useDispatch());
  });
});
