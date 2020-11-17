/**
 * Response type for `listMessages` cloud function
 */
type ListSMessagesResponse = Array<{
  id: string;
  createdAt: number;
  alreadyViewed: boolean;
}>;

/**
 * Payload type for `checkMessage` cloud function. This function checks if a message with given id exists
 */
type CheckSMessagePayload = {
  id: string;
};

/**
 * Payload type for `getMessage` cloud function. This function checks gets message content and deletes the message in the database
 */
type GetSMessagePayload = {
  id: string;
};

/**
 * Response type for `getMessage` cloud function. This function checks gets message content and deletes the message in the database
 */
type GetSMessageResponse = {
  message?: string;
  uid?: string;
  id: string;
  createdAt: number;
  alreadyViewed: boolean;
};

/**
 * Payload type for `createMessage` cloud function. This function creates a new message in the database
 */
type CreateSMessagePayload = {
  message: string;
};

/**
 * Payload type for `assignUser` cloud function. This function assigns messages created before loggin in to the user after they log in.
 */
type AssignUserPayload = {
  ids: string[];
};

/**
 * Payload type for `deleteMessage` cloud function. This function delates a new message in the database
 */
type DeleteSMessagePayload = {
  id: string;
};
