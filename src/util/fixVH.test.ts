import fixVH from "./fixVH";

describe("fixVH", () => {
  test("should be a function", () => {
    expect(typeof fixVH).toBe("function");
  });

  test("should return void", () => {
    expect(fixVH()).toBe(undefined);
  });
});
