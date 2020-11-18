import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import { CreateSMessagePayload } from "../../src/typings/secret-message";

export const createMessage = functions.https.onCall(
  async ({ message, uid }: CreateSMessagePayload) => {
    if (typeof message !== "string" || message.length === 0) {
      // Throwing an HttpsError so that the client gets the error details.
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Message invalid"
      );
    }
    if (uid !== undefined && typeof uid !== "string") {
      // Throwing an HttpsError so that the client gets the error details.
      throw new functions.https.HttpsError("invalid-argument", "Uid invalid");
    }
    const { id } = await admin
      .firestore()
      .collection("secret-messages")
      .add({
        message,
        uid,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      })
      .catch((err: Error) => {
        throw new functions.https.HttpsError("unknown", err.message);
      });
    return id;
  }
);
