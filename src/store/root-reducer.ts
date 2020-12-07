import { combineReducers } from "redux";
import newMessage from "../features/add-new-message/new-message.slice";
import auth from "../features/auth/auth.slice";

export default combineReducers({
  newMessage,
  auth,
});
