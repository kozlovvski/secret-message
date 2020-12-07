import firebase from "firebase-instance";
import "firebase/auth";
import useAppDispatch from "hooks/useAppDispatch";

import { logInUser, logOutUser } from "../auth.slice";

const useAuthStateChanged = (): void => {
  const dispatch = useAppDispatch();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(logInUser());
    } else {
      dispatch(logOutUser());
    }
  });
};

export default useAuthStateChanged;
