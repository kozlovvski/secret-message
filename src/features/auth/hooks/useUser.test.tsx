import firebase from "firebase-instance";

import useUser from "./useUser";

describe("useUser", () => {
  test("should return a current firebase user", () => {
    expect(useUser()).toBe(firebase.auth().currentUser);
  });
});
