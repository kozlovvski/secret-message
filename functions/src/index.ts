import * as admin from "firebase-admin";
export * from "./createMessage";

admin.initializeApp();

admin.firestore().settings({
  ignoreUndefinedProperties: true,
});
