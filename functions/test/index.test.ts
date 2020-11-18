import * as admin from "firebase-admin";
import * as path from "path";
import firebaseTest = require("firebase-functions-test");

const firebaseConfig = {
  databaseURL: "https://secret-message-eb337.firebaseio.com",
  storageBucket: "secret-message-eb337.appspot.com",
  projectId: "secret-message-eb337",
};

const testEnv = firebaseTest(
  firebaseConfig,
  path.resolve("secret-message-eb337-firebase-adminsdk-xa3oc-c9168c99e1.json")
);

import myFunctions = require("../src/index"); // relative path to functions code

const { createMessage } = myFunctions;

const getMessageRef = (id: string) =>
  admin.firestore().collection("secret-messages").doc(id);

describe("createMessage", () => {
  const wrapped = testEnv.wrap(createMessage);

  it("should reject when message is undefined", async () => {
    await expect(wrapped({})).rejects.toBeTruthy();
  });

  it("should reject when message is not a string", async () => {
    await expect(wrapped({ message: 3 })).rejects.toBeTruthy();
  });

  it("should resolve when message is a string", async () => {
    const call = wrapped({ message: "test message" });
    expect(call).resolves.toBeTruthy();

    call.then((id: string) => {
      getMessageRef(id).delete();
    });
  });

  it("should return a string when resolved", async () => {
    const id = await wrapped({ message: "test message" });
    expect(typeof id).toBe("string");

    getMessageRef(id).delete();
  });

  it("should create a new document in Firestore", async () => {
    const id: string = await wrapped({ message: "test message" });

    const messageSnapshot = await getMessageRef(id).get();
    expect(messageSnapshot.exists).toBe(true);

    getMessageRef(id).delete();
  });
});

testEnv.cleanup();
