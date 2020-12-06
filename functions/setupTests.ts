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
  path.resolve("service-account.json")
);

export const getMessageSnap = async (id: string) => {
  const querySnap = await admin
    .firestore()
    .collection("secret-messages")
    .where("id", "==", id)
    .get();

  return querySnap.docs[0];
};

export const getMessageRef = async (id: string) =>
  getMessageSnap(id).then((snap) => snap.ref);

export const deleteById = async (id: string) =>
  getMessageRef(id).then((ref) => ref.delete());

admin.initializeApp();
admin.firestore().settings({
  ignoreUndefinedProperties: true,
});
