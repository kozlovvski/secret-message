import useAuthStateChanged from "./useAuthStateChanged";

describe("useAuthStateChanged", () => {
  test("should return void", () => {
    expect(useAuthStateChanged()).toBe(undefined);
  });
});
