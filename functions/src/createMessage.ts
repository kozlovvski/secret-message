import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { omit } from "lodash";
import shortid = require("shortid");

import {
  CreateSMessagePayload,
  GenericSMessage,
} from "../../src/typings/secret-message";

export const createMessage = functions.https.onCall(
  async ({ message }: CreateSMessagePayload, context) => {
    if (!(typeof message === "string") || message.length === 0) {
      // Throwing an HttpsError so that the client gets the error details.
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Message invalid"
      );
    }
    const uid = context.auth?.uid;
    const docRef = await admin
      .firestore()
      .collection("secret-messages")
      .add({
        id: shortid.generate(),
        message,
        uid,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        alreadyViewed: false,
      })
      .catch((err: Error) => {
        throw new functions.https.HttpsError("unknown", err.message);
      });
    const docSnap = await docRef.get();
    return omit(docSnap.data(), "message") as GenericSMessage;
  }
);
