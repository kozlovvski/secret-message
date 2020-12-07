import { useDispatch } from "react-redux";
import { AppDispatch } from "../typings/store";

export default () => useDispatch<AppDispatch>();
