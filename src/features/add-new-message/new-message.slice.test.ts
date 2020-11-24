import { GenericSMessage } from "typings/secret-message";
import firebase from "firebase-instance";
import "firebase/firestore";
import newMessage, {
  createMessageRequest,
  createMessageSuccess,
  createMessageError,
  clearMessage,
  createMessage,
} from "./new-message.slice";

// const createMessageCloud = jest.fn();
// jest.mock("./new-message.slice", () => ({
//   createMessageCloud: jest.fn(() => Promise.resolve({ id: "1" })),
// }));

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
    const dispatch = jest.fn();
    const getState = jest.fn();

    it("should dispatch a createMessageRequest action", async () => {
      createMessage({ message: "test message" })(dispatch, getState, undefined);
      expect(dispatch).toHaveBeenCalledWith(createMessageRequest());
    });

    // TODO: find a way to test thunks, check why dispatch is called only once
    // describe("when request succeeds", () => {
    //   beforeEach(() => {
    //     createMessageCloud.mockResolvedValue({
    //       id: "3",
    //       createdAt: new firebase.firestore.Timestamp(500, 30),
    //       alreadyViewed: false,
    //     });
    //   });

    //   it("should dispatch a createMessageSuccess", () => {
    //     createMessage({ message: "createMessageSuccess test" })(
    //       dispatch,
    //       getState,
    //       undefined
    //     );
    //     console.log(dispatch.mock.calls)
    //     expect(dispatch).toHaveBeenLastCalledWith(
    //       createMessageSuccess({
    //         id: "3",
    //         createdAt: new firebase.firestore.Timestamp(500, 30),
    //         alreadyViewed: false,
    //       })
    //     );
    //   });
    // });
  });
});
