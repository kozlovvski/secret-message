import * as rr from "react-redux";

declare module "react-redux" {
  /**
   * WARNING: this function is exported ONLY for test files in setupTests.ts
   * Do NOT use it in actual source code
   */
  const mockDispatch = jest.fn();
}
