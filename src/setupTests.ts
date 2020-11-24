import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import firebase from "firebase";
import firebaseConfig from "./secret-message-eb337-firebase-config.json";

configure({ adapter: new Adapter() });

firebase.initializeApp(firebaseConfig);
