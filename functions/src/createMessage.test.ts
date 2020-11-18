import { getMessageRef, testEnv } from "../setupTests";
import createMessage from "./createMessage";

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
