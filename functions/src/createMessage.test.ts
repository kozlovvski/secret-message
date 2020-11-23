import { GenericSMessage } from "../../src/typings/secret-message";
import { deleteById, getMessageSnap, testEnv } from "../setupTests";
import { createMessage } from "./createMessage";

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

    call.then(({ id }: GenericSMessage) => {
      deleteById(id);
    });
  });

  it("should return an object when resolved", async () => {
    const doc: GenericSMessage = await wrapped({ message: "return test" });
    expect(typeof doc).toBe("object");

    deleteById(doc.id);
  });

  it("should not return a message field when resolved", async () => {
    const doc = await wrapped({ message: "return message field test" });
    expect(doc.message).toBe(undefined);

    deleteById(doc.id);
  });

  it("should create a new document in Firestore", async () => {
    const doc: GenericSMessage = await wrapped({ message: "test message" });

    const messageSnapshot = await getMessageSnap(doc.id);
    expect(messageSnapshot.exists).toBe(true);

    deleteById(doc.id);
  });
});

testEnv.cleanup();
