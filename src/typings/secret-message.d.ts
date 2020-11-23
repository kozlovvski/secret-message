/**
 * A secret message without message field.
 */
export type GenericSMessage = {
  id: string;
  uid?: string;
  createdAt: number;
  alreadyViewed: boolean;
};

/**
 * Response type for `listMessages` cloud function
 */
export type ListSMessagesResponse = Array<GenericSMessage>;

/**
 * Payload type for `checkMessage` cloud function. This function checks if a message with given id exists
 */
export type CheckSMessagePayload = {
  id: string;
};

/**
 * Payload type for `getMessage` cloud function. This function checks gets message content and deletes the message in the database
 */
export type GetSMessagePayload = {
  id: string;
};

/**
 * Response type for `getMessage` cloud function. This function checks gets message content and deletes the message in the database
 */
export type GetSMessageResponse = GenericSMessage & {
  message?: string;
};

/**
 * Payload type for `createMessage` cloud function. This function creates a new message in the database
 */
export type CreateSMessagePayload = {
  message: string;
};

/**
 * Payload type for `assignUser` cloud function. This function assigns messages created before loggin in to the user after they log in.
 */
export type AssignUserPayload = {
  ids: string[];
};

/**
 * Payload type for `deleteMessage` cloud function. This function delates a new message in the database
 */
export type DeleteSMessagePayload = {
  id: string;
};
