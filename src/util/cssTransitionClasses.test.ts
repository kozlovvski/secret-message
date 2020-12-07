import cssTransitionClasses from "./cssTransitionClasses";

const styles: Record<string, string> = {};

describe("cssTransitionClasses", () => {
  test("should be a function", () => {
    expect(typeof cssTransitionClasses).toBe("function");
  });

  test("should return a correct object", () => {
    expect(cssTransitionClasses(styles, "test")).toStrictEqual({
      appear: styles[`test-appear`],
      appearActive: styles[`test-appear-active`],
      appearDone: styles[`test-appear-done`],
      enter: styles[`test-enter`],
      enterActive: styles[`test-enter-active`],
      enterDone: styles[`test-enter-done`],
      exit: styles[`test-exit`],
      exitActive: styles[`test-exit-active`],
      exitDone: styles[`test-exit-done`],
    });
  });
});
