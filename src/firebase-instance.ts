import firebase from "firebase/app";
import firebaseConfig from "./secret-message-eb337-firebase-config.json";

firebase.initializeApp(firebaseConfig);

export default firebase;
