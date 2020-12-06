import "firebase/firestore";

import firebase from "firebase-instance";
import { mockStore } from "test/testUtils";
import { GenericSMessage } from "typings/secret-message";

import * as newMessageModule from "./new-message.slice";

const {
  clearMessage,
  createMessage,
  createMessageError,
  createMessageRequest,
  createMessageSuccess,
  default: newMessage,
} = newMessageModule;

jest.spyOn(newMessageModule, "createMessageCloud");

describe("new message reducer", () => {
  it("should have a correct initial state", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(newMessage(undefined, {} as any)).toEqual({
      loading: false,
      success: false,
    });
  });

  it("should handle createMessageRequest", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(newMessage(undefined, { type: createMessageRequest })).toEqual({
      loading: true,
      success: false,
    });
  });

  it("should handle createMessageSuccess", () => {
    expect(
      newMessage(undefined, {
        type: createMessageSuccess,
        payload: {
          id: "1",
          createdAt: new firebase.firestore.Timestamp(1000, 0),
        } as GenericSMessage,
      })
    ).toEqual({
      loading: false,
      success: true,
      message: {
        id: "1",
        createdAt: { nanoseconds: 0, seconds: 1000 },
      },
    });
  });

  it("should handle createMessageError", () => {
    expect(
      newMessage(undefined, {
        type: createMessageError,
        payload: "some message",
      })
    ).toEqual({
      loading: false,
      success: false,
      error: "some message",
    });
  });

  it("should handle clearMessage", () => {
    expect(
      newMessage(undefined, {
        type: clearMessage,
      })
    ).toEqual({
      loading: false,
      success: false,
      message: undefined,
    });
  });

  describe("createMessage thunk", () => {
    beforeEach(() => {
      (newMessageModule.createMessageCloud as jest.Mock).mockResolvedValue({
        data: {},
      });
    });
    it("should dispatch expected actions on successful request", async () => {
      const store = mockStore({
        newMessage: {
          success: false,
          loading: false,
        },
      });
      const expectedActions = [
        createMessageRequest.type,
        createMessageSuccess.type,
      ];

      await store.dispatch(createMessage({ message: "test" }));

      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });

    it("should dispatch expected actions on rejected request", async () => {
      const store = mockStore({
        newMessage: {
          success: false,
          loading: false,
        },
      });
      const expectedActions = [
        createMessageRequest.type,
        createMessageError.type,
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await store.dispatch(createMessage({ message: 3 } as any));

      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
