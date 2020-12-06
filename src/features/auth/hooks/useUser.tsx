import "firebase/auth";

import firebase from "firebase-instance";

const useUser = (): firebase.User | null => {
  return firebase.auth().currentUser;
};

export default useUser;
