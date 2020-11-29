/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as admin from "firebase-admin";
import * as path from "path";
import firebaseTest = require("firebase-functions-test");

const firebaseConfig = {
  databaseURL: "https://secret-message-eb337.firebaseio.com",
  storageBucket: "secret-message-eb337.appspot.com",
  projectId: "secret-message-eb337",
};

export const testEnv = firebaseTest(
  firebaseConfig,
  path.resolve("secret-message-eb337-firebase-adminsdk-xa3oc-c9168c99e1.json")
);

export const getMessageRef = (id: string) =>
  admin.firestore().collection("secret-messages").doc(id);

admin.initializeApp();
admin.firestore().settings({
  ignoreUndefinedProperties: true,
});
