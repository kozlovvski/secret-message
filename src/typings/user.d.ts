/**
 * Payload type for creating new user
 */
export type SignUpPayload = {
  email: string;
  password: string;
  displayName: string;
};

/**
 * Payload type for creating new user
 */
export type SignInPayload = {
  email: string;
  password: string;
};

/**
 * Valid states for authscreen components displaying
 */
export type ValidAuthscreen = "signUp" | "signIn";
